window.onload = function () {
  PalindromeButton = document.getElementById("PB");

  PalindromeButton.addEventListener("click", function () {
    let string = prompt("Please enter a string to check...", "dad");
    if (string != null) {
      fetchAPI2 = fetch(
        `http://localhost/SEF/API2.php/?string=${string}`
      )
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => {
          document.getElementById("content").innerHTML = "";
          let answer = document.createElement("h2");
          answer.textContent = data.string + " is :";
          document.getElementById("content").appendChild(answer);
          let p = document.createElement("p");
          p.textContent = data.Is;
          document.getElementById("content").appendChild(p);
        });
    }
  });
};