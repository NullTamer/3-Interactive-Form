console.log("test");
//3.
let nameX = document.querySelector("#name");

//When the page loads, the first form field should be in focus, meaning it should have a flashing cursor and/or be highlighted in some way. Added X because name is deprecated?
nameX.focus();

//4. Adjacent to the "Job Role" menu on the page is the "Other job role" field. This field should be hidden by default, and only be displayed if the user selects the "Other" option from the "Job Role" drop-down menu. And if the user selects any other option, the "Other job role" field should be hidden from view.

const job = document.querySelector("#title"); //Job role Selector
const otherJob = document.querySelector("#other-job-role"); //Other Jobs dropdown
otherJob.style.display = "none"; //Hide other jobs by default

job.addEventListener("change", function (event) {
  if (event.target.value === "other") {
    //if event is "other"
    otherJob.style.display = "block"; //display other input
  } else {
    otherJob.style.display = "none"; //hide other input
  }
});

//5.T-shirt Info

const shirtDesignSelect = document.getElementById("design");
const shirtColorSelect = document.getElementById("color");
let shirtColorList = shirtColorSelect.children; // List elements of Color

shirtColorSelect.disabled = true; //disables Color menu

shirtDesignSelect.addEventListener("change", function (e) {
  shirtColorSelect.disabled = false; //reenables Color menu
  for (i = 0; i < shirtColorList.length; i++) {
    const target = e.target.value;
    const shirtPicker = shirtColorList[i];
    if (target === shirtPicker.getAttribute("data-theme")) {
      //tests for matches between current event and index data-name
      shirtPicker.hidden = false;
      shirtPicker.selected = true;
    } else {
      shirtPicker.hidden = true;
      shirtPicker.selected = false;
    }
  }
});

//6. Register for Activities

const activitySection = document.querySelector(".activities"); //activities fieldset
let activityCost = document.querySelector(".activities-cost"); //activities cost
let totalCost = 0;

activitySection.addEventListener("change", function (e) {
  let dataAttrCost = e.target.getAttribute("data-cost");
  let dataCost = parseInt(dataAttrCost);
  if (e.target.checked === true) {
    //if checked, add dataCost
    totalCost += dataCost;
  } else if (e.target.checked === false) {
    //if unchecked, subtract dataCost
    totalCost -= dataCost;
  }
  activityCost.innerHTML = `Total: $${totalCost}`; //append totalCost to Total:
});

//7. Payment Info

const payWith = document.getElementById("payment"); //"im going to pay with"
const creditCard = document.getElementById("credit-card"); //Credit Card <div>
const payPal = document.getElementById("paypal"); // paypal <div>
const bitCoin = document.getElementById("bitcoin"); //bitcoin <div>
payPal.style.display = "none";
bitCoin.style.display = "none";

payWith.children[1].setAttribute("selected", true); //sets default payment to none

payWith.addEventListener("change", function (e) {
  const target = e.target.value;
  //tests for matches between current event and index data-name
  if (target === "credit-card") {
    //show CC
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitCoin.style.display = "none";
  } else if (target === "paypal") {
    //show paypal
    creditCard.style.display = "none";
    payPal.style.display = "block";
    bitCoin.style.display = "none";
  } else if (target === "bitcoin") {
    //show bitcoin
    creditCard.style.display = "none";
    payPal.style.display = "none";
    bitCoin.style.display = "block";
  }
});

//8. Form Validation

// The "Name" <input type="text"> element (should already have a variable)
// The "Email Address" <input type="text"> element
// The "Register for Activities" <fieldset> element (should already have a variable)
// The "Card number" <input type="text"> element
// The "Zip code" <input type="text"> element
// The "CVV" <input type="text"> element
// The <form> element

const email = document.querySelector("#email"); //selects email block
let zipCode = document.querySelector("#zip"); //selects zip block
let ccNum = document.querySelector("#cc-num"); //selects credit card number block
let cvv = document.querySelector("#cvv"); //selects cvv
const form = document.querySelector("form"); //form selector
const nameError = document.getElementById("name-hint"); //error message for name
const emailError = document.getElementById("email-hint"); //error message for email
const activityError = document.getElementById("activities-hint"); //error message for activities
const ccSelected = payWith.options[1].value; //value of paywith "credit-card"
const ccError = document.getElementById("cc-hint"); //error message for credit card
const zipError = document.getElementById("zip-hint"); //error message for zip
const cvvError = document.getElementById("cvv-hint"); //error message for cvv

