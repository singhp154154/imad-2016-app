//counter code

var button = document.getElementById('counter');
button.onclick = function () {
    //careate a req object
    var request = new XMLHttpRequest();
};
// CAPTURE A RESPONSE STORE IT IN A VARIABLE 
request.onreadystatechange = function() {
  if (request.readystatsechange === XMLHttprequest.DONE) {
      //take some acction
      if(requeststatus === 200){
          var counter = request.responseText;
          var span = document.getElementById('count');
          sapn.innerHTML = counter.toString();
      }
  } 
  // else we dont want nothing to happen
};

//make a request
request.open('GET', 'http://singhp154154.imad.hasur-app.io/counter',true);
request.sernd(null);