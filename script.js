
const password=document.querySelector("#password");
const confirmPassword=document.querySelector("#confirm-password");
const createAccountBtn=document.querySelector("button")
const myForm=document.querySelector("form")
const errorSpan = document.querySelector("input.error + span");

/* separate event for the password field, as long as user enters a valid password and both passwords fields match...
(border should be green)
*/
password.addEventListener("input",()=>{
    if(password.validity.tooShort){
        password.setCustomValidity("make sure password has at least 8 characters")// this message should appear after clicking the create btn if password is too short
        password.classList.remove("matching")
        password.classList.add("error")
        password.style.setProperty("border", "1px solid red")
    }
    if(password.value!==confirmPassword.value){
        password.classList.remove("matching")
        password.classList.add("error")
        password.style.setProperty("border", "1px solid red")
        confirmPassword.style.setProperty("border", "1px solid red")
    }
    else {
       console.log("valid password entered")
        password.classList.add("matching")
        password.classList.remove("error")
        password.style.setProperty("border", "1px solid green")
        confirmPassword.style.setProperty("border", "1px solid green")
      
    }
})

// the confirm password field should only get a green border if both passwords match and the passwords are valid(8 or more characters)
// if both password field don't match or aren't valid the border will be set to red
confirmPassword.addEventListener("input",()=>{
    if (password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity("passwords do not match!");
        confirmPassword.classList.add("error") 
        password.classList.add("error") 
        confirmPassword.style.setProperty("border", "1px solid rgb(237, 75, 75)");
        password.style.setProperty("border", "1px solid rgb(237, 75, 75)");

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
    



