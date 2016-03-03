(function() {
  'use strict';

  angular
    .module('demo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1456979927210;
    vm.showToastr = showToastr;

    vm.designThings = [{ "title": "AngularJS", "url": "https://angularjs.org/", "description": "HTML enhanced for web apps!", "logo": "angular.png", "rank": 0.9362397422082722 },{ "title": "Material Design Lite", "url": "http://www.getmdl.io/", "description": "Add a Material Design look and feel to your websites.", "logo": "material-design-lite.png", "rank": 0.13795765256509185 }, { "title": "Sass (Node)", "url": "https://github.com/sass/node-sass", "description": "Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.", "logo": "node-sass.png", "rank": 0.6407893302384764 }];
    vm.automateThings = [{ "title": "BrowserSync", "url": "http://browsersync.io/", "description": "Time-saving synchronised browser testing.", "logo": "browsersync.png", "rank": 0.15251381951384246 },{ "title": "GulpJS", "url": "http://gulpjs.com/", "description": "The streaming build system.", "logo": "gulp.png", "rank": 0.08532551489770412 },];
    vm.testThings = [{ "title": "Jasmine", "url": "http://jasmine.github.io/", "description": "Behavior-Driven JavaScript.", "logo": "jasmine.png", "rank": 0.5466663991101086 },{ "title": "Karma", "url": "http://karma-runner.github.io/", "description": "Spectacular Test Runner for JavaScript.", "logo": "karma.png", "rank": 0.39687960618175566 }, { "title": "Protractor", "url": "https://github.com/angular/protractor", "description": "End to end test framework for AngularJS applications built on top of WebDriverJS.", "logo": "protractor.png", "rank": 0.4947457870002836 }];

    activate();

    function activate() {
      // getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });

    }
  }
})();
