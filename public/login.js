<font color=red>User name and password is correct, login success.</font>";

                // Build login success page.
                var login_success_page = http_util.buildPage(page_title, page_menu, page_content);

                // Send login success page html source data to response.
                resp.end(login_success_page);
            }else
            {
               // If user name and password is not correct.
               req.user_name = user_name;
               req.password = password;

               // Return login form page back to response.
            buildLoginPage(req, resp, 'User name or password is not correct.')
            }
        });
    }
}


/* This is a private function which can only be invoked in this module.
*  This function is used to build login form page and return it to client.
* */
function buildLoginPage(req, resp, error_message) {

    http_util.getUrlParams(req, resp);

    var page_title = "Login Page";

    var page_menu = http_util.pageMenu();

    var login_form = "<h3>Input user name and password to login.</h3>";

    if(error_message!=='' && error_message!==null && error_message!==undefined)
   {
      login_form += "<font color=red>" + error_message + "</font><br/><br/>";
   }

   login_form += "<form method='post' action='/check-login'>" +
        "User Name : <input type='text' name='user_name' value='{user_name}'/><br/><br/>" +
        "Password :<input type='password' name='password' value='{password}'/><br/><br/>" +
        "<input type='submit' value='Login'/><br/><br/>" +
        "</form>";

    if(req.user_name==null || req.user_name==undefined)
    {
        req.user_name = '';
    }

    if(req.password==null || req.password==undefined)
    {
        req.password = '';
    }

    login_form = login_form.replace("{user_name}", req.user_name);

    login_form = login_form.replace("{password}", req.password);

    var login_page_data = http_util.buildPage(page_title, page_menu, login_form);

    resp.writeHead(200, {'Content-Type':'text/html'});

    resp.end(login_page_data);
}