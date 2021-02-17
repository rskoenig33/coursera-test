(function() {
    'use strict';
    angular.module('Data')
        .component('categoryList', {
            templateUrl: 'src/menuapp/templates/categorylist.template.html',
            bindings: {
                items: '<'
            }
        });
})();