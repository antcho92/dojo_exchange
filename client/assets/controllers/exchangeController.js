app.controller('exchangeController', ['$scope', 'exchangeFactory', '$routeParams', function($scope, eF, $routeParams) {
  var self = this;
  this.customQuestions = [
    {id: 1}
  ];
  // dynamically add settings input in form
  this.addQuestion = function() {
    var newQuestionNum = this.customQuestions.length + 1;
    this.customQuestions.push({'id': newQuestionNum})
  }
  this.create = function() {
    this.newExchange.customQuestions = this.customQuestions;
    console.log(this.newExchange);
    eF.create(this.newExchange);
  }
  function getExchange() {
    if ($routeParams.exchangeId) {
      eF.getExchange($routeParams.exchangeId, function(exchange) {
        self.exchange = exchange;
      });
    }
  }
  getExchange();
}])
