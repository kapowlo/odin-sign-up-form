
const password=document.querySelector("#password");
const confirmPassword=document.querySelector("#confirm-password");
const createAccountBtn=document.querySelector("button")
const myForm=document.querySelector("form")
const errorSpan = document.querySelector("input.error + span");

    
// added an event to confirm password if the this field does not match the password field add error class(red border)
// if the passwords match add matching class(green border) also checks if input field already contains the opposite class and removes it
confirmPassword.addEventListener("input",()=>{
    if (password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity("passwords do not match!!!!!");
        confirmPassword.classList.add("error") 
        password.classList.add("error") 
        confirmPassword.style.setProperty("border", "1px solid rgb(237, 75, 75)");
        password.style.setProperty("border", "1px solid rgb(237, 75, 75)");

        if(confirmPassword.classList.contains("matching")){ 
            confirmPassword.classList.remove("matching") 
            password.classList.remove("matching") 
        } 
    }

    else if(password.value===confirmPassword.value){
        confirmPassword.classList.remove("error")
        password.classList.remove("error")
        confirmPassword.classList.add("matching")
        password.classList.add("matching")
        confirmPassword.style.setProperty("border", "1px solid green");
        password.style.setProperty("border", "1px solid green");
    } 
    console.log(`hello this is the content of the confirm password field ${confirmPassword.value}`) //remove when everything works
    console.log(`hello this is the content of the  password ${password.value}`) //remove when everything works
})


//when user presses the  button this will check if every input field was filled correctly and both password match each other
createAccountBtn.addEventListener("click",(e)=>{
    if(!myForm.checkValidity()||password.value!==confirmPassword.value){
        myForm.reportValidity() // will show the custom error message to the user
        
        e.preventDefault()
    }
    
    
})
    



