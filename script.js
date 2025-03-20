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

    //if theres no row make one
    if(numRows === 0){
        let new_row = grid.insertRow();
        numRows++;
    }

    //loop through the rows and add a coloumn at the end
    for(let i = 0; i < numRows; i++){ 
        let new_col = grid.rows[i].insertCell();
        new_col.onclick = function() {
            this.style.backgroundColor = colorSelected
        }
        numCols++;
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

    //if theres no rows theres nothing to delete
    if(numRows === 0){
        return;
    }

    //loop through the rows and delete a coloumn
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
   
    //loops through grid and if cell is empty fills it with whatever color is selected
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols + 1; j++){
            grid.rows[i].cells[j].style.backgroundColor === "" || grid.rows[i].cells[j].style.backgroundColor === "transparent" ? grid.rows[i].cells[j].style.backgroundColor = colorSelected:null;

        }
    }
}

// Fill all cells
function fillAll(){
    
    //loops through and fills all cells with whatever color is selected
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols; j++){
            grid.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }

}

// Clear all cells
function clearAll(){
    
    //loops through the grid and sets the color to ""
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols + 1; j++){
            grid.rows[i].cells[j].style.backgroundColor = "";
        }
    }

}