function changeBG(){
  var selectedBGColor=document.getElementById("bgColorChoice").value;
  document.body.style.backgroundColor= selectedBGColor;
}

function confirmColor() {
    var txt;
    if (confirm("Select OK to keep this colour.") == true) {
        txt = "Colour confirmed.";
    } else {
        txt = "Colour cancelled.";
    }
    document.getElementById("confirm").innerHTML = txt;
}

function formReset() {
    document.getElementById("total_form").reset();
}