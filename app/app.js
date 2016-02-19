var StudIS = angular.module('StudIS', ['ui.router','ui.grid', 'ui.grid.cellNav']);

StudIS.controller('StudentsGridCtrl', ['$scope', function($scope) {
    $scope.columnNames = [
        {name: 'Фамилия', field: 'surname'},
        {name: 'Имя', field: 'name' },
        {name: 'Отчество', field: 'patronymic'},
        {name: 'Дата рождения', field: 'birthday'},
        {name: 'Дата поступления', field: 'receipt_date'},
        {name: 'Статус', field: 'status'}
    ];
    $scope.myData = [
        {
            "id": 0,
            "surname": "Федоров",
            "name": "Андрей",
            "patronymic": "Ивановоич",
            "birthday": "12.11.1992",
            "receipt_date": "05.07.2012",
            "status": "Студен",
        },
        {
            "id": 1,
            "surname": "Федоров",
            "name": "Андрей",
            "patronymic": "Ивановоич",
            "birthday": "12.11.1992",
            "receipt_date": "05.07.2012",
            "status": "Студен",
        },
        {
            "id": 2,
            "surname": "Федоров",
            "name": "Андрей",
            "patronymic": "Ивановоич",
            "birthday": "12.11.1992",
            "receipt_date": "05.07.2012",
            "status": "Студен",
        }
    ]
}]);

