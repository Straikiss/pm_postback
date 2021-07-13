function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "https://postmarket.pro/cpa/48686", true);
  xhttp.setRequestHeader("Permissions-Policy", "interest-cohort=()");
  xhttp.send();
}
