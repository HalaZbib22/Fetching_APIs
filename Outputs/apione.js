window.onload = function () {
  MathButton = document.getElementById("MB");

  MathButton.addEventListener("click", function () {
    let x = prompt("Please enter a number, x= ",10);
    let y = prompt("Please enter a number, y= ",6);
    while (!/^[0-9]+$/.test(x) || !/^[0-9]+$/.test(y) ) {
      alert("You did not enter a number!");
      x = prompt("Please enter a number, x= ",10);
      y = prompt("Please enter a number, y= ",6);
  }
    if (x != null && y != null) {
      MathButton.classList.add("hidden");
      fetchAPI1 = fetch(`/SEF/API1.php?x=${x}&y=${y}`)
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => {
          document.getElementById("content").innerHTML = "";
          let answer = document.createElement("h2");
          answer.textContent = data.result;
          document.getElementById("content").appendChild(answer);
          let p = document.createElement("p");
          p.textContent = `=> 2 * ${x} + ${y} % 2`;
          document.getElementById("content").appendChild(p);
        });
    }
  });

};