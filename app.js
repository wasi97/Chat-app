const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
const msgForm = document.getElementById("msgform"); //the input form
const msgInput = document.getElementById("msg-input"); //the input element to write messages
const msgBtn = document.getElementById("msg-btn"); //the Send button
console.log(msgBtn)
// to store data in the msgs folder by creating a reference in database
// const db = firebase().database();
// const msgRef = db.ref("/msgs");
//name of user upon loading app
let name="dsafh";
// function init() {
  //   name = prompt("Please enter your name");
// }
// document.addEventListener('DOMContentLoaded', init);

// add event listener on our message form
// msgForm.addEventListener('submit', sendMessage);

// send msg function to send msgs and also check that this is not empty
function sendMessage(e){
  e.preventDefault();
  const text = msgInput.value;
  
  if(!text.trim()) return alert('Please type a message'); //no msg submitted
  const msg = {
    name: name,
    text: text
  };
  
  // msgRef.push(msg);
  firebase.database().ref("msgs").push(msg);
  firebase.database().ref("msgs").set(msg)
  msgInput.value = "";
  
}

    console.log()





