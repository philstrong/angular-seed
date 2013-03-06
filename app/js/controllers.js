'use strict';

/* Controllers */


function TodoCtrl($scope) {
    $scope.totalTodos = 22;

    $scope.remaining = function() {
        return $scope.todos.length;
    };

    $scope.getToday = function() {
        var start = new Date();
        start.setHours(0,0,0,0);

        var end = new Date();
        end.setHours(23,59,59,999);

        var weekout = new Date(end);
        weekout = new Date(weekout.setDate(end.getDate() + 7));
        return {
            start: start,
            end: end,
            weekout: weekout
        };
    };

    $scope.isToday = function(dt) {
        if (typeof dt.getMonth !== 'function') {
            dt = new Date(dt);
        }

        var today = new Date();
        return dt.getYear() === today.getYear() && dt.getMonth() === today.getMonth() && dt.getDay() === today.getDay();
    };

    $scope.late = function() {
        var late = [],
            todos = $scope.todos,
            today = $scope.getToday(),
            dt;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);

            if (dt < today.start) {
                late.push(todos[i]);
            }
        }
        return late;
    };



    $scope.today = function() {
        var late = [],
            todos = $scope.todos,
            today = $scope.getToday(),
            dt;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);

            if (dt >= today.start && dt <= today.end) {
                late.push(todos[i]);
            }
        }
        return late;
    };

    $scope.soon = function() {
        var late = [],
            todos = $scope.todos,
            today = $scope.getToday(),
            dt;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);
            if (dt > today.end && dt < today.weekout) {
                late.push(todos[i]);
            }
        }
        return late;
    };

    $scope.someday = function() {
        var late = [],
            todos = $scope.todos,
            today = $scope.getToday(),
            dt;


        for (var i = 0; i < todos.length; i++) {
            dt = new Date(todos[i].due);
            if (dt > today.weekout) {
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

        if (date < now) {
            seconds = Math.floor((now - date) / 1000);
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
                return interval + " hours ago";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return "less than an hour";
            }
            return Math.floor(seconds) + " seconds";
        } else {
            seconds = Math.floor((date - now) / 1000);
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
        {
            title: 'Fix my bike',
            duration: 20,
            due:"2013-03-01T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Write up meeting notes',
            duration: 60,
            due:"2013-04-01T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Floss',
            duration: 1,
            due:"2013-01-01T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Meet with stress councillor',
            duration: 50,
            due:"2013-01-15T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Bake a cake for Aunty Flo',
            duration: 35,
            due:"2013-03-20T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Organize recycling',
            duration: 41,
            due:"2013-06-20T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Call locksmith',
            duration: 3,
            due:"2013-03-06T13:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Book haircut',
            duration: 3,
            due:"2013-03-06T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: null,
            deleted: false
        },
        {
            title: 'Test test test',
            duration: 3,
            due:"2013-03-05T08:00:00.000Z",
            created:"2013-03-01T08:00:00.000Z",
            completed: "2013-03-05T08:00:00.000Z",
            deleted: true
        }
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
    $scope.onItemClick = function(data) {
        $scope.itemData = data;
    };
}
