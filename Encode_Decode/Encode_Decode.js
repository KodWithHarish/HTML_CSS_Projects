var e;
function encode() {
  var a = document.getElementById("text").value;
  //   empty / none input
  if (a == "" || a == null) {
    document.getElementById("msg1").innerHTML = "Please Enter Text To Decode";
    return false;
  }
  if (a != null || a != "") {
    document.getElementById("msg1").style.color = "green";
    e = window.btoa(a);
    document.getElementById("msg1").innerHTML = e;
  }
}
// var x = encode();
function decode() {
  var b = document.getElementById("text1").value;
  //   empty / none input
  if (b == "" || b == null) {
    document.getElementById("msg2").innerHTML = "Please Enter Code To Encode";
    return false;
  } else if (e == b) {
    document.getElementById("msg2").style.color = "green";
    let d;
    d = window.atob(b);
    document.getElementById("msg2").innerHTML = d;
  } else {
    document.getElementById("msg2").style.color = "red";
    document.getElementById("msg2").innerHTML = "Invalid";
  }
}
