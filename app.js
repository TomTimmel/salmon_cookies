'use strict';

function Store(location, minCust, maxCust, avgCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = minCust;
  this.avgCookies = avgCookies;
  this.totalCookie = 0;
  this.hourly = [];
};

Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Store.prototype.cookiesPerHour = function(){
  return Math.round(this.generateRandom() * this.avgCookies);
};

Store.prototype.cookiesPerDay = function(){
  this.hourly = [];
  for(var i = 0; i < 14; i++){
    this.hourly.push(this.cookiesPerHour());
    this.totalCookie += this.cookiesPerHour();
  };
};
Store.prototype.render = function() {
  this.cookiesPerDay();

  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var h2 = document.createElement('h2');
  var main = document.getElementById('store_info');

  h2.textContent = this.location;
  li.textContent = 'Total ' + this.totalCookie + ' cookies';

  ul.appendChild(h2);
  for(var i = 0; i < 7; i++) {
    var li2 = document.createElement('li');
    li2.textContent = (i + 6) + 'am' + ' ' + this.hourly[i] + ' cookies';
    ul.appendChild(li2);
  }
  for(var j = 7; j < 14; j++) {
    var li3 = document.createElement('li');
    li3.textContent = (j - 6) + 'pm' + ' ' + this.hourly[j] + ' cookies';
    ul.appendChild(li3);
  }
  ul.appendChild(li);

  main.appendChild(ul);
};
var pike = new Store('1st and Pike', 23, 65, 6.3);

pike.render();


