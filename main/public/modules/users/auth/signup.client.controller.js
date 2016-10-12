(function() {
    'use strict';
    var module = angular.module('users');

    module.controller('SignupController', function($scope, Restangular, gaAppConfig, gaToast, gaValidators, gaBrowserHistory,
                                                   gaAuthentication, _, gaTracking, $state) {
        if (gaAuthentication.isLogged()) {
            gaBrowserHistory.back();
        }

        $scope.cfg = gaAppConfig;
        $scope.captchaControl = {};
        $scope.validators = gaValidators;

        $scope.signup = function() {
            $scope.loading = true;
            Restangular.all('auth/signup').post($scope.credentials).then(function(user) {
                if ($scope.cfg.verify_email) {
                    gaToast.show('Your account has been created! Please verify your email');
                    $state.go('home');
                } else {
                    gaAuthentication.setUser(user);
                    gaBrowserHistory.back();
                }
                gaTracking.eventTrack('Signup', $scope.credentials.email);
            }, function() {
                _.attempt($scope.captchaControl.reset);
            });
        };
    });
}());
