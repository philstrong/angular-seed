'use strict';

/* Controllers */


function TodoCtrl($scope) {
    $scope.totalTodos = 22;

    $scope.remaining = function() {
        return $scope.todos.length;
    };

    $scope.late = function() {
        var late = [],
            todos = $scope.todos,
            today = Date.now(),
            dt;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);

            if (dt < today && !$scope.isToday(dt)) {
                late.push(todos[i]);
            }
        }
        return late;
    };

    $scope.isToday = function(dt) {
        if (typeof dt.getMonth !== 'function') {
            dt = new Date(dt);
        }

        var today = new Date();
        return dt.getYear() === today.getYear() && dt.getMonth() === today.getMonth() && dt.getDay() === today.getDay();
    };

    $scope.today = function() {
        var late = [],
            todos = $scope.todos,
            today = Date.now(),
            dt, seconds, interval;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);

            if ($scope.isToday(dt)) {
                late.push(todos[i]);
            }
        }
        return late;
    };

    $scope.soon = function() {
        var late = [],
            todos = $scope.todos,
            today = Date.now(),
            dt;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);
            if (dt < today) {
                late.push(todos[i]);
            }
        }
        return late;
    };

    $scope.someday = function() {
        var late = [],
            todos = $scope.todos,
            today = Date.now(),
            dt;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);
            if (dt < today) {
                late.push(todos[i]);
            }
        }
        return late;
    };

    $scope.timeSince = function(date) {
        var now = new Date(),
            seconds,
            interval;
        // today, tommorow
        date = new Date(date);

        seconds = Math.floor((now - date) / 1000);
        if (date < now) {
            // late
            interval = Math.floor(seconds / 31536000);

            if (interval > 1) {
                return interval + " years ago";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " months ago";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " days ago";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return "today";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return "today";
            }
            return Math.floor(seconds) + " seconds";
        } else {
            interval = Math.floor(seconds / 31536000);
            if (interval > 1) {
                return "in " + interval + " years";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return "in " + interval + " months";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return "in " + interval + " days";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return "today";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return "today";
            }
            return Math.floor(seconds) + " seconds";
        }


    };

    $scope.todos = [
        {"title":"Pay electric bill","duration":600,"due":"2013-03-01T08:00:00.000Z","created":"2013-03-06T00:57:47.000Z","updated":"2013-03-06T00:57:47.000Z","completed":null,"deleted":false,"id":"b1-68691467-45"},
        {"title":"Walk","duration":600,"due":"2013-03-06T08:00:00.000Z","created":"2013-03-06T00:57:47.000Z","updated":"2013-03-06T00:57:47.000Z","completed":null,"deleted":false,"id":"b1-68691467-45"},
        {"title":"Walk","duration":600,"due":"2013-03-05T08:00:00.000Z","created":"2013-03-06T00:57:47.000Z","updated":"2013-03-06T00:57:47.000Z","completed":null,"deleted":false,"id":"b1-68691467-45"}
    ];
}
// TodoItemCtrl.$inject = [];
// MyCtrl2.$inject = [];

function LoginController($scope, $location) {
    $scope.signIn = function() {
        $location.path('/main');
    };
}

function MainController($scope) {
}
