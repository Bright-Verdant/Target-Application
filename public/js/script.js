const card = document.getElementById("searchCard");
const errorCardEl = document.getElementById('errorCard');

function getSearchData(event) {
    event.preventDefault();
    const inputValue = document.getElementById('searchText').value;
    fetch(`/api/${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
            deleteError();
            console.log(data);
            card.classList.remove("invisible");
            card.classList.add("visible");
            document.getElementById("tNumber").innerText = data.tNumber;
            document.getElementById("address").innerText = data.address;
            const city = data.city;
            const state = data.state;
            const postal = data.postal;
            const cSP = `${city}, ${state} ${postal}`;
            document.getElementById("cityStatePostalEl").innerText = cSP;
            document.getElementById('newForm').reset();
            showDetails();
        })
        .catch(() => {
            errorCardEl.classList.remove("hidden");
            errorCardEl.classList.add("visible");
            showError();
            appearCard();
        });
}


 ${lat}, ${l}at}
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

