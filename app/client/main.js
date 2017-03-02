import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

PlayersList = new Mongo.Collection('players');

console.log("Hello client");

Template.leaderboard.helpers({
  'player': function(){
    return PlayersList.find();
  },
  'otherHelperFunction': function(){
    return "Some other function";
  }
});

Template.leaderboard.events({
  'click .player': function(){
    console.log("You clicked a .player element");
  }
});