'use strict';
var stores = [];

function Store(location, minCust, maxCust, avgCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.totalCookie = 0;
  // this.hourly = [];
  stores.push(this);

};

Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Store.prototype.cookiesPerHour = function(){
  return Math.round(this.generateRandom() * this.avgCookies);
};

Store.prototype.cookiesPerDay = function(){
  this.hourly = [];
  var hourlyTotal;
  for(var i = 0; i < 14; i++){
    hourlyTotal = this.cookiesPerHour();
    this.hourly.push(hourlyTotal);
    // this.hourly.push(this.cookiesPerHour());
    this.totalCookie += hourlyTotal;
  };
};

var storeForm = document.getElementById('store_form');

storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var locat = event.target.locat.value;
  var minc = Number(event.target.minc.value);
  var maxc = Number(event.target.maxc.value);
  if(minc >= maxc){
    alert('The Minimum value must be lower than the maximum value for customers.');
    document.getElementById('store_form').reset();
  }
  else{
    var avgc = Number(event.target.avgc.value);
    console.log(event.target.locat.value);
    console.log(event.target.minc.value);
    console.log(event.target.maxc.value);
    console.log(event.target.avgc.value);
    var inputStore = new Store(locat, minc, maxc, avgc);

    // inputStore.render();

    var main = document.getElementById('store_info');
    main.textContent = '';
    createTable();
    document.getElementById('store_form').reset();
    console.log(inputStore);}
};

Store.prototype.render = function() {
  this.cookiesPerDay();

  var tableRow = document.createElement('tr');
  var tblHeader = document.createElement('th');
  var tableData1 = document.createElement('td');
// setting content for the body
  tblHeader.textContent = this.location;
  tableRow.appendChild(tblHeader);
  for (var j = 0; j < this.hourly.length; j++) {
    var tableData = document.createElement('td');
    tableData.textContent = this.hourly[j];
    tableRow.appendChild(tableData);
  }
  // salesTable.appendChild(tableBody);
  tableData1.textContent = this.totalCookie;
  tableRow.appendChild(tableData1);

  return tableRow;
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('Seatac Airport', 3, 24, 1.2);
var seaCen = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
var hourTotal;
function createTable () {

  var salesTable = document.createElement('table');

  var salesHead = document.createElement('thead');
  var tableHRow = document.createElement('tr');
  var tableBody = document.createElement('tbody');
  var totalData = document.createElement('td');
  var totalHead = document.createElement('th');
  var totalsRow = document.createElement('tr');
  //setting content for the header
  var time = ['','6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am','12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'];
  for (var i = 0; i < time.length; i++) {
    var tableHeader = document.createElement('th');
    tableHeader.textContent += time[i];
    tableHRow.appendChild(tableHeader);
  }
  salesHead.appendChild(tableHRow);
  salesTable.appendChild(salesHead);

  for(var p = 0; p < stores.length; p++){
    var row = stores[p].render();
    tableBody.appendChild(row);
  }
  // var hourTotal;
  totalHead.textContent = 'Totals';
  totalsRow.appendChild(totalHead);
  for(var hours = 0; hours < time.length - 2; hours++){
    var td = document.createElement('td');
    hourTotal = 0;
    console.log(time[hours]);
    for(var storeC = 0; storeC < stores.length; storeC++){
      hourTotal += stores[storeC].hourly[hours];
    }
    td.textContent = hourTotal;
    totalsRow.appendChild(td);
  }
  // totalHead.appendChild(totalData);
  // totalHead.appendChild(row);
  tableBody.appendChild(totalsRow);
  salesTable.appendChild(tableBody);

  var main = document.getElementById('store_info');
  main.appendChild(salesTable);
};
createTable();
