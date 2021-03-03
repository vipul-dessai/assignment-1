angular.module('app', ['ngTouch', 'ui.grid','ui.grid.pagination','ui.grid.resizeColumns', 'ui.grid.moveColumns','ui.grid.expandable', 'ui.grid.selection', 'ui.grid.pinning'])
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http){
  
    $scope.gridOptions1 = {
      expandableRowTemplate: '<div ui-grid="row.entity.subGridOptions" style="height:150px;"></div>',
      expandableRowHeight: 150,
      expandableRowScope: {
      subGridVariable: 'subGridScopeVariable'
      },
      enableColumnResizing: true,
      paginationPageSizes: [25, 50, 75],
      paginationPageSize: 25,
      enableSorting: false,
      columnDefs: [
        { name: 'userId' },
        { name: 'id'},
    ]
  };

  $http.get('https://jsonplaceholder.typicode.com/posts')
  .then(function(response){
    var data=response.data;
  
    for(i = 0; i < data.length; i++){
      data[i].subGridOptions = {
        columnDefs: [ ,{name: 'title', field: 'title'},{name: 'body', field: 'body'}],
        data: response.data
      };   
    }
    $scope.gridOptions1.data = response.data;
  });
}]);