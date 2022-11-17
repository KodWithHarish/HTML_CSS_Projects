function Convert() {
  let age = document.getElementById("number").value;
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  let msg = document.getElementById("msg");
  let bmi;
  h = h / 100;
  if (
    age == null ||
    (age == "" && h == null) ||
    (h == "" && w == null) ||
    w == ""
  ) {
    document.getElementById("msg").innerHTML = "All Details Are Required!";
    document.getElementById("msg").style.color = "red";
  } else {
    bmi = w / (h * h);
    bmi = bmi.toFixed(1);
    document.getElementById("msg").style.color = "black";
    if (bmi < 16) {
      document.getElementById("msg").innerHTML = bmi;
      document.getElementById("msg2").style.backgroundColor = "red";
      document.getElementById("msg2").innerHTML = "Severe Thinness";
    } else if (bmi >= 16 && bmi < 18.5) {
      document.getElementById("msg").innerHTML = bmi;
      document.getElementById("msg2").style.backgroundColor = "yellow";
      document.getElementById("msg2").innerHTML = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi <= 25) {
      document.getElementById("msg").innerHTML = bmi;
      document.getElementById("msg2").style.backgroundColor = "green";
      document.getElementById("msg2").innerHTML = "Normal";
    } else if (bmi > 25 && bmi <= 30) {
      document.getElementById("msg").innerHTML = bmi;
      document.getElementById("msg2").style.backgroundColor = "yellow";
      document.getElementById("msg2").innerHTML = "Overweight";
    } else {
      document.getElementById("msg").innerHTML = bmi;
      document.getElementById("msg2").style.backgroundColor = "red";
      document.getElementById("msg2").innerHTML = "Obese Class";
    }
  }
}
