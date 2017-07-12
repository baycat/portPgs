var wordsList = [];
var results = document.getElementById("results");

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;


function checkPassword() {
var textbox = document.getElementById("pw");
var password = textbox.value;
  if (wordsList.indexOf(password) === -1)  {
    results.innerHTML = "lol y not?";
    console.log("It would at least survive a dictionary attack.");
  }
  else {
    results.innerHTML = "is bad";
    console.log("I wouldn't use that as a password if I were you. Try again.");
  }
}
