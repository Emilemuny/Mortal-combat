'use strict';
/* global _, Weapon, Fighter */

$(document).ready(init);

function init() {
  playTheme();
  createWeapons();
  paintWeapons();
  createFighters();
  paintFighters();
  chooseWeapon();
  $('#weapons').on('click', '.weapon', clickWeapon);
}

var weapons = [];
var fighters = [];
var equipped = [];

function clickWeapon() {
 var name = $(this).find('.name').text();
 var weapon = _.find(weapons, function(w) { return w.name === name; });
 console.log(name, weapon);
}

function chooseWeapon() {
  var fighter = _.sample(fighters);
  var $fighter = $('.fighter:contains("' + fighter.name + '")');
  $fighter.addClass('choose');
}

function playTheme() {
  $('audio').attr('src', '/audio/mktheme.mp3');
  $('audio')[0].play();
}

function createWeapons() {
  var w1 = new Weapon('pistol', 'http://imgs.steps.dragoart.com/how-to-draw-a-cartoon-gun-step-5_1_000000010993_5.jpg');
  var w2 = new Weapon('machineg', 'http://thecomicnews.com/images/edtoons/2013/0320/guns/02.jpg');
  var w3 = new Weapon('fake', 'http://www.dc4mf.org/sites/default/files/single-pages/images/cartoon.jpg');

  weapons.push(w1, w2, w3);
}

function createFighters() {
  var f1 = new Fighter('alien', 'http://www.mksecrets.net/images/mk9/chardrawing02.jpg');
  var f2 = new Fighter('predator', 'http://4.styleengine.com/wp-content/blogs.dir/7/files/2012/11/Mortal-Kombat-Sneakerheads-StyleEngine-Liu-Kang.jpg');
  var f3 = new Fighter('valkarie', 'https://cdn.baekdal.com/_img/2011/mortalkombat5.jpg');

  fighters.push(f1, f2, f3);
}

function paintWeapons() {
  weapons.forEach(function(weapon) {
    var $outer = $('<div>');
    $outer.addClass('weapon');

    var $img = $('<div>');
    $img.css('background-image', 'url("' + weapon.image + '")');

    var $info = $('<div>');
    var $name = $('<div>');
    $name.addClass('name');
    $name.text(weapon.name);

    var $damage = $('<div>');
    $damage.text('d: ' + weapon.damage);

    $outer.append($img, $info);
    $info.append($name, $damage);
    $('#weapons').append($outer);
  });
}

function paintFighters() {
  fighters.forEach(function(fighter) {
    var $outer = $('<div>');
    $outer.addClass('fighter');

    var $img = $('<div>');
    $img.css('background-image', 'url("' + fighter.image + '")');

    var $info = $('<div>');
    var $name = $('<div>');
    $name.text(fighter.name);

    var $armor = $('<div>');
    $armor.text('a: ' + fighter.armor);

    var $health = $('<div>');
    $health.text('h: ' + fighter.health);

    var $strength = $('<div>');
    $strength.text('s: ' + fighter.strength);

    $outer.append($img, $info);
    $info.append($name, $armor, $health, $strength);
    $('#fighters').append($outer);
  });
}
