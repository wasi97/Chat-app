
var userDiv = document.getElementById("usersDiv")
var loginDiv = document.getElementById("loginDiv")


function msgRefdb(){
    console.log(personalMsgRef)
}

function signupdetails(){
    var name = document.getElementById("name")
    userName = {username: name.value}
    // save SIGN UP data to database
    firebase.database().ref("/users").push(userName)
    personCheck = userName.username;
    // personalMsgRef = firebase.database().ref("/msgs/" + userName.username)
    loginDiv.classList.add("hide")
    userDiv.classList.remove("hide")
    
};
var users = document.getElementById("users")
var chatWindow = document.getElementById("chatWindow")
// data load from database
firebase.database().ref("/users").on("child_added",function(data){
    fetchedData = data.val()
    var li = document.createElement("li")
    var usersName = document.createTextNode(fetchedData.username)
    li.appendChild(usersName)
    li.setAttribute("id",fetchedData.username)
    li.setAttribute("onclick","chatbox(this)")
    users.appendChild(li)

});
   
    
function chatbox(e){
    userDiv.classList.add("hide")
    chatWindow.classList.remove("hide")
    getuserid = e.getAttribute("id");
}

// send messages
var msg = document.getElementById("msg")
var msgbtn = document.getElementById("msgbtn")


function sendmsg(){
    
    // personalMsgRef.push(msg.value)
    firebase.database().ref("msgs/" + getuserid).push(msg.value)
    msg.value = ""
    
    // retrieve messages from database
var msgBox = document.getElementById("messages")
firebase.database().ref("/msgs/" + getuserid).on("child_added",function(data){
    messages = data.val();
    var li = document.createElement("li")
    var retrievedMessages = document.createTextNode(messages)
    li.appendChild(retrievedMessages)
    msgBox.appendChild(li)
})

}


