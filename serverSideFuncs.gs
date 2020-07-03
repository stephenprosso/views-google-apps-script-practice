function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("data");
  return ws.getRange(2,1, ws.getLastRow()-1,3).getValues();
  }

function deleteById(id) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("data");
  const custIds = ws.getRange(2,1, ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  //go to your other projects and see how you do the below with vanilla JS posIndex + 2
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);
}


function getCustomerById(id) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("data");
  const custIds = ws.getRange(2,1, ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  //go to your other projects and see how you do the below with vanilla JS posIndex + 2
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  const customerInfo = ws.getRange(rowNumber, 1,1,4).getValues()[0];
  
  return {custID: customerInfo[0], firstName: customerInfo[1], lastName: customerInfo[2], phone: customerInfo[3] };

}

function editCustomerById(id,customerInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("data");
  const custIds = ws.getRange(2,1, ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  //go to your other projects and see how you do the below with vanilla JS posIndex + 2
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  
  ws.getRange(rowNumber,2,1,3).setValues([[
    customerInfo.firstName,
    customerInfo.lastName,   
    customerInfo.phone

    ]]);
  return true;

}

function addCustomer(customerInfo){
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("data");
    
  //lines 54 - 59 are the first way i learned to add a new line with unique ID
    //var ids = ws.getRange(2, 1,ws.getLastRow()-1,1).getValues().map(function(r){return r[0]});
  //reworte the above line to use ES6 
   const ids =ws.getRange(2, 1,ws.getLastRow()-1,1).getValues().map( r => r[0]);
    //find the max id from this list
    var maxID = Math.max.apply(null,ids);
    var newId = maxID+1; 
 
  //lines 61 - 66 are a new way to add a row with unique id
  /*const uniqueIds = ws.getRange(2, 1,ws.getLastRow()-1,1).getValues();
  var maxNum=0;
  uniqueIds.forEach(r => {
       maxNum = r[0] > maxNum ? r[0] : maxNum
          });
  var newId = maxNum +1;*/
  
  ws.appendRow([newId,customerInfo.firstName,customerInfo.lastName,customerInfo.phone]);
}
  