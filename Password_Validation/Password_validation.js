function validate() {
  var a = document.getElementById("password").value;
  //   empty / none input
  if (a == "" || a == null) {
    document.getElementById("msg").innerHTML = "Please Enter Password";
    return false;
  }
  //   min length
  if (a.length < 8) {
    document.getElementById("msg").innerHTML =
      "Password Length Must Be 8 Characters";
    return false;
  }
  //   max length
  if (a.length > 20) {
    document.getElementById("msg").innerHTML = "Maximum Length Is 20 Character";
    return false;
  }
  //   match password
  var b = document.getElementById("password1").value;
  if (a != b) {
    document.getElementById("msg1").innerHTML = "Password Not Match";
    return false;
  } else {
    document.getElementById("msg2").innerHTML = "Validate Successfully!";
    alert("Validate Successfully!");
    return false;
  }
}
