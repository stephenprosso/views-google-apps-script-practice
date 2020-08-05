  
function loadMainForm() {
  
  const htmlServ = HtmlService.createTemplateFromFile("main");
  const html = htmlServ.evaluate();
  html.setWidth(850).setHeight(600);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Edit Customer Data");
}


function createMenu_(){

  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Custom - Manage Data");
  menu.addItem("Edit Customers", "loadMainForm");
  menu.addItem("Customer Sidebar", "showSidebar");
  menu.addToUi();

}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('main')
 
      html.setTitle('My custom sidebar').setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

function onOpen(){
  
  createMenu_();

}