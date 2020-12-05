import customer_log from './html_parts/customer_log.html';
import input_form from './html_parts/input_form.html';
import login_form from './html_parts/login_form.html';
import reports_form from './html_parts/reports.html';
import signup_form from './html_parts/signup.html';
var cusArray=[];
var rowsPerPage=0;


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
for(var i=0;i<40;i++){
Customer('12/02/20','Sajeewa','C001','0713274293','Kegalle',35.5,'08.30','09.30');
}

var heightCheck=function(){
 /*    var keepLoop=0;
  
    while(keepLoop<10){
        var tRow=$('<tr></tr>');
        var tData=$('<td></td>');
        tData.text("testing");
        tRow.append(tData);
    
      $('#customer-table').append(tRow);  
      rowCounter=rowCounter+1;
      if($(window).innerHeight>$(document).height()){
            rowsPerPage=rowCounter-1;
            keepLoop=11;
      }else{

      }
      
      } */
      var x=0;
      var rowCounter=0;
      var keepLoop=true;
      
while(keepLoop){
    x=x+1;

    var tRow=$('<tr></tr>');
        var tData=$('<td></td>');
        tData.text("testing");
        tRow.append(tData);
    
      $('#customer-table').append(tRow); 
      rowCounter=rowCounter+1;
      console.log('doc height',$(document).height());
      console.log('window height',$(window).innerHeight());
      if($(window).innerHeight()<$(document).height()){
        rowsPerPage=rowCounter-1;
        keepLoop=false;
      
  }
    console.log(x,rowsPerPage);
}
}

//$("#customer-log-link").click
$("#customer-log-link").click(function () {
  rowsPerPage=0;
  $('#customer-table tr').remove();
    heightCheck();
    $('#customer-table tr').remove();
        console.log($(document).height());
        console.log($(window).innerHeight());
        console.log('rows ',rowsPerPage);
        pagination(0,rowsPerPage);
});

//$('#customer-table tr').remove();


console.log(Customer.length);
var pagination=function(start,end){
for(start;start<end+1;start++){
  var tRow=$('<tr></tr>');

for(var i=0;i<Customer.length;i++){
    var tData=$('<td></td>');
    tData.text(cusArray[start][i]);
    tRow.append(tData);
} 
$('#customer-table').append(tRow);
console.log('table height',tRow.height());
 
}

}


console.log(rowsPerPage);




//$('#customer-table').css('visibility', 'hidden');
console.log($('#customer-table').innerHeight());





