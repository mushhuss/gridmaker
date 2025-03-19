// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {

    let numRows = numRows + 1;
    alert("Clicked Add Row"); // Replace this line with your code.

}

// Add a column
function addC() {
    let grid = document.getElementById("grid");
    let numRows = grid.rows.length;
    if (numRows > 0){
        numCols = grid.rows[0].cells.length;
    }
    else{
        numRows = 0;
    } 

    for(let i = 0; i < numRows; i++){ 
        let new_col = grid.rows[i].insertCell();
        new_col.onClick = function() {
            this.style.backgroundColor = colorSelected
        }
    }  

    if(numRows === 0){
        let new_row = grid.insertRow();
        let new_col = new_row.insertCell();
        new_col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        }
    }
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