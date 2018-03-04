window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1S5rdcFbxvQcAdY4xJ4a6GD5eEgG-7Jtg6oa6cjl6ths/edit?usp=sharing';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + data[i].DATE + "</td>");
      tr.append("<td>" + data[i].LOCATION + "</td>");
      tr.append("<td>" + data[i].VENUE + "</td>");
      tr.append("<td>" + data[i].NOTES + "</td>");
      tr.append("<td>" + data[i].TICKETS/VENUE + "</td>");
      $('table').append(tr);
    }
    console.log(data);
  }
