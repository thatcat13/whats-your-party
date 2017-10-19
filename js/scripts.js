function party(lib, con) {
  this.lib = 0;
  this.con = 0; // this is a counter
}

party.prototype.libCounter = function() {
  this.lib += 1;
}

party.prototype.conCounter = function() {
  this.con += 1;
}


$(function() {
  var catParty = new party();
  $("form button").submit(function(event) {
    event.preventDefault();

  
  });














});
