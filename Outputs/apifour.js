window.onload = function () {
  HashedPassButton = document.getElementById("HPB");

  HashedPassButton.addEventListener("click", function () {
    let string = prompt("Please enter a password...");
    if (string != null) {
      fetchAPI4 = fetch(
        `http://localhost/SEF/API4.php/?string=${string}`
      )
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => {
          if(data.boolean == "True"){
          document.getElementById("content").innerHTML = "";
          let answer = document.createElement("h2");
          answer.textContent = "Hashed Password:";
          document.getElementById("content").appendChild(answer);
          let p = document.createElement("p");
          p.textContent = data.password;
          document.getElementById("content").appendChild(p);
          }
          else{
            alert("PASSWORD TOO WEAK!!");
          }
        });
    }
  });

};
