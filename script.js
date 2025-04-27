// Function to find place from pin code
function findPlace() {
  let pin = document.getElementById("pinInput").value;
  if(pin.trim() === "") {
    document.getElementById("placeResult").innerText = "Please enter a PIN code.";
    return;
  }

  fetch(`https://api.postalpincode.in/pincode/${pin}`)
    .then(res => res.json())
    .then(data => {
      if (data[0].Status === "Success") {
        let info = data[0].PostOffice[0];
        document.getElementById("placeResult").innerText = `${info.Name}, ${info.District}, ${info.State}`;
      } else {
        document.getElementById("placeResult").innerText = "No place found for this PIN code.";
      }
    })
    .catch(error => {
      document.getElementById("placeResult").innerText = "Error fetching data. Please try again.";
    });
}

// Function to find pin code from place name
function findPin() {
  let place = document.getElementById("placeInput").value;
  if(place.trim() === "") {
    document.getElementById("pinResult").innerText = "Please enter a place name.";
    return;
  }

  fetch(`https://api.postalpincode.in/postoffice/${place}`)
    .then(res => res.json())
    .then(data => {
      if (data[0].Status === "Success") {
        let info = data[0].PostOffice[0];
        document.getElementById("pinResult").innerText = `${info.Pincode} (${info.Name}, ${info.District})`;
      } else {
        document.getElementById("pinResult").innerText = "No PIN code found for this place.";
      }
    })
    .catch(error => {
      document.getElementById("pinResult").innerText = "Error fetching data. Please try again.";
    });
}
