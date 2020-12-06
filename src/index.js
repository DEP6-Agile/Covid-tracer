import customer_log from './html_parts/customer_log.html';
import input_form from './html_parts/input_form.html';
import login_form from './html_parts/login_form.html';
import reports_form from './html_parts/reports.html';
import signup_form from './html_parts/signup.html';
var cusArray=[];
var rowsPerPage=0;
var numPages;
var remainRows;


$("#container").append(customer_log,input_form,login_form,reports_form,signup_form);

$(".content-wrapper").addClass("d-none");
$("#input_form").removeClass("d-none");




// import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
// import '../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js';
// <!-- Bootstrap 4 -->
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
import '../node_modules/datatables.net/js/jquery.dataTables.min.js';
import './js/menu';
// import './js/input_form';

import './scss/style.scss';











/* ========================== js for customer_log.html ============ */
import { getJSON } from 'jquery';

var Customer=function(date,name,id,phone,address,temper,timeIn,timeOut){

    cusArray.push(arguments);


}


for(var i=0;i<39;i++){
Customer('12/02/20','Sajeewa','C00'+i,'0713274293','Kegalle',35.5,'08.30','09.30');
}

var heightCheck=function(){

    
      var rowCounter=0;
      var keepLoop=true;
      
while(keepLoop){


    var tRow=$('<tr></tr>');
        var tData=$('<td></td>');
        tData.text("testing");
        tRow.append(tData);
    
      $('#customer-table').append(tRow); 
      rowCounter=rowCounter+1;
 
      if($(window).innerHeight()<$(document).height()){
        rowsPerPage=rowCounter-1;
        keepLoop=false;
      
  }
   
}
}

$("#customer-log-link").click(function () {
  rowsPerPage=0;
  $('#customer-table tr').remove();
    heightCheck();
    $('#customer-table tr').remove();
      
        addRows(0,rowsPerPage);
        pagination();
        
});


console.log(Customer.length);
var addRows=function(start,end){
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


var pagination=function(){
         numPages=parseInt((cusArray.length)/rowsPerPage);
        remainRows=parseInt((cusArray.length)%rowsPerPage);
        console.log(numPages,remainRows);

        for(var i=2;i<numPages+1;i++){
         
           insPageLink(i);
          
        }
        if(remainRows>0){
          insPageLink(numPages+1);

        }
}

var insPageLink=function(i){
    var pageItem=$('<li></li>');
    pageItem.attr('class',"page-item");
     var pageLink=$('<a></a>');
     pageLink.attr('class',"page-link");
     pageLink.attr('href',"#");
     pageLink.text(i);
     pageItem.append(pageLink);
     $('#btn-forward').before(pageItem);

}





console.log($('#customer-table').innerHeight());



$(document).on('click', function(event){
  
    
    var clickedPage=event.target.textContent;

     if((event.target.id=='fas fa-backward')||(event.target.id=='backward')){
        $('#customer-table tr').remove();
        addRows(0,rowsPerPage);
         return;
     }

     if((event.target.id=='fas fa-forkward')||(event.target.id=='forward')){
        $('#customer-table tr').remove();
        addRows(numPages*rowsPerPage,(numPages*rowsPerPage)+remainRows-1);
         return;
     }
    
     
      if((event.target.className=='page-link')) 
     {
       
    
        var startP=((parseInt(clickedPage)-1)*rowsPerPage);
     
        if(clickedPage==numPages+1){
            $('#customer-table tr').remove();
            addRows(startP,startP+remainRows-1);
        }else if(clickedPage<numPages+1){
            $('#customer-table tr').remove();
            
        addRows(startP,startP+rowsPerPage);
     
        }else{
            
        }

     }
   
 });

 /* ========================== js for customer_log.html ============ */

 