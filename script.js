//global variables
let grid = document.getElementById("grid")
let numRows = grid ? grid.rows.length : 0;
let numCols = numRows > 0 ? grid.rows[0].length : 0;    
let colorSelected = ""; 

// Add a row
function addR() {

    let numRows = grid ? grid.rows.length : 0;
    let numCols = numRows > 0 ? grid.rows[0].cells.length : 0;
    
    
    // Ensure the new row has the same number of columns as existing rows
    let new_row = grid.insertRow(); 

    if (numCols === 0){

        let new_col = new_row.insertCell();
        new_col.onclick = function() {

            this.style.backgroundColor = colorSelected;
        }

    }
    else{

        for (let i = 0; i < numCols; i++) {
            let newCell = new_row.insertCell();
            newCell.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
        }

    }

    numRows++; // Increment row count
}

// Add a column
function addC() {

    let numRows = grid ? grid.rows.length : 0;    

    //loop through the rows and add a coloumn at the end
    for(let i = 0; i < numRows; i++){ 
        let new_col = grid.rows[i].insertCell();
        new_col.onclick = function() {
            this.style.backgroundColor = colorSelected
        };
        
    }  

    //if theres no row make one
    if(numRows === 0){
        
        let new_row = grid.insertRow();
        let new_cell = new_row.insertCell();
        new_cell.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };
    }
}

// Remove a row
function removeR() {

    let numRows = grid ? grid.rows.length : 0;    

    // if there are rows to remove, remove the last one
    if(numRows > 0)
    {
        grid.deleteRow(-1);
    }
}

// Remove a column
function removeC() {

    let numRows = grid ? grid.rows.length : 0;
    

    //if theres no rows theres nothing to delete
    if(numRows === 0){
        return;
    }

    //loop through the rows and delete a coloumn
    for(let i = 0; i < numRows; i++){ 

      grid.rows[i].deleteCell(-1);

    }

}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("color").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){

    let numRows = grid ? grid.rows.length : 0;
    let numCols = numRows > 0 ? grid.rows[0].cells.length : 0;
    
   
    //loops through grid and if cell is empty fills it with whatever color is selected
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols; j++){
            let cell = grid.rows[i].cells[j]; // Get the cell

            if (!cell.style.backgroundColor || cell.style.backgroundColor === "transparent" || cell.style.backgroundColor === "") {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){

    let numRows = grid ? grid.rows.length : 0;
    let numCols = numRows > 0 ? grid.rows[0].cells.length : 0;
    
    
    //loops through and fills all cells with whatever color is selected
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols; j++){
            grid.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }

}

// Clear all cells
function clearAll(){

    let numRows = grid ? grid.rows.length : 0;
    let numCols = numRows > 0 ? grid.rows[0].cells.length : 0;
    
    
    //loops through the grid and sets the color to ""
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols; j++){
            grid.rows[i].cells[j].style.backgroundColor = "";
        }
    }

}