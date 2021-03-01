angular.module('app', ['ngTouch', 'ui.grid','ui.grid.pagination','ui.grid.resizeColumns', 'ui.grid.moveColumns'])
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http){
  
    $scope.gridOptions1 = {
      enableColumnResizing: true,
      paginationPageSizes: [25, 50, 75],
      paginationPageSize: 25,
    enableSorting: false,
    columnDefs: [
      { name: 'userId' },
      { name: 'id'},
      { name: 'title'},
      { name: 'body'}
    ]
  };

  $http.get('https://jsonplaceholder.typicode.com/posts')
  .then(function(response){
    console.log(response.data);
    $scope.gridOptions1.data = response.data;
  });
}]);