let username = document.forms["RegForm"]["Name"];
let email = document.forms["RegForm"]["Email"];
let pass = document.forms["RegForm"]["pass"];
let phone = document.forms["RegForm"]["phone"];
let ddlanguages = document.forms["RegForm"]["ddlanguages"];

nameRegex = /^[A-Za-z]+$/ // should contain only letters from A-Z and a-z then $ shows end of regex
emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //regex for email
numberRegex = /^[0-9]*$/ // regex for telephone
passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@#$!%*?&^()]{8,}$/
alphanumeri = /^[A-Za-z0-9]+/ //expression that takes on letters and numbesrs only but not special character 


function validationForm() {
  //nameRegex = /^[A-Za-z]+$/ validate alphabets only
  if (username.value == "" || !nameRegex.test(username.value)) {
    //alert("Please enter your name with alphabets only");
    username.style.border = "5px solid red";
    //username.innerHTML = "Please enter your name";
    username.focus();
    return false;
  }
  else {
    username.style.border = "5px solid green";
    username.focus();
  }

  //validate email
  //    if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
  if (email.value == "" || !emailRegex.test(email.value)) {
    //alert("Please enter a valid email address")
    email.style.border = "5px solid red";
    email.focus();
    return false;
  }

  if (pass.value == "" || !passRegex.test(pass.value)) {
    // alert("Please enter your password");
    pass.style.border = "5px solid red";
    pass.focus();
    return false;
  }
  else {
    pass.style.border = "5px solid green";
  }


  if (phone.value == "" || phone.value.length != 10 || !numberRegex.test(phone.value)) {
    //alert("Please enter a valid phone number");
    phone.style.border = "5px solid red";
    phone.focus();
    return false;
  }
  else {
    phone.style.border = "5px solid green";
    email.focus();
  }

  if (ddlanguages.selectedIndex < 1) {
    //alert("Please select your course.");
    ddlanguages.style.border = "5px solid red";
    select.focus();
    return false;
  }
  else {
    ddlanguages.style.border = "5px solid green";
  }
}