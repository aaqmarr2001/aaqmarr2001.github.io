const pass_strength = document.querySelector("#passwd");

$(pass_strength).bind('click input', function(e){
  st = document.getElementById('passwd').value;
  var message2 = "";
  if(st.length > 20){
    message2 += "exceeds 20 chars!";
    document.getElementById("buton").disabled = true;}
  else{
    message2 = "";
    document.getElementById("buton").disabled = false;}
  document.getElementById("outp").textContent = message2;
});