angular.module('starter.services', [])

  .factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
    var ref = new Firebase("https://projectdamnndaniel.firebaseio.com/");
    return $firebaseAuth(ref);
  }])
