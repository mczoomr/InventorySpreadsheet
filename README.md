# InventorySpreadsheet
Keep track of inventory on google sheets with just the click of a button.

## Features

- Add new items to the inventory
- Select existing items from a dropdown menu
- Automatically populates the dropdown menu with existing items
- Clear input fields after adding an item
- Toggle option to clear input fields automatically
- Error handling for empty input fields

## Usage

1. **Add New Item**: Fill out the item name, quantity, and notes fields. Optionally, toggle the clear input fields option. Click the "Add Item" button to add the item to the inventory.
2. **Select Existing Item**: Choose an existing item from the dropdown menu to populate the item name field.
3. **Clear Input Fields**: Enable the toggle switch to clear input fields automatically after adding an item.

## Technologies Used

- HTML
- CSS
- JavaScript
- Google Apps Script

## Setup
To set up the Inventory Management System, follow these steps:
  
### Step 1: Create a Google Sheets Document
1. Go to Google Sheets and create a new spreadsheet.
1. Set up the spreadsheet with "Item Name" will be in Collumn A to B, "Quantity" in Collumn C and "Notes" in Collumn D.

### Step 2: Set Up a Button
1. Insert a Drawing into Google Sheets ("Insert" -> "Drawing").
2. Click on the inserted Drawing and navigate to the "Assign script" option ("Three dots" -> "Assign script").
3. Paste the following and press Ok:  `openSidebar`.

### Step 3: Create a Google Apps Script Project
1. Go to Google Apps Script and create a new project.
1. Replace the default code in the Code.gs file with the provided server-side functions.
1. Save the project.

### Step 4: Deploy Web App
1. In the Google Apps Script project, select "Publish" -> "Deploy as web app..."
1. Choose a version and select "Deploy."

## Contributing

Contributions are welcome! Please open an issue or pull request for any changes or improvements you'd like to make.

## License

This project is licensed under the [MIT License](LICENSE).
