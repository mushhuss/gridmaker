// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    numRows = grid.rows.length;
    // if we already have rows, the number of columns will be the number of columns already there
    // otherwise our grid is just empty so make it 1x1
    if(numRows > 0)
    {
        numCols = grid.rows[0].cells.length;
    }
    else
    {
        numCols = 0;
    }

    let newRow = grid.insertRow();
    
    // if we only have one column we can just insert a cell in the new row
    // otherwise we will need to insert numCols cells in our new row
    if(numCols === 0)
    {
        newRow.insertCell();
    }
    else
    {
        for(let i = 0; i < numCols; i++)
        {
            newRow.insertCell();
        }
    }
    console.log(numRows, numCols)
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}