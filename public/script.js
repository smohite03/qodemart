function register_user()
{
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var gender = document.getElementById("gender").value;
  var role = document.getElementById("role").value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email == " ")
  {
    alert("Please enter email address");
  }else if(username == " ")
  {
    alert("Please enter username");
  }else if(password == " ")
  {
    alert("Please enter password")
  }else if(fname == " ")
  {
    alert("Please enter password")
  }
  if (validRegex.test(email)) { } else {
      alert("Invalid email address!");
      document.form1.email.focus();
  }


  const user = {
    email : email,
    username  : username,
    password     : password,
    fname  : fname,
    lname : lname,
    gender : gender,
    role : role
  };

  var saveData = $.ajax({
    type: "POST",
    url: "user",
    data: user,
    dataType: "text",
    success: function(resultData){
        alert("Save Complete");
        window.location.href = "/";
    }
  });
        
}

function login()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == " ")
    {
      alert("Please enter username");
    }
    if(password == " ")
    {
      alert("Please enter password");
    }
    // window.location.href = "to_list.html";
    const user = {
        username  : username,
        password  : password,
      };
    var saveData = $.ajax({
        type: "POST",
        url: "user/login",
        data: user,
        dataType: "text",
        success: function(resultData){
            if(resultData == "Login Successful")
            {
                window.location.href = "alluser";
            }else{
                alert("failure");
            }
        }
      });
}


function getalluser()
{
  fetch('user')
  .then((response) => response.json())
  .then((data) => show_data(data));
}
function show_data(data){
  var cont = 0;
  var arr = " ";
  console.log(data);
  for (const [key, value] of Object.entries(data)) {
    console.log(key, value);
    cont++;
    arr = arr + "<tr><td>"+cont+"</td><td>"+value.fname+"</td><td>"+value.lname+"</td><td>"+value.email+"</td><td>"+value.gender+"</td><td>"+value.role+"</td></tr>";
  }
  document.getElementById("usrdata").innerHTML = arr;
}

