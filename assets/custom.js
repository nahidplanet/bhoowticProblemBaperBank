
/*/ 
=================================
login page
=================================
*/
document.getElementById("login").addEventListener("click",function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email == "nahid@gmail.com" && password == "nahid"){
        window.location.href = "bank.html";
    }
    else if(email == "" && password == ""){
        document.getElementById("errorMsgLogin").innerText = "required this login Field";
    }else{
        document.getElementById("errorMsgLogin").innerText = "your mail and password not exist in our Database";
    }
});



/*/ 
=================================
bank page 
=================================
*/

// deposite 
document.getElementById("depo-button").addEventListener("click",function () {

    
    let depoInputInner = document.getElementById("depo-input");
    let depoInputText = depoInputInner.value;
  
    if (depoInputText == "") {
        document.getElementById("errorMsg").innerText = "required this deposite Field";
    }
    else{

        let depoInput = parseFloat(depoInputText);
    

    let depoAmount = document.getElementById("deposit-amount");
    let depositeText = depoAmount.innerText;
    let deposit = parseFloat(depositeText)
    depoAmount.innerText = depoInput + deposit;

    // total amount 
    let totalAmount = document.getElementById("total-amount");
    let totalText = totalAmount.innerText;
    let total = parseFloat(totalText);
    totalAmount.innerText =  total + depoInput;

    // Input field clear 
    depoInputInner.value = "";

    }
    
})

document.getElementById("withdraw-button").addEventListener("click",function(){
    let withdrawInputInner = document.getElementById("with-input");
    let withdrawInputText = withdrawInputInner.value;
    
    if (withdrawInputText == "") {
        document.getElementById("errorMsg").innerText = "required this deposite Field";
    }else{
        
    let withdrowInput = parseFloat(withdrawInputText);

    let withdrawAmountText = document.getElementById("withdraw-amount");
    let withdrawAmmountInner = withdrawAmountText.innerText;
    let withdrawAmmount = parseFloat(withdrawAmmountInner);
    withdrawAmountText.innerText = withdrawAmmount + withdrowInput;



    let totalAmount = document.getElementById("total-amount");
    totalAmountText = totalAmount.innerText;
    let totalamountMain = parseFloat(totalAmountText);
    totalAmount.innerText = totalamountMain - withdrowInput;

    // Input field clear 
    withdrawInputInner.value = '';
    }

   
    

});
