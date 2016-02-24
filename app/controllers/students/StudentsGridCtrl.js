StudIS.controller('StudentsGridCtrl', ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {
        $scope.gridOptions = {
            enableFiltering: true,
            enableColumnResizing: true,
            columnDefs: [
                {name: '№', field: 'extcount', width:70, enableHiding: false},
                {name: 'Фамилия',  field: 'surname', enableHiding: false},
                {name: 'Имя', field: 'name', enableHiding: false},
                {name: 'Отчество', field: 'patronymic', enableHiding: false},
                {name: 'Дата рождения', field: 'birthday', enableHiding: false},
                {name: 'Дата поступления', field: 'receipt_date', type: 'date', cellFilter: 'date:"dd.MM.yyyy"', enableHiding: false, filters: [
                    {
                        /*condition: uiGridConstants.filter.GREATER_THAN,*/

                        placeholder: 'От'

                    },
                    {
                        /*condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL,*/

                        placeholder: 'До'
                    }],
                    cellFilter: 'dateRange'
                },
                {name: 'Специальность', field: 'specialty', enableHiding: false},
                {name: 'пол', field: 'sex', width:65, enableHiding: false, filter: {
                    type: uiGridConstants.filter.SELECT,
                    selectOptions: [ { value: '1', label: 'М' }, { value: '2', label: 'Ж' }]},
                    cellFilter: 'mapGender'
                },
                {name: 'Статус', field: 'status', enableHiding: false, filter: {
                    type: uiGridConstants.filter.SELECT,
                    selectOptions: [
                        { value: '1', label: 'Учится' },
                        { value: '2', label: 'Отчислен' },
                        { value: '3', label: 'Академический отпуск'}
                    ]},
                    cellFilter: 'mapStatus'
                }
            ]
        }
        $scope.gridOptions.data = [
            {
                'id': 0,
                'extcount': 3412,
                'surname': 'Листьев',
                'name': 'Виктор',
                'patronymic': 'Евгеневич',
                'birthday': '12.12.1992',
                'receipt_date': '12.12.1996',
                'specialty': 'Правоохранительная деятельность',
                'sex': '1',
                'status': 1,
            },
            {
                'id': 1,
                'extcount': 3413,
                'surname': 'Федоров',
                'name': 'Андрей',
                'patronymic': 'Ивановоич',
                'birthday': '12.04.1993',
                'receipt_date': '12.12.1993',
                'specialty': 'Правоохранительная деятельность',
                'sex': '1',
                'status': 3,
            },
            {
                'id': 2,
                'extcount': 3414,
                'surname': 'Краснов',
                'name': 'Алексей',
                'patronymic': 'Васильевич',
                'birthday': '24.07.1994',
                'receipt_date': '12.12.1995',
                'specialty': 'Правоохранительная деятельность',
                'sex': '1',
                'status': 2,
            },
            {
                'id': 3,
                'extcount': 3415,
                'surname': 'Черняева',
                'name': 'Екатерина',
                'patronymic': 'Андреева',
                'birthday': '24.02.1994',
                'receipt_date': '12.12.1994',
                'specialty': 'Правоохранительная деятельность',
                'sex': '2',
                'status': 1,
            }
        ]
    }])
    .filter('dateRange', function() {
        return function(data, from, to) {
            return gridOptions.data.filter(function(record) {
                return record.Date >= from && record.Date <= to;
            });
        }
    })
    .filter('mapGender', function() {
        var genderHash = {
            1: 'М',
            2: 'Ж'
        };

        return function(input) {
            if (!input){
                return '';
            } else {
                return genderHash[input];
            }
        };
    })
    .filter('mapStatus', function() {
        var statusHash = {
            1: 'Учится',
            2: 'Отчислен',
            3: 'Академический отпуск'
        };

        return function(input) {
            if (!input){
                return '';
            } else {
                return statusHash[input];
            }
        };
    });