// var pike = {
//   location: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   totalCookie: 0,
//   hourly: [],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.generateRandom() * this.avgCookies);
//   },
//   cookiesPerDay: function() {
//     this.hourly = [];
//     for(var i = 0; i < 14; i++){
//       this.hourly.push(this.cookiesPerHour());
//       this.totalCookie += this.cookiesPerHour();
//     }
//   },
//   render: function() {
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//     var h2 = document.createElement('h2');
//     var main = document.getElementById('store_info');
//
//     h2.textContent = this.location;
//     li.textContent = 'Total ' + this.totalCookie + ' cookies';
//
//     ul.appendChild(h2);
//     for(var i = 0; i < 7; i++) {
//       var li2 = document.createElement('li');
//       li2.textContent = (i + 6) + 'am' + ' ' + this.hourly[i] + ' cookies';
//       ul.appendChild(li2);
//     }
//     for(var j = 7; j < 14; j++) {
//       var li3 = document.createElement('li');
//       li3.textContent = (j - 6) + 'pm' + ' ' + this.hourly[j] + ' cookies';
//       ul.appendChild(li3);
//     }
//     ul.appendChild(li);
//
//     main.appendChild(ul);
//   }
// };
//
// pike.cookiesPerDay();
// pike.render();
//
//
// var SeaTac = {
//   location: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   totalCookie: 0,
//   hourly: [],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.generateRandom() * this.avgCookies);
//   },
//   cookiesPerDay: function() {
//     this.hourly = [];
//     for(var i = 0; i < 14; i++){
//       this.hourly.push(this.cookiesPerHour());
//       this.totalCookie += this.cookiesPerHour();
//     }
//   },
//   render: function() {
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//     var h2 = document.createElement('h2');
//     var main = document.getElementById('store_info');
//
//     h2.textContent = this.location;
//     li.textContent = 'Total ' + this.totalCookie + ' cookies';
//
//     ul.appendChild(h2);
//     for(var i = 0; i < 7; i++) {
//       var li2 = document.createElement('li');
//       li2.textContent = (i + 6) + 'am' + ' ' + this.hourly[i] + ' cookies';
//       ul.appendChild(li2);
//     }
//     for(var j = 7; j < 14; j++) {
//       var li3 = document.createElement('li');
//       li3.textContent = (j - 6) + 'pm' + ' ' + this.hourly[j] + ' cookies';
//       ul.appendChild(li3);
//     }
//     ul.appendChild(li);
//
//     main.appendChild(ul);
//   }
// };
//
// SeaTac.cookiesPerDay();
// SeaTac.render();
//
// var SeaCen = {
//   location: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   totalCookie: 0,
//   hourly: [],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.generateRandom() * this.avgCookies);
//   },
//   cookiesPerDay: function() {
//     this.hourly = [];
//     for(var i = 0; i < 14; i++){
//       this.hourly.push(this.cookiesPerHour());
//       this.totalCookie += this.cookiesPerHour();
//     }
//   },
//   render: function() {
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//     var h2 = document.createElement('h2');
//     var main = document.getElementById('store_info');
//
//     h2.textContent = this.location;
//     li.textContent = 'Total ' + this.totalCookie + ' cookies';
//
//     ul.appendChild(h2);
//     for(var i = 0; i < 7; i++) {
//       var li2 = document.createElement('li');
//       li2.textContent = (i + 6) + 'am' + ' ' + this.hourly[i] + ' cookies';
//       ul.appendChild(li2);
//     }
//     for(var j = 7; j < 14; j++) {
//       var li3 = document.createElement('li');
//       li3.textContent = (j - 6) + 'pm' + ' ' + this.hourly[j] + ' cookies';
//       ul.appendChild(li3);
//     }
//     ul.appendChild(li);
//
//     main.appendChild(ul);
//   }
// };
//
// SeaCen.cookiesPerDay();
// SeaCen.render();
//
// var CapHill = {
//   location: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   totalCookie: 0,
//   hourly: [],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.generateRandom() * this.avgCookies);
//   },
//   cookiesPerDay: function() {
//     this.hourly = [];
//     for(var i = 0; i < 14; i++){
//       this.hourly.push(this.cookiesPerHour());
//       this.totalCookie += this.cookiesPerHour();
//     }
//   },
//   render: function() {
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//     var h2 = document.createElement('h2');
//     var main = document.getElementById('store_info');
//
//     h2.textContent = this.location;
//     li.textContent = 'Total ' + this.totalCookie + ' cookies';
//
//     ul.appendChild(h2);
//     for(var i = 0; i < 7; i++) {
//       var li2 = document.createElement('li');
//       li2.textContent = (i + 6) + 'am' + ' ' + this.hourly[i] + ' cookies';
//       ul.appendChild(li2);
//     }
//     for(var j = 7; j < 14; j++) {
//       var li3 = document.createElement('li');
//       li3.textContent = (j - 6) + 'pm' + ' ' + this.hourly[j] + ' cookies';
//       ul.appendChild(li3);
//     }
//     ul.appendChild(li);
//
//     main.appendChild(ul);
//   }
// };
//
// CapHill.cookiesPerDay();
// CapHill.render();
//
// var Alki = {
//   location: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   totalCookie: 0,
//   hourly: [],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.generateRandom() * this.avgCookies);
//   },
//   cookiesPerDay: function() {
//     this.hourly = [];
//     for(var i = 0; i < 14; i++){
//       this.hourly.push(this.cookiesPerHour());
//       this.totalCookie += this.cookiesPerHour();
//     }
//   },
//   render: function() {
//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//     var h2 = document.createElement('h2');
//     var main = document.getElementById('store_info');
//
//     h2.textContent = this.location;
//     li.textContent = 'Total ' + this.totalCookie + ' cookies';
//
//     ul.appendChild(h2);
//     for(var i = 0; i < 7; i++) {
//       var li2 = document.createElement('li');
//       li2.textContent = (i + 6) + 'am' + ' ' + this.hourly[i] + ' cookies';
//       ul.appendChild(li2);
//     }
//     for(var j = 7; j < 14; j++) {
//       var li3 = document.createElement('li');
//       li3.textContent = (j - 6) + 'pm' + ' ' + this.hourly[j] + ' cookies';
//       ul.appendChild(li3);
//     }
//     ul.appendChild(li);
//
//     main.appendChild(ul);
//   }
// };
//
// Alki.cookiesPerDay();
// Alki.render();
