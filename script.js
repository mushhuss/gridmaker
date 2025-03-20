//global variables
let grid = document.getElementById("grid")
let numRows = grid ? grid.rows.length : 0;
let numCols = numRows > 0 ? grid.rows[0].length : 0;    
let colorSelected = ""; 

// Add a row
function addR() {

    let grid = document.getElementById("grid");
    numRows = grid.rows.length;
    numCols = numRows > 0 ? grid.rows[0].cells.length : 0
    let newRow = grid.insertRow();
    // if grid is empty just insert a cell
    // otherwise we will need to insert numCols cells in our new row
    if(numCols === 0)
    {
        let newCell = newRow.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        }
    }
    else
    {
        for(let i = 0; i < numCols; i++)
        {
            let newCell = newRow.insertCell();
            newCell.onclick = function() {
                this.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Add a column
function addC() {
    for(let i = 0; i < numRows; i++){ 
        let new_col = grid.rows[i].insertCell();
        new_col.onclick = function() {
            this.style.backgroundColor = colorSelected
        }
        numCols++;
    }  

    if(numRows === 0){
        let new_row = grid.insertRow();
        let new_col = new_row.insertCell();
        new_col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        }
        numRows++;
    }
}

// Remove a row
function removeR() {
    // if there are rows to remove, remove the last one
    if(numRows > 0)
    {
        grid.deleteRow(-1);
    }
}

// Remove a column
function removeC() {

    if(numRows === 0){
        return;
    }

    for(let i = 0; i < numRows; i++){ 

      grid.rows[i].deleteCell(numRows - i - 1);

    }  

}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("color").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols + 1; j++){
        
            grid.rows[i].cells[j].style.backgroundColor === "" ? grid.rows[i].cells[j].style.backgroundColor = colorSelected:null;

        }
    }
}

// Fill all cells
function fillAll(){
    
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols + 1; j++){
            grid.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }

}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.


}