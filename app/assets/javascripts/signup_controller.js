(function() {
	'use strict';
	angular.module('aptlee')
	  .controller('SignupController', SignupController);

	SignupController.$inject = ['$http'];

	function SignupController($http) {
	  var self = this;
	  self.email;
	  self.buttonClicked = false;

	  self.submit = function() {
	  	self.buttonClicked = true;
	  	// $http.post('/create', { email: self.email })
	  	//   .then(function() {
	  	//   	console.log("POST succeeded");
	  	//   });
	  };

	  self.showInputForm = function() {
	  	return !self.buttonClicked;
	  };
	}
})();
