let outputArea = document.getElementById("outputArea")

let btnArea = (val)=>{
    if (val=='addUser') {
        document.getElementById("btnArea").hidden = true;
        document.getElementById("addUser").hidden = false;
    }
    else if(val=='deleteUser'){
        document.getElementById("btnArea").hidden = true;
        document.getElementById("deleteUser").hidden = false;
    }
    else if(val=='login'){
        document.getElementById('btnArea').hidden = true;
        document.getElementById("loginArea").hidden = false;
    }
    
}

// ADDING USER

let addUserSuccess = () => {
    
    var newUserData = []
    var NewUserName = document.getElementById("userName").value;
    var newUserAge = document.getElementById("userAge").value;
    var newUserStudy = document.getElementById("userStudy").value;
    var newUserPass = document.getElementById("userPass").value

   if (NewUserName=="") {
    alert('Please Fill All Fields First')
   }else{
    document.getElementById("btnArea").hidden = false;
   document.getElementById("addUser").hidden = true;
   document.getElementById("userName").value="";
   document.getElementById("userAge").value="";
   document.getElementById("userStudy").value="";
   document.getElementById("userPass").value="";
   alert(`${NewUserName} has successfully been added to local storage`)
    newUserData.push(NewUserName)
    newUserData.push(newUserAge)
    newUserData.push(newUserStudy)
    newUserData.push(newUserPass)
   

   localStorage.setItem(NewUserName , JSON.stringify(newUserData));
  
   
    }
}

// DISPLAYING USER



let generateUserList = () => {
  let userLists = ''; 

  for (let i = 0; i < localStorage.length; i++) {
      userLists += localStorage.key(i) + "\n";
  }

  outputArea.innerText = '';

  if (userLists === '') { 
      outputArea.innerHTML = "There's nothing to display here.";
  } else {
      outputArea.innerText = userLists;
  }
}

// DELETING A USER 

let deleteUserSuccess = () => {
  const deleteUserInput = document.getElementById('deleteUserName').value.trim();

  if (deleteUserInput === '') {
      outputArea.innerHTML = "Please enter a valid username.";
      return;
  }

  if (!(deleteUserInput in localStorage)) {
      outputArea.innerHTML = "No user found with the entered name. ";
      return;
  }


  localStorage.removeItem(deleteUserInput);

  outputArea.innerHTML = `${deleteUserInput} has been deleted from local storage`;
  document.getElementById("btnArea").hidden = false;
  document.getElementById("deleteUser").hidden = true;
};


// DELETE ALL USERS

const deleteAllUserSuccess = () => {
  localStorage.clear();
  outputArea.innerHTML = "All users have been deleted.";
};




//  LOGGING IN

let loginUserBtn = () =>{
    let loginUser = document.getElementById("loginUser")
    let loginPass = document.getElementById("loginPass")
    
    let loginBtn = document.getElementById("logInBtn")
    if (loginBtn.value=="login") {
        if (loginUser.value=="hassam325" && loginPass.value=="parzival") {
            document.getElementById('btnArea').hidden = false;
            document.getElementById('loginArea').hidden = true;
            outputArea.innerHTML="Welcome Hassam"
        }else(
            outputArea.innerHTML="Wrong Username or Password"
        )
    } else {
        loginBtn.value=="login"

    }
}



