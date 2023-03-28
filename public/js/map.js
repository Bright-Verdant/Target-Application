const tBuilding = require('../../models/tBuilding-model')



function setMapLocationFromModel(tBuilding) {
    var latitude = tBuilding.latitude;
    var longitude = tBuilding.longitude;
    var url = "https://www.google.com/maps/embed/v1/view?key=AIzaSyANd6KpHjMXllywPlZP7IqJa8sniudkR5w&center=" + latitude + "," + longitude + "&zoom=15&maptype=satellite";
    var iframe = document.getElementById("ifrm1");
    iframe.src = url;
    console.log(iframe);
  }

  
  setMapLocationFromModel();


  // const iframe = document.getElementById("ifrm1");
            // iframe.src = "https://www.google.com/maps/embed/v1/view?key=AIzaSyANd6KpHjMXllywPlZP7IqJa8sniudkR5w&center="`${needle}`;"&zoom=15&maptype=satellite";

            // function setMapLocation(latitude, longitude) {
            //     var url = "https://www.google.com/maps/embed/v1/view?key=AIzaSyANd6KpHjMXllywPlZP7IqJa8sniudkR5w&center=" + latitude + "," + longitude + "&zoom=15&maptype=satellite";
            //     var iframe = document.getElementById("ifrm1");
            //     iframe.src = url;
            //     console.log(iframe);
            //   }


            // function insertNeedle(needle) {
    //     var url = "https://www.google.com/maps/embed/v1/view?key=AIzaSyANd6KpHjMXllywPlZP7IqJa8sniudkR5w&center="`${needle}`;"&zoom=15&maptype=satellite";

    //     var iframe = document.getElementById("ifrm1");
    //     iframe.src = url;
    // }























//     const card = document.getElementById("searchCard");
// const errorCardEl = document.getElementById('errorCard');

// function getSearchData(event) {
//     event.preventDefault();
//     const inputValue = document.getElementById('searchText').value;
//     fetch(`/api/${inputValue}`)
//         .then((response) => response.json())
//         .then((data) => {
//             deleteError();
//             console.log(data);
//             card.classList.remove("invisible");
//             card.classList.add("visible");
//             document.getElementById("tNumber").innerText = data.tNumber;
//             document.getElementById("address").innerText = data.address;
//             const city = data.city;
//             const state = data.state;
//             const postal = data.postal;

//             const latitude = data.latitude.toFixed(4);
//             const longitude = data.longitude.toFixed(4);


//             const needle = `${latitude}, ${longitude}`;
//             console.log(needle);

//             const cSP = `${city}, ${state} ${postal}`;
//             document.getElementById("cityStatePostalEl").innerText = cSP;
//             document.getElementById('newForm').reset();
//             showDetails();


//             const map = document.createElement('iframe');
//             map.id = 'map';
//             map.width = '100%';
//             map.height = '500';
//             map.src = `https://maps.google.com/maps?q=${needle}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

//             const mapContainer = document.getElementById('mapContainer');
//             mapContainer.appendChild(map);



//         })
//         .catch(() => {
//             errorCardEl.classList.remove("hidden");
//             errorCardEl.classList.add("visible");
//             showError();
//             appearCard();
//         });
// }

// function deleteError() {
//     document.querySelector("#errorCard").style.display = 'none';
// }

// function appearCard() {
//     document.querySelector("#searchCard").style.display = 'none';
// }

// function showError() {
//     document.querySelector("#errorCard").style.display = 'block';
//     document.getElementById('newForm').reset();
// }

// function showDetails() {
//     document.querySelector("#searchCard").style.display = 'block';
// }

// document.getElementById('searchBut').addEventListener('click', getSearchData)


// document.getElementById('closeError').addEventListener("click", function () {
//     document.querySelector("#errorCard").style.display = 'none';
// });

