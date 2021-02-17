(function() {
    'use strict';
    angular.module('Data')
        .controller('MenuItemController', MenuItemController);

    MenuItemController.$inject = ['menuItems'];
    function MenuItemController(menuItems) {
        var menu = this;
        menu.menuItems = menuItems.menu_items;
        menu.categoryDetails = menuItems.categoryDetails;

    }
})();