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
// Store.prototype.render = function() {
//   this.cookiesPerDay();
//
//   var ul = document.createElement('ul');
//   var li = document.createElement('li');
//   var h2 = document.createElement('h2');
//   var main = document.getElementById('store_info');
//
//   h2.textContent = this.location;
//   li.textContent = 'Total ' + this.totalCookie + ' cookies';
//
//   ul.appendChild(h2);
//   for(var i = 0; i < 7; i++) {
//     var li2 = document.createElement('li');
//     li2.textContent = (i + 6) + 'am' + ' ' + this.hourly[i] + ' cookies';
//     ul.appendChild(li2);
//   }
//   for(var j = 7; j < 14; j++) {
//     var li3 = document.createElement('li');
//     li3.textContent = (j - 6) + 'pm' + ' ' + this.hourly[j] + ' cookies';
//     ul.appendChild(li3);
//   }
//   ul.appendChild(li);
//
//   main.appendChild(ul);
// };
// var pike = new Store('1st and Pike', 23, 65, 6.3);
//
// pike.render();

Store.prototype.render = function() {
  this.cookiesPerDay();
// To create the table header
  var salesTable = document.createElement = ('table');
  var salesHead = document.createElement = ('thead');
  var tableHRow = document.createElement = ('tr');
  var tableHeader = document.createElement = ('th');
    //setting content for the header
  var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
  for (var i = 0; i = time.length; i++) {
    tableHeader.textContent = time[i];
    tableHRow.appendChild(tableHeader);
  }
  salesHead.appendChild(tableHRow);
  salesTable.appendChild(salesHead);
  // To create the body
  var tableBody = document.createElement = ('tbody');
  var tableRow = document.createElement = ('tr');
  var tblHeader = document.createElement = ('th');
  var tableData = document.createElement = ('td');

  // setting content for the body
  tblHeader.textContent = this.location;
  for (var j = 0; j = hourly.length; j++) {
    tableData.textContent = this.hourly;
    tableRow.appendChild(tableData);
  }
  tableRow.appendChild(tblHeader);
  tableBody.appendChild(tableRow);
  salesTable.appendChild(tableBody);

  var main = document.getElementById('store_info');
  main.appendChild(salesTable);
};
var pike = new Store('1st and Pike', 23, 65, 6.3);

pike.render;
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
