/*===============================================================================
 * Global Variables
 *===============================================================================*/
var txtName;
var txtNic;
var txtAddress;
var txtPhoneNumber;
var txtTemp;
var timeIn;
var timeOut;
var tblCustomers;
var customers = [];
var selectedCustomer = null;
var xselectedRow = null;


/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init(){
    txtName =document.getElementById('txt-input-name');
    txtNic =document.getElementById('txt-input-nic');
    txtAddress =document.getElementById('txt-input-address');
    txtPhoneNumber =document.getElementById('txt-input-phone-number');
    txtTemp =document.getElementById('txt-input-temperature');
    
    txtName.focus();
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/
document.getElementById('btn-input-save').addEventListener('click',handleSave);


/*===============================================================================
 * Functions
 *===============================================================================*/


function handleSave(event){
    
    if (!selectedCustomer){
        customers.push({
           name: txtName.value,
           nic: txtNic.value,
           address: txtAddress.value,
           phoneNumber: txtPhoneNumber.value,
           temp: txtTemp.value,
           timeIn: timeIn.value,
           timeOut: timeOut.value,
        });

        var row = tblCustomers.tBodies.item(0).insertRow(-1);
        row.onclick = handleSelection;

        var nameCell = row.insertCell(0);
        nameCell.innerText = txtName.value;

        var nicCell = row.insertCell(1);
                nicCell.innerText = txtNic.value;
                
        var checkoutCell = row.insertCell(2);
        checkoutCell.innerText = '<button type="button" class="btn btn-primary" onclick="handleSubmit(event)">Checkout now</button>';

        /* var trashCell = row.insertCell(3);
        trashCell.innerHTML = '<div class="trash" onclick="handleDelete(event)"></div>';
  */
        showOrHideTFoot();

        txtName.value = '';
        txtNic.value = '';
        txtAddress.value = '';
        txtPhoneNumber.value = '';
        txtTemp.value = '';
        txtName.focus();

    }else{
        selectedCustomer.name = txtName.value;
        selectedCustomer.address = txtAddress.value;
        selectedRow.cells[1].innerText = txtName.value;
        selectedRow.cells[2].innerText = txtAddress.value;
    }

}

function clearSelection(){
    var rows = document.querySelectorAll("#tbl-customers tbody tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].classList.remove('selected');
    }
    txtId.disabled = false;
    selectedRow = null;
    selectedCustomer = null;
}

function handleSelection(event){
    clearSelection();
    selectedRow = event.target.parentElement;
    selectedRow.classList.add('selected');
    txtId.value = selectedRow.cells[0].innerText;
    txtId.disabled = true;
    txtName.value = selectedRow.cells[1].innerText;
    txtAddress.value = selectedRow.cells[2].innerText;
    selectedCustomer = customers.find(function(c){
        return c.id === selectedRow.cells[0].innerText;
    });
}

function handleDelete(event){
    if (confirm("Are you sure whether you want to delete this customer?")){
        tblCustomers.deleteRow(event.target.parentElement.parentElement.rowIndex);
        showOrHideTFoot();

        customers.splice(customers.findIndex(function(c){
           return c.id === event.target.parentElement.parentElement.cells[0].innerText;
        }),1);
        event.stopPropagation();
    }
}

function showOrHideTFoot(){
    if (tblCustomers.tBodies.item(0).rows.length > 0){
        document.querySelector("#tbl-customers tfoot").classList.add('d-none');
    }else{
        document.querySelector("#tbl-customers tfoot").classList.remove('d-none');
    }
}


function handleSubmit(){

}