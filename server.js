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

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElemrntById(submit_btn);
submit.onclick = function(){
//Make a request to a server and sendthe name

//capture a list of name and render it as a list

var name = ['name1', 'name2', 'name3', 'name4'];
var list = '';
for (var i=0; i< names,length; i++){
    list += '<li>' + name[i] + '</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};