console.log("this is project 4");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const car = document.getElementById("car");
let validName = false;
let validEmail = false;
let validPhone = false;
let validCar = false;
userName.addEventListener("blur", () => {
  //validate name here
  let reg = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
  let str = userName.value;
  if (reg.test(str)) {
    userName.classList.remove("is-invalid");
    validName = true;
  } else {
    userName.classList.add("is-invalid");
    validName = false;
  }
});
//validate email
email.addEventListener("blur", () => {
  let reg = /^([\.\-_a-zA-Z0-9]){1,20}@([a-z]){5,20}\.com$/;
  let str = email.value;
  if (reg.test(str)) {
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    email.classList.add("is-invalid");
    validEmail = false;
  }
});
//validate car
car.addEventListener("blur", () => {
  let feedback = document.querySelector(".car-feedback");
  if (car.value == "Select your car") {
    car.classList.add("is-invalid");
    feedback.style.display = "block";
    validCar = false;
  } else {
    car.classList.remove("is-invalid");
    validCar = true;
    feedback.style.display = "none";
  }
});
//validate phone number
phone.addEventListener("blur", () => {
  let reg = /^([0-9]){10,12}$/;
  let str = phone.value;
  if (reg.test(str)) {
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});
//submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let success = document.getElementById("success");
  if (validEmail && validName && validPhone && validCar) {
    success.innerText = "Success!!!!Form submitted";
    success.classList.add("alert-success");
    success.classList.add("show");
    let form = document.getElementById("form");
    form.reset();
  } else {
    success.innerText = "Danger!!Form not submitted";
    success.classList.add("alert-danger");
    success.classList.add("show");
  }
  setTimeout(function () {
    success.classList.remove("show");
    success.classList.remove("alert-success");
    success.classList.remove("alert-danger");
  }, 5000);
});
