// console.log('loing connecet')

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener("click", function(){
    // console.log("btn click")
    // 1 get mobile number
    const mobileNumber = document.getElementById('mobile-number');
    const contractNumber = mobileNumber.value;
    console.log(contractNumber);
    // 2 get pin number
    const pin = document.getElementById('login-pin');
    const loginPin = pin.value;
    console.log(pin);
    // 3 Match number & pin
    if(contractNumber == "01571184891" && loginPin == "1234"){
        alert("Login Success");
        // window.location.replace('./home.html');
        window.location.assign('./home.html');
        
    }
    else{
        alert("Login Failed")
        return;
    }
})