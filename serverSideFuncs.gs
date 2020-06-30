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
