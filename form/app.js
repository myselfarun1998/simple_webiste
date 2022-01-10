let form = document.getElementById("myform");
form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm").value;
  let national = document.getElementById("national").value;
  let account = document.getElementById("account").value;
  let address = document.getElementById("address").value;
  let aadharcard = document.getElementById("aadharcard").value;
  let security = document.getElementById("security").value;
  let dob1 = document.getElementById("dob").value;
  // let aadhar = document.getElementById("aadhar").value;
  // let pan = document.getElementById("pan").value;
  // let state1 = document.getElementById("state").value;
  // let pjncode = document.getElementById("pincode").value;
  // let salary = document.getElementById("salary").value;
  // let cards = document.getElementById("cards").value;
  // let gender =document.getElementById("dot-1").value;

  let error_message = document.getElementById("error_message");

  if (name.length < 5)
    return (error_message.innerHTML = "Please Enter valid Name");

  // if (username.length < 10)
  //   return (error_message.innerHTML = "Please Enter valid UserName");

  if (email.indexOf("@") == -1 || email.length < 6)
    return (error_message.innerHTML = "Please Enter valid Email");

  if (isNaN(phone) || phone.length != 10)
    return (error_message.innerHTML = "Please Enter valid Phone Number");

  if (password == "")
    return (error_message.innerHTML = "Please Enter valid password");
  if (confirmPassword == "") {
    return (error_message.innerHTML = "Please Enter  Confirm PassWord");
  } else if (password !== confirmPassword) {
    return (error_message.innerHTML = " your password does not match");
  } else {
    alert("Your Password SuccessFully Matched");
  }

  if (national.length <= 3)
    return (error_message.innerHTML = "Please Enter Your Country");
  if (account.length <= 12)
    return (error_message.innerHTML =
      "Please Enter the Name As Per The Aadhar card");
  if (address.length <= 10)
    return (error_message.innerHTML = "Please Enter More Than 140 Characters");
  if (aadharcard.length <= 11)
    return (error_message.innerHTML = "Please Enter the valid Aadhar Number");
  if (security.length <= 11)
    return (error_message.innerHTML = "Please Enter the Secuity Question");
  if ((dob1.length = ""))
    return (error_message.innerHTML = "Please  Select Your DOB");

  alert("Form Submitted Successfully!");
}


function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}