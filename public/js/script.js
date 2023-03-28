const card = document.getElementById("searchCard");
const errorCardEl = document.getElementById('errorCard');
    
    async function getSearchData(event) {
        event.preventDefault();
        const inputValue = document.getElementById('searchText').value;
        try {
            const response = await fetch(`/api/${inputValue}`);
            const data = await response.json();
            deleteError();
            console.log(data);
            card.classList.remove("invisible");
            card.classList.add("visible");
            document.getElementById("tNumber").innerText = data.tNumber;
            document.getElementById("address").innerText = data.address;
            const city = data.city;
            const state = data.state;
            const postal = data.postal;
            const latitude = data.latitude.toFixed(4);
            const longitude = data.longitude.toFixed(4);
    
            const needle = `${latitude}, ${longitude}`;
            console.log(needle);
    
            const cSP = `${city}, ${state} ${postal}`;
            document.getElementById("cityStatePostalEl").innerText = cSP;
            document.getElementById('newForm').reset();
            showDetails();

            // map code
            const mapContainer = document.getElementById('mapContainer');

            const existingMap = mapContainer.querySelector('iframe');
            if (existingMap) {
            mapContainer.removeChild(existingMap);
            }

            const map = document.createElement('iframe');
            map.id = 'map';
            map.width = '400';
            map.height = '400';
            map.frameborder = '0';
            map.style.border = '0';
            map.referrerpolicy = 'no-referrer-when-downgrade';
            map.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyANd6KpHjMXllywPlZP7IqJa8sniudkR5w&center=${needle}&zoom=15&maptype=satellite`;
            map.allowfullscreen = true;
            mapContainer.appendChild(map);
    // end map code
    
        } catch (error) {
            errorCardEl.classList.remove("hidden");
            errorCardEl.classList.add("visible");
            showError();
            appearCard();
        }
    }
    
    function deleteError() {
        document.querySelector("#errorCard").style.display = 'none';
    }
    
    function appearCard() {
        document.querySelector("#searchCard").style.display = 'none';
    }
    
    function showError() {
        document.querySelector("#errorCard").style.display = 'block';
        document.getElementById('newForm').reset();
    }
    
    function showDetails() {
        document.querySelector("#searchCard").style.display = 'block';
    }
    
    document.getElementById('searchBut').addEventListener('click', getSearchData)
    
    document.getElementById('closeError').addEventListener("click", function () {
        document.querySelector("#errorCard").style.display = 'none';
    });