
const password=document.querySelector("#password")
const confirmPassword=document.querySelector("#confirm-password")
const createAccountBtn=document.querySelector("button")
const myForm=document.querySelector("form")
const errorSpan = document.querySelector("input.error + span")

/* 
create the span element and add the class toggleText add text content to it
*/
const myToggleSpan=document.createElement("span")
myToggleSpan.classList.add("toggleText")
myToggleSpan.textContent="Passwords Do Not Match"


// select the last div and append new span element to it
const lastDiv=document.querySelector(".third-row")
lastDiv.appendChild(myToggleSpan)

/* separate events for the password fields, as long as user enters a valid password and both passwords fields match...
(border should be green) otherwise border of both pw fields  will be red 
*/
password.addEventListener("input",()=>{
    /*if pw is too short,the second condition with trim() is there to avoid bug when user enters something in pw field and then removes it
    if both field are empty the class matching would get added to the pw fields and their border would be green */
    if(password.validity.tooShort || password.value.trim()===""){ 
        password.setCustomValidity("make sure both password fields math each other and have at least 8 characters")// this message appears after clicking the btn if password is too short or both pw don't match each other
       
        // add error class to both pw fields
        addErrorClass(password)
        addErrorClass(confirmPassword)
        // call this func after adding the class to the pw fields
        setBorder()

      
    //when password is too short  set span element's text content
       myToggleSpan.textContent="Password is too Short!"
       myToggleSpan.style.setProperty("color","red")
    }
    else if(password.value!==confirmPassword.value){

        // add error class to both pw fields
        addErrorClass(password)
        addErrorClass(confirmPassword)
        // call this func after adding the class to the pw fields
        setBorder()


        //when passwords don't match set span element's text content
        myToggleSpan.textContent="Passwords Do Not Match!"
        myToggleSpan.style.setProperty("color","red")

    }
    else {
       console.log("valid password entered")

        // add matching class to both pw fields
        addMatchingClass(password)
        addMatchingClass(confirmPassword)
        // call this func after adding the class to the pw fields
        setBorder()

        // when passwords match and are valid set the span element's text content
        myToggleSpan.textContent="Passwords are Matching!"
        myToggleSpan.style.setProperty("color","green")
    }
})

// the confirm password field should only get a green border if both passwords match and the passwords are valid(8 or more characters)
// if both password field don't match or aren't valid the border will be set to red
confirmPassword.addEventListener("input",()=>{
    if (password.value !== confirmPassword.value){
        
        // when passwords do not match set the span element's text content
        myToggleSpan.textContent="Passwords Do Not Match!"
        myToggleSpan.style.setProperty("color","red")

        // add error class to both pw fields
        addErrorClass(password)
        addErrorClass(confirmPassword)
        setBorder()


    }

    /*pw is too short, the second condition with trim() is there to avoid bug ,when user enters something pw field and then removes
    if both field were empty the class matching would get added to the pw fields and their border would be green */
    else if(password.validity.tooShort || password.value.trim()===""){ 

        /*when the confirm password is too short but matches, 
        show appropriate message password is too short instead of password do not match*/
       myToggleSpan.textContent="Password is too Short!"
        myToggleSpan.style.setProperty("color","red")

          // add error class to both pw fields
          addErrorClass(password)
          addErrorClass(confirmPassword)
          setBorder()

    }

    // both pw fields match and the password isn't too short
    else if(password.value===confirmPassword.value && !password.validity.tooShort){ 
        console.log("both passwords match and are valid")
      
        // when passwords match set the span element's text content
        myToggleSpan.textContent="Passwords are Matching!"
        myToggleSpan.style.setProperty("color","green")


         // add matching class to both pw fields
        addMatchingClass(password)
        addMatchingClass(confirmPassword)
        setBorder()
 
    } 
    console.log(`hello this is the content of the confirm password field ${confirmPassword.value}`) //remove when everything works
    console.log(`hello this is the content of the  password ${password.value}`) //remove when everything works
})

function addMatchingClass(passwordField){ // remove error class from both pw fields and adds matching class to pw fields
   
    if(passwordField.classList.contains("error")){
        passwordField.classList.remove("error")
    }
    

    return passwordField.classList.add("matching")
}

function addErrorClass(passwordField){ // remove matching class from both pw fields and adds error class to pw fields
  
    if(passwordField.classList.contains("matching")){
        passwordField.classList.remove("matching")
    }
   
    return passwordField.classList.add("error")
}

function setBorder(){ // adds a border to pw field depending on the class they have red=error green=matching
    if(confirmPassword.classList.contains("matching") && password.classList.contains("matching")){
      
        confirmPassword.style.setProperty("border", "1px solid green");
        password.style.setProperty("border", "1px solid green")
    }
    else if(confirmPassword.classList.contains("error") && password.classList.contains("error")){
        confirmPassword.style.setProperty("border", "1px solid rgb(237, 75, 75)");
        password.style.setProperty("border", "1px solid rgb(237, 75, 75)");
    }
}

//when user presses the button this will check if every input field was filled correctly and both password match each other
// the if code block will execute if one of the condition is true(either some input fields are invalid or the password don't match)
createAccountBtn.addEventListener("click",(e)=>{
    if(!myForm.checkValidity()||password.value!==confirmPassword.value){
        myForm.reportValidity() // will show the custom error message to the user
        
        e.preventDefault()
    }
    
    
})
    



