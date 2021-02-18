(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to homepage if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Setup UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.template.html'
            })

        // Categories List
        // Called by clicking on the link on home page
        // goes to the categories.template.html and callses the service listed under resolve
        // to get the full list of categories.
        //passes control to the CategoryController as cC and the template
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/templates/categories.template.html',
                controller: 'CategoryController as cC',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

        // Items List
         // Called by clicking on the link on categorieslist template
        // goes to the items.template.html and callses the service listed under resolve
        // to get the full list of menu_items within the category.
        //passes control to the MenuItemController  passing the object (containing 2 arrays) as iC 
        // the breaks the arrays out of the object which are then bound to the component ('<')e 
        //the items.template calls the menuitems.template and passes items and details 
            .state('items', {
                url: '/categories/{short_name}',
                templateUrl: 'src/menuapp/templates/items.template.html',
                controller: 'MenuItemController as iC',
                resolve: {
                    menuItems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                        var short_name = $stateParams.short_name;
                        
                        return MenuDataService.getItemsForCategory(short_name)
                            .then(function(response) {
                                var shortmenu = {
                                    menu_items : [],
                                    categoryDetails : []

                                };
                                shortmenu.menu_items = response.menu_items;
                                shortmenu.categoryDetails = response.category;
                                
                                return shortmenu;
                            })
                            .catch(function (error) {
                                console.log("resolve for items not working:");
                            })
                    }]
                }
        });

    }


})();