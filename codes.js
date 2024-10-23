"use strict";

// selction of elements

const button = document.querySelector(".submit");
const textArea = document.querySelector("#text--box");
const selectElement = document.getElementById("count--selects");
const totalCount = document.querySelector(".counter--result");

const validateOptions = function (selectHtmlElement) {
  let userInput = textArea.value;
  let regex;
  if (textArea.value === "" && selectHtmlElement.selectedIndex === 0) {
    alert("oops😔! It seems like you forgot to add some text.");
  }
  //i am using a parameter for  the select
  //we need validate or verify what we select
  if (selectHtmlElement.selectedIndex === 2) {
    //condition for words outputs
    if (userInput === "") {
      //incase we choose to count words and there is nothing in the box give us the below prompt
      alert("oops😔! It seems like you forgot to add some text.");
    } else {
      regex = /[^\s]/gi; // Here i am extracting my character
      // console.log(userInput.match(regex));
      let charLength = userInput.match(regex).join("").length;
      /* check if the regex matched with the user input if yes wejoin and look for the length straight ahead */
      totalCount.style.color = "hsla(29, 79%, 63%, 1)";
      return (totalCount.textContent = `Total Character Count:${charLength}`);
    }
  } else if (selectHtmlElement.selectedIndex === 1) {
    //condition for characters outputs
    if (userInput === "") {
      //incase we choose to count words and there is nothing in the box give us the below prompt
      alert("oops😔! It seems like you forgot to add some text.");
    } else {
      regex = /\w+/gi;
      //   console.log(userInput.match(regex));
      let wordsLength = userInput.match(regex).length;
      totalCount.style.color = "hsla(29, 79%, 63%, 1)";
      return (totalCount.textContent = `Total Word Count:${wordsLength}`);
    }
  } else if (selectHtmlElement.selectedIndex === 0 && textArea.value !== "") {
        totalCount.style.color = "hsla(29, 79%, 90%, 1)";
    totalCount.textContent = "No Action Selected";
    alert("You choose the wrong option 😊");
  }
};

button.addEventListener("click", () => {
  validateOptions(selectElement);
});

addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "enter") {
    validateOptions(selectElement);
  }
});
