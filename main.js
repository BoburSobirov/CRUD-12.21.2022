var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    const formData = readFromdata();
    if(selectedRow === null){
        insertNewRecord(formData)
    }
    else{
        updateRecord(formData)
    }
    resetForm();
}

//Retrieve the data

function readFromdata(){
    const formData = {}
    formData["ProductCode"] = document.getElementById("ProductCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["data"] = document.getElementById("data").value;
    formData["Price"] = document.getElementById("Price").value;

    return formData;
}


//Insert the data

function insertNewRecord(data) {
    const table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);
    const cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.ProductCode;
    const cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    const cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.data;
    const cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Price;
    const cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('ProductCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('data').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Price').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ProductCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.data;
    selectedRow.cells[3].innerHTML = formData.Price;
}

//Delete the data

function onDelete(td){
    if(confirm('Do you want to delete this data ?')){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data

function resetForm() {
    document.getElementById('ProductCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('data').value = '';
    document.getElementById('Price').value = '';
}