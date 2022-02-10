window.onload = function () {
  SpacelessButton = document.getElementById("SB");

  SpacelessButton.addEventListener("click", function () {
    let string = prompt("Please enter a string to remove white spaces from...");
    if (string != null) {
      fetchAPI3 = fetch(
        `http://localhost/SEF/FourAPIs/API3.php/?string=${string}`
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((data) => {
          document.getElementById("content").innerHTML = "";
          let answer = document.createElement("h2");
          answer.textContent = data.after;
          document.getElementById("content").appendChild(answer);
          let p = document.createElement("p");
          p.textContent = `before: ${data.before}`;
          document.getElementById("content").appendChild(p);
        });
    };
  });
};
