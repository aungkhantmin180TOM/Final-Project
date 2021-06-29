let email,password;//Declare the variable
let isAuthSuccsseed,isEmailSuccsseed,isPasswordSuccsseed = false;
let predefineddata ={
    email:'Layton',
    password:'12345678',
}
console.log(" predefineddata", predefineddata);
console.log('Input Email',email)
console.log('Input password', password)

  if (predefineddata.email=='Layton') {
   
    console.log("Correct Email");
    isEmailSuccsseed=true;
}
if (predefineddata.password=='12345678') {
   
    console.log("Correct Password");
    isPasswordSuccsseed=true;
}


if (isEmailSuccsseed &&  isPasswordSuccsseed) {
    console.log("correct Email and password")
    
    window.location= 'file:///D:/Final%20Project/The%20Road%20Crew.html';
    const person = {
        email: "Layton'",
        password: "12345678",
    }
    
    window.localStorage.setItem('email', JSON.stringify(email));
    window.localStorage.setItem('password', JSON.stringify(password));
} else{
 
   console.log('Show Error Message to User')
}
