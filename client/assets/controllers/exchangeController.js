app.controller('exchangeController', ['$scope', 'exchangeFactory', function($scope, eF) {
  var self = this;
  this.settings = [
    {id: 'setting1'}
  ]
  this.addSetting = function() {
    var newSettingNum = this.settings.length + 1;
    this.settings.push({'id':'setting' + newSettingNum})
  }
  this.create = function() {
    this.newExchange.settings = this.settings;
  }
}])
