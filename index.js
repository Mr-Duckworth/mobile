const navBarOne = document.querySelector("input#one");
const navBarTwo = document.querySelector("input#two");
const navBarThree = document.querySelector("input#three");
const navBarFour = document.querySelector("input#four");
const form = Array.from(document.querySelectorAll("form"));

const buttons = Array.from(document.querySelectorAll(".bottom-section > button"))
const nextBtn = document.querySelectorAll("button.btn");
const prevBtn = document.querySelectorAll("button.btn-outline-light");
const toggle = document.querySelector("#stepTwoSwitch");

const selectionHeading = document.querySelector("h6.selection-heading");
const selectionPrice = document.querySelector("p.selection-pricing");

const Addons = document.querySelectorAll(".selection-addons");
const AddonsPrice = document.querySelectorAll(".addons-pricing");
const addonsChecked = document.querySelectorAll(".third-step label");
const total = document.querySelector(".total");
const pricingTotal = document.querySelector(".pricing-total")

const inputEmail = document.querySelector("#emailAddress");
const inputPhone = document.querySelector("#phoneNumber");


navBarOne.addEventListener("click", () => {
    navBarOne.checked = 1;
    form[0].classList.add("active");
    form[1].classList.remove("active");
    form[2].classList.remove("active");
    form[3].classList.remove("active");
    form[4].classList.remove("active");
    buttons[0].classList.remove("act")
    buttons[1].classList.add("act")
    buttons[2].classList.remove("act")
});
navBarTwo.addEventListener("click", () => {
    navBarTwo.checked = 1;
    form[0].classList.remove("active");
    form[1].classList.add("active");
    form[2].classList.remove("active");
    form[3].classList.remove("active");
    form[4].classList.remove("active");
    buttons[0].classList.add("act")
    buttons[1].classList.add("act")
    buttons[2].classList.remove("act")
})
navBarThree.addEventListener("click", () => {
    navBarThree.checked = 1;
    form[0].classList.remove("active");
    form[1].classList.remove("active");
    form[2].classList.add("active");
    form[3].classList.remove("active");
    form[4].classList.remove("active");
    buttons[0].classList.add("act")
    buttons[1].classList.add("act")
    buttons[2].classList.remove("act")
})
navBarFour.addEventListener("click", () => {
    navBarFour.checked = 1;
    form[0].classList.remove("active");
    form[1].classList.remove("active");
    form[2].classList.remove("active");
    form[3].classList.add("active");
    form[4].classList.remove("active");
    buttons[0].classList.add("act")
    buttons[1].classList.remove("act")
    buttons[2].classList.add("act")
})



function checkEmail(email) {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    }
    return false;
}
  
function checkPhone(phone) {
    if (phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/)) {
      return true;
    }
    return false;
}

function showError(target) {
    if (target == "email") {
    /* SHAKE ANIMATION */
    inputEmail.style.border = "1px solid red";
    inputEmail.classList.add("shake");
    inputEmail.classList.remove("shake");
    void inputEmail.offsetWidth;
    inputEmail.classList.add("shake");
  
    /*SHOW ERROR */
  
    let error = document.querySelector(".email-error");
    error.style.display = "inline-block";
  
    setTimeout(() => {
        inputEmail.style.border = "2px solid hsl(229, 24%, 87%)";
        inputEmail.style.transition = "border 1s linear";
        error.style.display = "none";
    }, 6000);

    } else if (target == "phone") {

    inputPhone.style.border = "1px solid red";

    /* SHAKE ANIMATION */

    inputPhone.classList.add("shake");
    inputPhone.classList.remove("shake");
    void inputPhone.offsetWidth;
    inputPhone.classList.add("shake");
  
    /*SHOW ERROR */
  
    let error = document.querySelector(".phone-error");
    error.style.display = "inline-block";

    setTimeout(() => {
        inputPhone.style.border = "2px solid hsl(229, 24%, 87%)";
        inputPhone.style.transition = "border 1s linear";
        error.style.display = "none";
      }, 6000);
    }
}
  

nextBtn.forEach(button => {
    button.addEventListener("click",() => {
        changeStep("next");
    });
});

prevBtn.forEach(button=> {
    button.addEventListener("click", () => {
        changeStep("prev");
    })
});

function changeStep(btn) {
    let email = inputEmail.value;
    let phone = inputPhone.value;
    let checkedEmail = checkEmail(email);
    let checkedPhone = checkPhone(phone);
    let index = 0;
    const active = document.querySelector("form.active");
    index = form.indexOf(active);
    form[index].classList.remove("active");
    if (btn === "next") {
        if (!checkedEmail) {
            showError("email");
            index = 0
        }
      
        if (!checkedPhone) {
            showError("phone");
            index = 0
        }
    
        if (checkedEmail && checkedPhone) {
            index++;
        } 

    } else if (btn === "prev") {
        index--
    }

    form[index].classList.add("active"); 

    if (form[index] == form[0]) {
        navBarOne.checked = 1
        buttons[0].classList.remove("act")
        buttons[1].classList.add("act")
        buttons[2].classList.remove("act")
    } else if (form[index] == form[1]) {
        navBarTwo.checked = 1
        buttons[0].classList.add("act")
        buttons[1].classList.add("act")
        buttons[2].classList.remove("act")
    } else if (form[index] == form[2]) {
        navBarThree.checked = 1
        buttons[0].classList.add("act")
        buttons[1].classList.add("act")
        buttons[2].classList.remove("act")
    } else if (form[index] == form[3]) {
        navBarFour.checked = 1
        buttons[0].classList.add("act")
        buttons[1].classList.remove("act")
        buttons[2].classList.add("act")
    } else if (form[index] == form[4]) {
        buttons[0].classList.remove("act");
        buttons[1].classList.remove("act")
        buttons[2].classList.remove("act")
    }
    
}



