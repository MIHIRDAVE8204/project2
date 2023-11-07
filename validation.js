function Register() {
    let Name = document.getElementById("Name").value;
    let selectedGender = "";
    let Date = document.getElementById("Date").value;
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    let City = document.querySelector('#City').value;
    let Checkbox = document.getElementById("Checkbox");

    if (document.getElementById('Male').checked) {
        selectedGender = "Male";
    } else if (document.getElementById('Female').checked) {
        selectedGender = "Female";
    } else {
        console.log("Please select gender");
    }

    if (Name == "") {
        console.log("Name should not be empty Atleast must be 8 character..")
    }

    else if (Email == "") {
        console.log("Please fill your Email address")
    }
    else if (Password == "") {
        console.log("Please fill your Password")
    }
    else if (City == "none") {
        console.log("Please select your city")
    }



    else if (!Checkbox.checked) {
        console.log("Please Accept the terms & conditions")
    } else {
        console.log("Registration succesfully")


        console.log(Name);
        console.log(selectedGender);
        console.log(Date);
        console.log(Email);
        console.log(Password);
        console.log(City);


    }
}

// signinnew
function signin(){
    let Emailsignin = document.getElementById("Emailsecond").value;
    let Passwordsignin = document.getElementById("Passwordsecond").value;

    if (Emailsignin == "") {
        console.log("Please fill your Email address")
    }
    else if (Passwordsignin == "") {
        console.log("Please fill your Password")
    }
    else{
     console.log(Emailsignin);
     console.log(Passwordsignin);
     console.log("Signin successfully")
    }
    

}