StudIS.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('index', {
            url: '',
            views: {
                'top-navbar': {
                    templateUrl: 'app/views/tpl/top-navbar.html'
                },
                'sidebar': {
                    templateUrl: 'app/views/tpl/sidebar.html'
                },
                'container': {
                    templateUrl: 'app/views/tpl/container.html'
                },
                'footer': {
                    templateUrl: 'app/views/tpl/footer.html'
                }
            }

        })
        .state('index.dashboard', {
            url: "/dashboard",
            templateUrl: "app/views/dashboard/dashboard.html"
        })
        .state('students', {
            url: "/students",
            templateUrl: "app/views/students/students.html"
        });
});
