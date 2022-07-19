let username = document.forms["RegForm"]["Name"];
let email = document.forms["RegForm"]["Email"];
let pwd = document.forms["RegForm"]["pwd"];
let phone = document.forms["RegForm"]["Telephone"];
nameRegex = /^[A-Za-z]+$/ // should contain only letters from A-Z and a-z then $ shows end of regex
emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//let nameerr = document.forms["RegForm"]["nameerr"];

function validationForm() {
  //var lowerCaseLetters = /[a-z]/g;
  if (username.value == "" || !nameRegex.test(username.value)) {
    alert("Please enter your name with alphabets only");
    username.style.border = "5px solid red";
    //username.innerHTML = "Please enter your name";
    username.focus();
    return false;
  }
  else {
    username.style.border = "5px solid green";
    username.focus();
  }

  if (email.value == "") {
    //alert("Please enter your email");
    email.style.border = "5px solid red";
    email.focus();
    return false;
  }
  else {
    email.style.border = "5px solid green";
    email.focus();
  }
  if (email.value == "" || !emailRegex.test(email.value)) {
    //alert("Please enter a valid email address")
    email.style.border = "5px solid red";
    email.focus();
    return false;
  }
  /*
    if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
      //alert("Please enter a valid email address")
      email.style.border = "5px solid red";
      email.focus();
      return false;
    }
    else {
      email.style.border = "5px solid green";
      email.focus();
    }
  */
  if (pwd.value == "") {
    //alert("Please enter your email");
    pwd.style.border = "5px solid red";
    pwd.focus();
    return false;
  }
  else {
    pwd.style.border = "5px solid green";
    pwd.focus();
  }

  if (phone.value == "" || phone.value.length != 10) {
    // alert("Please enter a valid phone number");
    phone.style.border = "5px solid red";
    phone.focus();
    return false;
  }
  else {
    phone.style.border = "5px solid green";
    email.focus();
  }

}