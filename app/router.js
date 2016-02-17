StudIS.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/dashboard");
    $urlRouterProvider.when('/',"/dashboard");
    $stateProvider
        .state('index', {
            url: '',
            abstract:true,
            views: {
                'top-navbar': {
                    templateUrl: 'app/views/tpl/top-navbar.html'
                },
                'sidebar': {
                    templateUrl: 'app/views/tpl/sidebar.html'
                },
                'container': {
                    templateUrl: 'app/views/tpl/container.html',

                },
                'footer': {
                    templateUrl: 'app/views/tpl/footer.html'
                }
            }
        })
        .state('index.dashboard', {
            url: "/dashboard",
            views: {
                'workspace': {
                    templateUrl: "app/views/dashboard/dashboard.html"
                }
            }

        })
        .state('index.students', {
            url: "/students",
            views: {
                'workspace': {
                    templateUrl: "app/views/students/students.html"
                }
            }

        });
});
