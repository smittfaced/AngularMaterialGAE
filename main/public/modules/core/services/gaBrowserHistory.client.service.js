(function() {
  'use strict';
  var module = angular.module('core');

  /**
   * @name gaBrowserHistory
   * @memberOf angularModule.core
   * @description
   * Keeps track of states user navigates
   */

  module.factory('gaBrowserHistory', function($state, $rootScope, _, $transitions, gaAuthentication) {
    var history = [];
    var ignoredStates = ['signout', 'signin'];

    return {
      /**
       * Initialize browser history. This has to be run on app startup
       */
      init: function() {
        history = [];
        /*jslint unparam:true*/

        $transitions.onBefore({}, state => {

          if (state.to().abstract || _.includes(ignoredStates, state.from().name)) {
            return;
          } else {
            history.push({
              state: state.from(),
              params: state.params()
            })
          };
        });
      },

      /**
       * Navigates back to previous state
       * If user is logged and his previous state was signin page, it won't redirect there
       */
      back: function() {
        var state = history.pop();
        if (!state || (gaAuthentication.isLogged() && state.state.data && state.state.data.signedOutOnly)) {
          $state.go('home');
        } else {
          $state.go(state.state, state.params);
        }
      }

    };

  });

}());
