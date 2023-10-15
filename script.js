
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
    // pw is too short or empty
    if(password.validity.tooShort || password.value.trim()===""){ // when both field are empty there is a bug 
        password.setCustomValidity("make sure both password fields math each other and have at least 8 characters")// this message appears after clicking the btn if password is too short or doesn't both pw don't match each other
       
        /* password.classList.remove("matching")
        password.classList.add("error") */

        // pw is too short
        addErrorClass(password)
        addErrorClass(confirmPassword)
        // we call this func after adding the class to the pw fields
        setBorder()

       /*  password.style.setProperty("border", "1px solid red") */

       myToggleSpan.textContent="Password is too Short!"
       myToggleSpan.style.setProperty("color","red")
    }
    else if(password.value!==confirmPassword.value){

       /*  password.classList.remove("matching")
        password.classList.add("error") */

       /*  password.style.setProperty("border", "1px solid red")
        confirmPassword.style.setProperty("border", "1px solid red")*/

        //pw don't match error class is added
        addErrorClass(password)
        addErrorClass(confirmPassword)
        setBorder()


        //when passwords don't match
        myToggleSpan.textContent="Passwords Do Not Match!"
        myToggleSpan.style.setProperty("color","red")

    }
    else {
       console.log("valid password entered")

       /*  password.classList.add("matching")
        password.classList.remove("error") */

       /*  password.style.setProperty("border", "1px solid green")
        confirmPassword.style.setProperty("border", "1px solid green")
       */

        //pw match
        addMatchingClass(password)
        addMatchingClass(confirmPassword)
        setBorder()

        // when passwords match
        myToggleSpan.textContent="Passwords are Matching!"
        myToggleSpan.style.setProperty("color","green")
    }
})

// the confirm password field should only get a green border if both passwords match and the passwords are valid(8 or more characters)
// if both password field don't match or aren't valid the border will be set to red
confirmPassword.addEventListener("input",()=>{
    if (password.value !== confirmPassword.value){
        
       /*  confirmPassword.classList.add("error") 
        password.classList.add("error") */

      /*   confirmPassword.style.setProperty("border", "1px solid rgb(237, 75, 75)");
        password.style.setProperty("border", "1px solid rgb(237, 75, 75)");
 */
        // when passwords do not match
        myToggleSpan.textContent="Passwords Do Not Match!"
        myToggleSpan.style.setProperty("color","red")

      /*   if(confirmPassword.classList.contains("matching")){ 
            confirmPassword.classList.remove("matching") 
            password.classList.remove("matching") 
        }  */

        // pw don't match
        addErrorClass(password)
        addErrorClass(confirmPassword)
        setBorder()


    }
    if(password.validity.tooShort || password.value.trim()===""){ /*other use conditional test with confirm password field confirmpassword.validity.tooShort or smth else */
          // pw is too short or empty
          addErrorClass(password)
          addErrorClass(confirmPassword)
          setBorder()

    }

    else if(password.value===confirmPassword.value && !password.validity.tooShort){
        console.log("both passwords match and are valid")
       /*  confirmPassword.classList.remove("error")
        password.classList.remove("error") */

      /*  confirmPassword.classList.add("matching")
            password.classList.add("matching")*/

        //add func call here after adding the matching class

        /* confirmPassword.style.setProperty("border", "1px solid green");
        password.style.setProperty("border", "1px solid green")*/

        //when passwords are valid and match change text content plus style this span differently
        myToggleSpan.textContent="Passwords are Matching!"
        myToggleSpan.style.setProperty("color","green")


         // pw  match and isn't too short
        addMatchingClass(password)
        addMatchingClass(confirmPassword)
        setBorder()
 
    } 
    console.log(`hello this is the content of the confirm password field ${confirmPassword.value}`) //remove when everything works
    console.log(`hello this is the content of the  password ${password.value}`) //remove when everything works
})

function addMatchingClass(passwordField){ // add matching class to pw fields and remove error class from both pw field
    /* confirmPassword.classList.add("matching")
    password.classList.add("matching") */

   /*  if(confirmPassword.classList.contains("error")){ 
        confirmPassword.classList.remove("error") 
        password.classList.remove("error") 
    } 
    if(password.classList.contains("error")){ 
        confirmPassword.classList.remove("error") 
        password.classList.remove("error") 
    }  */
    if(passwordField.classList.contains("error")){
        passwordField.classList.remove("error")
    }
    

    return passwordField.classList.add("matching")
}

function addErrorClass(passwordField){ // add error class to pw fields and remove matching class from both pw field
   /*  confirmPassword.classList.add("error") 
    password.classList.add("error")
    
    if(confirmPassword.classList.contains("error")){ 
        confirmPassword.classList.remove("error") 
        password.classList.remove("error") 
    } 
    if(password.classList.contains("error")){ 
        confirmPassword.classList.remove("error") 
        password.classList.remove("error") 
    }  */
    if(passwordField.classList.contains("matching")){
        passwordField.classList.remove("matching")
    }
   
    return passwordField.classList.add("error")
}

function setBorder(){ // if pw field have the proper class set proper border and remove class
    if(confirmPassword.classList.contains("matching") && password.classList.contains("matching")){
       /*  confirmPassword.classList.remove("error")
        password.classList.remove("error") */
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
    



