const data = { username: 'example' };
var txt = "";
var table = document.getElementById("myTable");
//Build an array containing Customer records.
var candidatsArrays = new Array();
var tableCandidats= [];
var nbCandidats;

function getElement(id) {
  return document.getElementById(id);
}

fetch('https://cors-anywhere.herokuapp.com/https://soasga.com//api/v1/candidats/getall', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    //console.log('Success:', data);
    nbCandidats=data.data.length;
    getCandidats(data);
    GenerateTable();
})
.catch((error) => {
  //console.error('Error:', error);
});



function getCandidats(data) {
    var i;
    candidatsArrays.push(["id","user_id","candidatecode","ministere","corps","firstname","maidenname","lastname","sex","dateofbirth","telephone","address","profilepicture","email","profe  ssion","title","created_at"]);
    
    //console.log('Success:', nbCandidats);
    for (i = 0; i <nbCandidats; i++) {
         candidatsArrays.push([data.data[i].id,data.data[i].user_id,data.data[i].candidatecode,data.data[i].ministere,data.data[i].corps,data.data[i].firstname,data.data[i].maidenname,data.data[i].lastname,data.data[i].sex,data.data[i].dateofbirth,data.data[i].telephone,data.data[i].address,data.data[i].profilepicture,data.data[i].emai,data.data[i].profession,data.data[i].title,data.data[i].created_at]); 
        
        //console.log('Success:', candidatsArrays);
    }
}

function GenerateTable() {
    
        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns.
        var columnCount = candidatsArrays[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = candidatsArrays[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < candidatsArrays.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = candidatsArrays[i][j];
            }
        }
 
        var dvTable = document.getElementById("dvtable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }