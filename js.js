"use strict"

var counter = 0;
var key = "";
document.querySelector("#submitform").addEventListener("submit", getrecipe);

function getrecipe(event) {
  const submit = document.querySelector(".submit").value;
  fetch('https://cors-anywhere.herokuapp.com/https://datafied.api.edgar-online.com/v2/corefinancials/ann?primarysymbols=msft&sortby=periodenddate&appkey=f9c4cfa7f15905cb571ae1d8093f05ee
  ')
    .then(response => {
      if (response.status != 200) {
        document.getElementById("recipeList").innerHTML = "NO RESULTS";

        console.log("Error");
        throw error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then(data => {
      if (data.results.length == 0) {
        //tell the user no response
        //use innerHTML to tell the user no response
        console.log("NO RESULTS");
      } else {
        createRecipeCard(data);
      }
      console.log(data);
    })
    .catch(err => console.log(err));
  event.preventDefault();
}
console.log(getrecipe());