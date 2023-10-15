
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
console.log(myToggleSpan)

// select the last div and append new span element to it
const lastDiv=document.querySelector(".third-row")
console.log(lastDiv)
lastDiv.appendChild(myToggleSpan)

/* separate event for the password field, as long as user enters a valid password and both passwords fields match...
(border should be green)
*/
password.addEventListener("input",()=>{
    if(password.validity.tooShort){
        password.setCustomValidity("make sure both password fields math each other and have at least 8 characters")// this message appears after clicking the btn if password is too short or doesn't both pw don't match each other
        password.classList.remove("matching")
        password.classList.add("error")
        password.style.setProperty("border", "1px solid red")
    }
    if(password.value!==confirmPassword.value){
        password.classList.remove("matching")
        password.classList.add("error")
        password.style.setProperty("border", "1px solid red")
        confirmPassword.style.setProperty("border", "1px solid red")

        //when passwords don't match
        myToggleSpan.textContent="Passwords Do Not Match!"
        myToggleSpan.style.setProperty("color","red")

    }
    else {
       console.log("valid password entered")
        password.classList.add("matching")
        password.classList.remove("error")
        password.style.setProperty("border", "1px solid green")
        confirmPassword.style.setProperty("border", "1px solid green")
      
        // when passwords match
        myToggleSpan.textContent="Passwords are Matching!"
        myToggleSpan.style.setProperty("color","green")
    }
})

// the confirm password field should only get a green border if both passwords match and the passwords are valid(8 or more characters)
// if both password field don't match or aren't valid the border will be set to red
confirmPassword.addEventListener("input",()=>{
    if (password.value !== confirmPassword.value){
        confirmPassword.classList.add("error") 
        password.classList.add("error") 
        confirmPassword.style.setProperty("border", "1px solid rgb(237, 75, 75)");
        password.style.setProperty("border", "1px solid rgb(237, 75, 75)");

        // when passwords do not match
        myToggleSpan.textContent="Passwords Do Not Match!"
        myToggleSpan.style.setProperty("color","red")

        if(confirmPassword.classList.contains("matching")){ 
            confirmPassword.classList.remove("matching") 
            password.classList.remove("matching") 
        } 
    }
    
    else if(password.value===confirmPassword.value && !password.validity.tooShort){
        console.log("both passwords match and are valid")
        confirmPassword.classList.remove("error")
        password.classList.remove("error")
        confirmPassword.classList.add("matching")
        password.classList.add("matching")
        confirmPassword.style.setProperty("border", "1px solid green");
        password.style.setProperty("border", "1px solid green")

        //when passwords are valid and match change text content plus style this span differently
        myToggleSpan.textContent="Passwords are Matching!"
        myToggleSpan.style.setProperty("color","green")
    } 
    console.log(`hello this is the content of the confirm password field ${confirmPassword.value}`) //remove when everything works
    console.log(`hello this is the content of the  password ${password.value}`) //remove when everything works
})

//when user presses the button this will check if every input field was filled correctly and both password match each other
// the if code block will execute if one of the condition is true(either some input fields are invalid or the password don't match)
createAccountBtn.addEventListener("click",(e)=>{
    if(!myForm.checkValidity()||password.value!==confirmPassword.value){
        myForm.reportValidity() // will show the custom error message to the user
        
        e.preventDefault()
    }
    
    
})
    



