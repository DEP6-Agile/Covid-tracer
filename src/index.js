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
for(var i=0;i<39;i++){
Customer('12/02/20','Sajeewa','C00'+i,'0713274293','Kegalle',35.5,'08.30','09.30');
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
    
      var rowCounter=0;
      var keepLoop=true;
      
while(keepLoop){


    var tRow=$('<tr></tr>');
        var tData=$('<td></td>');
        tData.text("testing");
        tRow.append(tData);
    
      $('#customer-table').append(tRow); 
      rowCounter=rowCounter+1;
     /*  console.log('doc height',$(document).height());
      console.log('window height',$(window).innerHeight()); */
      if($(window).innerHeight()<$(document).height()){
        rowsPerPage=rowCounter-1;
        keepLoop=false;
      
  }
   // console.log(x,rowsPerPage);
}
}

//$("#customer-log-link").click
$("#customer-log-link").click(function () {
  rowsPerPage=0;
  $('#customer-table tr').remove();
    heightCheck();
    $('#customer-table tr').remove();
        /* console.log($(document).height());
        console.log($(window).innerHeight());
        console.log('rows ',rowsPerPage); */
        addRows(0,rowsPerPage);
        pagination();
        
});

//$('#customer-table tr').remove();


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
           // $('#pagination .pagination').append($('<li>2</li>'))
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
    // pageLink.click(navigatePage(event));
     pageLink.text(i);
     pageItem.append(pageLink);
     $('#btn-forward').before(pageItem);

}

//console.log(rowsPerPage);
//$('#customer-table').css('visibility', 'hidden');



console.log($('#customer-table').innerHeight());



$(document).on('click', function(event){
  
   // console.log(event);
    
    var clickedPage=event.target.textContent;
 /*    if((event.target.id==='btn-backward')){
        $('#customer-table tr').remove();
        console.log(event.target.id);
       
        console.log('rowsperpagre',rowsPerPage);
        console.log(event.target.parentElement.parentElement.id);
        addRows(0,rowsPerPage);

     } */
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
       
     //   console.log(event.target.className);
        
        
     //   console.log(event.target.parentElement.parentElement.id);
       
        var startP=((parseInt(clickedPage)-1)*rowsPerPage);
       // console.log('startP',startP,remainRows,clickedPage);
        if(clickedPage==numPages+1){
            $('#customer-table tr').remove();
            addRows(startP,startP+remainRows-1);
        }else if(clickedPage<numPages+1){
            $('#customer-table tr').remove();
            //console.log("clickedPage<numPages+1");
        addRows(startP,startP+rowsPerPage);
        //addRows(0,3);
        }else{
            
        }

     }
   
 });
