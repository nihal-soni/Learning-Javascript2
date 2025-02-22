document
  .getElementById("userform")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    //  get user input 

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    //Displa input data
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    <h3>Submitted Data</h3> 
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ********</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>State:</strong> ${state}</p>
    <p><strong>Country:</strong> ${country}</p>

    `;

    resultDiv.style.display = "block";

  });
