function confirm() {

    let voornaam = document.getElementById("name").value;
    let achternaam = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;
    let message = document.getElementById("message").value;


    let confirm = "Thanks for contacting me " + voornaam + " " + achternaam +", I have send a email from " + email +  ", with the message: " + message + ". Your given phone number is: " + telephone;
    
    window.alert(confirm)


}