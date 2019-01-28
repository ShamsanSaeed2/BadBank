<script>

function data() {
    var status  = document.getElementById('status');
    var url = '/data';

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body);
            }

        });
}

function showpassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function add() {
    var status  = document.getElementById('status');
    var name = document.getElementById('addname').value;
    var email = document.getElementById('addemail').value;
    var password = document.getElementById('addPassword').value;
    var url = '/posts/' + name + '/' + email + '/' + password;


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body);
            }

        });
}

//Functions for Global Navigation
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

</script>