function getChecked() {
    const check = toggle.checked;
    if (check === true ){
        $(".monthly").removeClass("active");
        $(".yearly").addClass("active");
        $(".add-ons-monthly").removeClass("active");
        $(".add-ons-yearly").addClass("active")
        total.innerHTML = "Total (per year)"
    } else {
        $(".monthly").addClass("active");
        $(".yearly").removeClass("active");
        $(".add-ons-monthly").addClass("active");
        $(".add-ons-yearly").removeClass("active")
    }
}


function submitBtn() {
    const subscriptions = document.getElementsByName("btnradio");
    for (let i = 0; i<subscriptions.length; i++) {
        if (subscriptions[i].checked) {
            const selectedSubscriptions = {
                value: subscriptions[i].value, 
                amount: subscriptions[i].placeholder,
                number: Number(subscriptions[i].id)
            }
            selectionHeading.innerHTML = selectedSubscriptions.value;
            selectionPrice.innerHTML = selectedSubscriptions.amount;
            var subcriptionsAmount = selectedSubscriptions.number;
        }
    }
    const addOns = document.getElementsByName("add-ons");
        if (addOns[0].checked) {
            const selectedAddonOne = { 
                value: addOns[0].value, 
                amount: addOns[0].placeholder,
            };
            Addons[0].innerHTML = selectedAddonOne.value;
            AddonsPrice[0].innerHTML = selectedAddonOne.amount;
            var addonAmountOne = 1;
        } else {
            addonAmountOne = 0
        }

        if (addOns[1].checked) {
            const selectedAddonTwo = { 
                value: addOns[1].value, 
                amount: addOns[1].placeholder,
            };
            Addons[1].innerHTML = selectedAddonTwo.value;
            AddonsPrice[1].innerHTML = selectedAddonTwo.amount;
            var addonAmountTwo = 2;
        } else {
            addonAmountTwo = 0
        }

        if (addOns[2].checked) {
            const selectedAddonThree = { 
                value: addOns[2].value, 
                amount: addOns[2].placeholder,
            };
            Addons[2].innerHTML = selectedAddonThree.value;
            AddonsPrice[2].innerHTML = selectedAddonThree.amount;
            var addonAmountThree = 2;
        } else {
            addonAmountThree = 0
        }
        
        if (addOns[3].checked) {
            const selectedAddonFour = { 
                value: addOns[3].value, 
                amount: addOns[3].placeholder,
            };
            Addons[0].innerHTML = selectedAddonFour.value;
            AddonsPrice[0].innerHTML = selectedAddonFour.amount;
            var addonAmountFour = 10;
        } else {
            addonAmountFour = 0
        }
        
        if (addOns[4].checked) {
            const selectedAddonFive = { 
                value: addOns[4].value, 
                amount: addOns[4].placeholder,
            };
            Addons[1].innerHTML = selectedAddonFive.value;
            AddonsPrice[1].innerHTML = selectedAddonFive.amount;
            var addonAmountFive = 20;
        } else {
            addonAmountFive = 0
        }
        
        if (addOns[5].checked) {
            const selectedAddonSix = { 
                value: addOns[5].value, 
                amount: addOns[5].placeholder,
            };
            Addons[2].innerHTML = selectedAddonSix.value;
            AddonsPrice[2].innerHTML = selectedAddonSix.amount;
            var addonAmountSix = 20;
        } else {
            addonAmountSix = 0
        }

        const addonsMonthlyAmount = addonAmountOne + addonAmountTwo + addonAmountThree + subcriptionsAmount;
        const addonsYearlyAmount = addonAmountFour + addonAmountFive + addonAmountSix + subcriptionsAmount;
        
        if (addonsMonthlyAmount <= 20 ) {
            pricingTotal.innerHTML = "+$" + addonsMonthlyAmount + "/mo"
        } else {
            pricingTotal.innerHTML = "+$" + addonsYearlyAmount + "/yr"
        }
        
}

function addonToggle() {
    const addOns = document.getElementsByName("add-ons");
    for (let index = 0; index < addOns.length; index++) {
        if (addOns[index].checked) {
            addonsChecked[index].classList.add("show");
        } else {
            addonsChecked[index].classList.remove("show");
        }
    }
}
 
function change() {
    navBarTwo.checked = 1;
    form[0].classList.remove("active");
    form[1].classList.add("active");
    form[2].classList.remove("active");
    form[3].classList.remove("active");
    form[4].classList.remove("active");
}

