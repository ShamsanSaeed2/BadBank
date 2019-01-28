<a href="/">Home</a>';
   ret += '&nbsp&nbsp';
   ret += '<a href="/register">Register</a>';
   ret += '&nbsp&nbsp';
   ret += '<a href="/login">Login</a>';
   
   return ret;
}


/* This function will use input parameter to replace place holder in the page template file. */
exports.buildPage = function(page_title, page_menu, page_content){
   
   var page_template = "<html>" +
         "<head>" +
         "<title>{page_title}</title>" +
         "</head>" +
         "<body>" +
         "<table>" +
         "<tr><td>{page_menu}</td></tr><tr>" +
         "<tr><td>{page_content}</td></tr>" +
         "</table>" +
         "</body></html>";
   
   var ret = page_template;
   ret = ret.replace("{page_title}", page_title, "g");
    ret = ret.replace("{page_title}", page_title, "g");
    ret = ret.replace("{page_menu}", page_menu, "g");
    ret = ret.replace("{page_content}", page_content, "g");

   return ret;
      
}