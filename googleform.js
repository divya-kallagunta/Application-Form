function validateInputs(){
    let firstname = document.getElementById("fname");
    console.log("firstname:"+firstname.value)
    let lastname = document.getElementById("lname");
    console.log("lastname:"+lastname.value)
    let mothername = document.getElementById("mothername");
    console.log("mothername:"+mothername.value)
    let fathername = document.getElementById("fathername");
    console.log("fathername:"+fathername.value)
    let Dob = document.getElementById("Dob");
    console.log("DateOfBirth:"+Dob.value)
    let Gender = document.getElementById("gender");
    console.log("Gender:"+Gender.value)
    let  Age= document.getElementById("age");
    console.log("Age:"+Age.value)
    let phoneEl = document.getElementById("phonenumber");
    console.log("phonenumber:"+phoneEl.value)
    let Email = document.getElementById("email");
    console.log("email:"+Email.value)
    let college = document.getElementById("college_name");
    console.log("college_name:"+college.value)
    let universityEl= document.getElementById("university");
    console.log("university:"+universityEl.value)
    let address = document.getElementById("address");
    console.log("address:"+address.value);

if(firstname.value.length<=0){
    alert("fill the firstname:");
    firstname.focus();
    return false;

}
if(lastname.value.length<=0){
    alert("fill the lastname:");
    lastname.focus();
    return false;
}
if(mothername .value.length<=0){
    alert("fill the mothername:");
    mothername.focus();
    return false;
}
if(fathername .value.length<=0){
    alert("fill the fathername:");
    fathername.focus();
    return false;
}
if(Dob.value.length<=0){
    alert("fill the dateofbirth:");
    Dob.focus();
    return false;
}
if(Gender.value.length<="select gender"){
    alert("fill the Gender:");
    Gender.focus();
    return false;
}
if(Age.value.length<=0){
    alert("fill the Age:");
    Age.focus();
    return false;
}
if(phoneEl.value.length<=0){
    alert("fill the phonenumber:");
    phoneEl.focus();
    return false;
}
if(Email.value.length<=0){
    alert("fill the email portion:");
    Email.focus();
    return false;
}
if(universityEl.value.length<=0){
    alert("fill the university portion:");
    universityEl.focus();
    return false;
}
if(address.value.length<=0){
    alert("fill the address portion:");
    address.focus();
}
if(college.value.length<=0){
    alert("fill the collegeportion:");
    college.focus();
    return false;
}

return false;
}
function validateFirstName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("First_name must be string only..");},4000);
        return false;
    };
};
function validateLastName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Last_name must be string only..");},4000);
        return false;
    };
};

function validateMotherName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Mother_name must be string only..");},4000);
        return false;
    };
};
function validateFatherName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Father_name must be string only..");},4000);
        return false;
    };
};
function validateAge(id){
    const element=document.getElementById(id);
    const re=/^[0-9]{1,2}$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("age should be a number:..");},4000);
       return false;
    };
};
function validateEmail(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("enter correct email:..");},4000);
       return false;
    };
};
function validatephonenumber(id){
    const element=document.getElementById(id);
    const re=/^[0-9]{10}$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("enter proper phonenumber:..");},4000);
       return false;
    };
};
function validateCollegeName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("college_name must be string only..");},4000);
        return false;
    };
};
function validateUniversityName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("university_name must be string only..");},4000);
        return false;
    };
};
function validateAdressName(id){
    const element=document.getElementById(id);
    const re=/^[a-zA-z ]+$/;
    if(!re.test(element.value)){
        setTimeout(function() {alert("Address_name must be string only..");},4000);
        return false;
    };
};

