<font color='red'>Welcome to user register and login home page.<br/>Click above link to take action.</font>";

    // Generate home page with page template and special title, menu and content.
    var page_data = http_util.buildPage(page_title, page_menu, page_content);

    resp.writeHead(200, {'Content-Type':'text/html'});

    resp.end(page_data);
}