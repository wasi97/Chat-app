
var userDiv = document.getElementById("usersDiv")
var loginDiv = document.getElementById("loginDiv")



function signupdetails(){
    var name = document.getElementById("name")
    userName = {username: name.value}
    // save SIGN UP data to database
    firebase.database().ref("/users").push(userName)
    loginDiv.classList.add("hide")
    userDiv.classList.remove("hide")
    console.log("done")
};
var users = document.getElementById("users")
var chatWindow = document.getElementById("chatWindow")
// data load from database
firebase.database().ref("/users").on("child_added",function(data){
     fetchedData = data.val()
    var li = document.createElement("li")
    var usersName = document.createTextNode(fetchedData.username)
    li.appendChild(usersName)
    users.appendChild(li)
    users.addEventListener("click",chatbox)
    console.log(users)
    console.log(fetchedData)
});
// send messages
var msg = document.getElementById("msg")
var msgbtn = document.getElementById("msgbtn")

function chatbox(){
    userDiv.classList.add("hide")
    chatWindow.classList.remove("hide")
}

function sendmsg(){
    firebase.database().ref("msgs/").push(msg.value)
    console.log(msg.value)
    
}

// retrieve messages from database
var msgBox = document.getElementById("messages")
firebase.database().ref("/msgs/").on("child_added",function(data){
    messages = data.val();
    var li = document.createElement("li")
    var retrievedMessages = document.createTextNode(messages)
    li.appendChild(retrievedMessages)
    msgBox.appendChild(li)
})



