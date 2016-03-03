'use strict';

angular.module('xml.directives', [])
  .directive('xmlDetectActiveTab', ['$location',
    function($location) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {

          function detectHandler(event, current, previous) {
            /*
            Designed for full re-usability at any path, any level, by using data from attrs.
            This version assumes you want to style the <a>, not the <li>
            Declare like this: <li class="nav_tab"><a href="#/home" xml-detect-active-tab="1">HOME</a></li>
            */

            // This var grabs the tab-level off the attribute, or defaults to 1
            var pathLevel = attrs.xmlDetectActiveTab || 1,
              // This var finds what the path is at the level specified
              pathToCheck = $location.path().split('/')[pathLevel] || "current $location.path doesn't reach this level",
              // This var finds grabs the same level of the href attribute
              tabLink = attrs.href.split('/')[pathLevel] || "href doesn't include this level";

            console.log(pathToCheck);
            console.log(tabLink);
            // Above, we use the logical 'or' operator to provide a default value in cases
            // where 'undefined' would otherwise be returned.
            // This prevents cases where undefined===undefined, possibly causing multiple tabs to be 'active'.

            // now compare the two:
            /* TO-DO: track state inside the directive, and only add/remove class if necessary,
            thus minimizing DOM operations.*/
            if (pathToCheck === tabLink) {
              element.addClass("active");
              // if you want to style the container <li> rather than the <a>, use:
              // element.parent().addClass("active");
            } else {
              element.removeClass("active");
              // if you want to style the container <li> rather than the <a>, use:
              // element.parent().removeClass("active");
            }
          }
          // for regular angular router
          scope.$on("$routeChangeSuccess", detectHandler);
          // for ui-router
          scope.$on("$stateChangeSuccess", detectHandler);
        }
      };
    }
  ]);

angular.module('xml.directives')
  .directive('xmlFindActiveTab', ['$location',
    function($location) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
          function findHandler(event, current, previous) {
            /*  designed for full re-usability at any path, any level, by using data from attrs
                declare like this:
                  <nav xml-find-active-tab="1">
                    <a href="#/home">HOME</a>
                  </nav>

            */

            // this var grabs the tab-level off the attribute, or defaults to 1
            var pathLevel = attrs.xmlFindActiveTab || 1,
              // this var finds what the $location.path is at the level specified
              pathToCheck = $location.path().split('/')[pathLevel] || "current $location.path doesn't reach this level";

            // now, iterate the children. Ideally, child elements should all be <a>'s.
            angular.forEach(element.children(), function(item) {
              var specimen = angular.element(item),
                // find each item's matching level on the href attribute
                tabLink = specimen.attr('href').split('/')[pathLevel] || "href doesn't include this level";
              // now compare the item to the current $location:
              if (pathToCheck === tabLink) {
                specimen.addClass("active");
              } else {
                specimen.removeClass("active");
              }
            })
          }
          // for regular angular router
          scope.$on("$routeChangeSuccess", findHandler);
          // for ui-router
          scope.$on("$stateChangeSuccess", findHandler);
        }
      };
    }
  ]);
