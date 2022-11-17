function Convert() {
  let a = document.getElementById("number").value;
  let b = document.getElementById("msg");
  if (a == null || a == "") {
    document.getElementById("msg").innerHTML = "Please Enter A Number";
    document.getElementById("msg").style.color = "red";
  } else if (a <= 0) {
    document.getElementById("msg").innerHTML = "Enter Positive Number";
    document.getElementById("msg").style.color = "red";
  } else {
    let c = a * 0.3048;
    document.getElementById("msg").innerHTML = c;
    document.getElementById("msg").style.color = "black";
  }
}
