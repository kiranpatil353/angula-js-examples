app.controller('MainController',
['$scope' , function($scope) {
  	$scope.title = 'This is my string';
    $scope.promo = 'This is my new string';
   
  
  $scope.products = [ 
  { 
    name: 'The Book of Trees', 
    dislikes : 0,
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg' ,
    likes: 0,


  }, 
  { 
    name: 'Program or be Programmed', 
    dislikes : 0,
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' ,
    likes: 0,

 
  },  
  { 
    name: 'Papilon', 
    dislikes : 0,
    price: 200, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    
  
  }, 
  { 
    name: 'Alchemist', 
    dislikes : 0,
    price: 100, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' ,
    likes: 0,
   
  
  } 
];
 	$scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
	};	
  $scope.minusOne = function(index) { 
  $scope.products[index].dislikes += 1; 
	};
}]);

