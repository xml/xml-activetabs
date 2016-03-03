(function() {
  'use strict';

  angular
    .module('demo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.design', {
        url: '/design',
        templateUrl: 'app/components/xl-tab-templates/design-tab.html',
      })
      .state('home.automate', {
        url: '/automate',
        templateUrl: 'app/components/xl-tab-templates/automate-tab.html',
      })
      .state('home.test', {
        url: '/test',
        templateUrl: 'app/components/xl-tab-templates/test-tab.html',
      });

    $urlRouterProvider.otherwise('/home/design');
  }

})();
