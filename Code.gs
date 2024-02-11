// Get existing items for the dropdown
function getExistingItems() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Inventory");
  var existingItemsRange = sheet.getRange("A2:A999");
  var existingItems = existingItemsRange.getValues().flat().filter(String);
  return existingItems;
}

// Call from the UI to add item to inventory
function addItemToInventory(itemName, quantity, notes, clearInputToggle) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Inventory");

    // Check if the item already exists
    var existingItemsRange = sheet.getRange("A2:A999");
    var textFinder = existingItemsRange.createTextFinder(itemName);
    var existingItem = textFinder.findNext();

    if (existingItem) {
      // Item found, update quantity
      var itemRowIndex = existingItem.getRow();
      var existingQuantityCell = sheet.getRange(itemRowIndex, 3); // Assuming quantity is in column C
      var existingQuantity = existingQuantityCell.getValue();
      var newTotalQuantity = Number(existingQuantity) + Number(quantity);

      // Update quantity and notes on the "Inventory" sheet
      existingQuantityCell.setValue(newTotalQuantity);
      sheet.getRange(itemRowIndex, 4).setValue(notes); // Assuming notes are in column D
      Logger.log("Item updated successfully.");
    } else {
      // Item not found, add a new item
      var lastRow = existingItemsRange.getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow() + 1;

      // Merge cells in columns A and B for the item name
      sheet.getRange(lastRow, 1, 1, 2).merge();
      sheet.getRange(lastRow, 1).setValue(itemName);
      sheet.getRange(lastRow, 3).setValue(quantity); // Quantity in column C
      sheet.getRange(lastRow, 4).setValue(notes);    // Notes in column D

      Logger.log("New item added successfully to the 'Inventory' sheet.");
    }

    // Clear input fields if the toggle is enabled
    if (clearInputToggle) {
      clearInputFields();
    }
  } catch (error) {
    Logger.log("Error: " + error.message);
  }
}

// Clear input fields
function clearInputFields() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("itemName").clearContent();
  sheet.getRange("quantity").clearContent();
  sheet.getRange("notes").clearContent();
}