form.addEventListener("submit", function (e) {
  let nameValue = nameX.value;
  let emailValue = email.value;

  if (nameValue === null || nameValue === "") {
    //tests if name is false
    nameError.style.display = "block";
    nameError.parentElement.classList.remove("valid"); //displays valid symbol (same for every other line with altered variable forthwith)
    nameError.parentElement.classList.add("not-valid"); //displays invalid symbol
    nameError.parentElement.lastElementChild.style.display = "block"; //displays red border
    e.preventDefault();
  } else {
    //if name is valid
    nameError.style.display = "none";
    nameError.parentElement.classList.remove("not-valid");
    nameError.parentElement.classList.add("valid");
    nameError.parentElement.lastElementChild.style.display = "none"; //removes red border
  }
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue
    ) === false //tests regEx for email, false condition
  ) {
    emailError.style.display = "block";
    emailError.parentElement.classList.remove("valid");
    emailError.parentElement.classList.add("not-valid");
    emailError.parentElement.lastElementChild.style.display = "block";
    e.preventDefault();
  } else {
    //email, true condition
    emailError.style.display = "none";
    emailError.parentElement.classList.remove("not-valid");
    emailError.parentElement.classList.add("valid");
    emailError.parentElement.lastElementChild.style.display = "none";
  }
  if (totalCost === 0) {
    activityError.style.display = "block";
    activityError.parentElement.classList.remove("valid");
    activityError.parentElement.classList.add("not-valid");
    activityError.parentElement.lastElementChild.style.display = "block";
    e.preventDefault();
  } else {
    activityError.style.display = "none";
    activityError.parentElement.classList.remove("not-valid");
    activityError.parentElement.classList.add("valid");
    activityError.parentElement.lastElementChild.style.display = "none";
  }
  if (ccSelected === "credit-card");
  {
    if (/^\d{13,16}$/.test(ccNum.value) === false) {
      //tests regEx for credit card, false condition
      ccError.style.display = "block";
      ccError.parentElement.classList.remove("valid");
      ccError.parentElement.classList.add("not-valid");
      ccError.parentElement.lastElementChild.style.display = "block";
      e.preventDefault();
    } else {
      //credit card true condition
      ccError.style.display = "none";
      ccError.parentElement.classList.remove("not-valid");
      ccError.parentElement.classList.add("valid");
      ccError.parentElement.lastElementChild.style.display = "none";
    }
    if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode.value) === false) {
      //tests regEx for zipcode, false condition
      zipError.style.display = "block";
      zipError.parentElement.classList.remove("valid");
      zipError.parentElement.classList.add("not-valid");
      zipError.parentElement.lastElementChild.style.display = "block";
      e.preventDefault();
    } else {
      //true condition for zip
      zipError.style.display = "none";
      zipError.parentElement.classList.remove("not-valid");
      zipError.parentElement.classList.add("valid");
      zipError.parentElement.lastElementChild.style.display = "none";
    }
    if (/^[0-9]{3}$/.test(cvv.value) === false) {
      //tests regEx for cvv, false condition
      cvvError.style.display = "block";
      cvvError.parentElement.classList.remove("valid");
      cvvError.parentElement.classList.add("not-valid");
      cvvError.parentElement.lastElementChild.style.display = "block";
      e.preventDefault();
    } else {
      //true condition for cvv
      cvvError.style.display = "none";
      cvvError.parentElement.classList.remove("not-valid");
      cvvError.parentElement.classList.add("valid");
      cvvError.parentElement.lastElementChild.style.display = "none";
    }
  }
});

//9. Accessibility

const checkBoxes = document.querySelectorAll(`input[type = 'checkbox']`);

for (let i = 0; i < checkBoxes.length; i++) {
  let checkBox = checkBoxes[i];
  checkBox.addEventListener("focus", function () {
    checkBox.parentElement.classList.add("focus");
  });
  checkBox.addEventListener("blur", function () {
    checkBox.parentElement.classList.remove("focus");
  });
}

//Validation classes added to individual validators
