import customer_log from './html_parts/customer_log.html';
import input_form from './html_parts/input_form.html';
import login_form from './html_parts/login_form.html';
import reports_form from './html_parts/reports.html';
import signup_form from './html_parts/signup.html';
var cusArray=[];

$("#container").append(customer_log,input_form,login_form,reports_form,signup_form);

$(".content-wrapper").addClass("d-none");
$("#input_form").removeClass("d-none");




// import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
// import '../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js';
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
import './js/menu';

import './scss/style.scss';
import { getJSON } from 'jquery';

var Customer=function(date,name,id,phone,address,temper,timeIn,timeOut){
/*     this.date=date;
    this.name=name;
    this.id=id;
    this.phone=phone;
    this.address=address;
    this.temper=temper;
    this.timeIn=timeIn;
    this.timeOut=timeOut; */
    cusArray.push(arguments);


}

/* var Fun=function(id,name,age){
    cusArray.push(arguments);
    
    for (var i=0;i<Fun.length;i++){
        
    }
} */

/* Fun('c002','dilshan',23);
console.log(cusArray[0][2]); */

/* $(document).click(function( event ) {
  
    console.log($(this).text());
 });
 */

//console.log($('.main-footer').height());
//console.log($('.main-footer').width());
for(var i=0;i<20;i++){
Customer('12/02/20','Sajeewa','C001','0713274293','Kegalle',35.5,'08.30','09.30');
}

for(var j=0;j<cusArray.length;j++){
  var tRow=$('<tr></tr>');
console.log(Customer.length);
for(var i=0;i<Customer.length;i++){
    var tData=$('<td></td>');
    tData.text(cusArray[j][i]);
    tRow.append(tData);
} 
$('#customer-table').append(tRow);  
}
console.log($(window).innerHeight>$(document).height());
console.log(cusArray[0].id);





