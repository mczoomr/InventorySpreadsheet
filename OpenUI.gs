// Opening the side bar
function openSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('UI')
    .setTitle('Inventory Management')
    .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}
