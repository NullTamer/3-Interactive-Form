console.log("test");
let nameX = document.querySelector("#name");

//When the page loads, the first form field should be in focus, meaning it should have a flashing cursor and/or be highlighted in some way. Added X because name is deprecated?
nameX.focus();

//Adjacent to the "Job Role" menu on the page is the "Other job role" field. This field should be hidden by default, and only be displayed if the user selects the "Other" option from the "Job Role" drop-down menu. And if the user selects any other option, the "Other job role" field should be hidden from view.

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

//T-shirt Info

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

//Register for Activities

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

//Payment Info

const payWith = document.getElementById("payment"); //"im going to pay with"
const creditCard = document.getElementById("credit-card"); //Credit Card <div>
const payPal = document.getElementById("paypal"); // paypal <div>
const bitCoin = document.getElementById("bitcoin"); //bitcoin <div>
payPal.style.display = "none";
bitCoin.style.display = "none";

payWith.children[1].setAttribute("selected", true); //sets default payment to CC

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

//Form Validation

// The "Name" <input type="text"> element (should already have a variable)
// The "Email Address" <input type="text"> element
// The "Register for Activities" <fieldset> element (should already have a variable)
// The "Card number" <input type="text"> element
// The "Zip code" <input type="text"> element
// The "CVV" <input type="text"> element
// The <form> element

const email = document.querySelector("#mail");
let zipCode = document.querySelector("#zip");
let ccNum = document.querySelector("#cc-num");
let cvv = document.querySelector("#cvv");
const form = document.querySelector("form");
const nameError = document.getElementById("name-hint");
const emailError = document.getElementById("email-hint");

form.addEventListener("submit", function (e) {
  let nameValue = nameX.value;
  // let emailValue = email.value;

  if (nameValue === null || nameValue === "") {
    nameError.style.display = "block";
    e.preventDefault();
  }
  // if (
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //     emailValue
  //   )
  // ) {
  //   emailError.style.display = "block";
  //   e.preventDefault();
  // }
});
//   function testName(nameTest) {
//     console.log(nameTest);
//     if (nameValue === "") {
//       //Name cannot be empty
//       return false;
//     } else {
//       //Anything apart from empty passes
//       return true;
//     }
//   }
// });
