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
  catParty.lib = 0;
  catParty.con = 0;
  $("form button").click(function(event) {
    event.preventDefault();
    var x1 = $("select#x").val();
    var y1 = $("select#y").val();
    var z1 = $("select#z").val();
    var bla1 = $("select#bla").val();

    if (x1 === "lib") {
      catParty.libCounter();
    } else {
      catParty.conCounter();
    }

    if (y1 === "lib") {
      catParty.libCounter();
    } else {
      catParty.conCounter();
    }

    if (z1 === "lib") {
      catParty.libCounter();
    } else {
      catParty.conCounter();
    }

    if (bla1 === "lib") {
      catParty.libCounter();
    } else {
      catParty.conCounter();
    }

    if (catParty.lib === catParty.con) {
      $("#germany-tab").show();
    } else if (catParty.con > catParty.lib) {
      $("#conserv-tab").show();
    } else if (catParty.con < catParty.lib) {
      $("#liberal-tab").show();
    }


  });














});
