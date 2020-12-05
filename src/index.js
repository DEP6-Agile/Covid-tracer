import customer_log from './html_parts/customer_log.html';
import input_form from './html_parts/input_form.html';
import login_form from './html_parts/login_form.html';
import reports_form from './html_parts/reports.html';
import signup_form from './html_parts/signup.html';


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
import './js/input_form';

import './scss/style.scss';