function getSearchData(event) {
    event.preventDefault();
    const inputValue = document.getElementById('searchText').value;
    fetch(`/api/${inputValue}`) 
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const card = document.getElementById("searchCard"); 
            card.classList.remove("invisible")
            card.classList.add("visible")
            document.getElementById("tNumber").innerText = data.tNumber
            document.getElementById("address").innerText = data.address
            const city = data.city;
            const state = data.state;
            const postal = data.postal;
            const cSP = `${city}, ${state} ${postal}`;
            document.getElementById("cityStatePostalEl").innerText = cSP
            document.getElementById('newForm').reset();
        })
        .catch((error) => {
            console.error(error);
            alert('T-Number OR Address Not Found!');
            document.getElementById('errorCard')
        });
}

document.getElementById('searchBut').addEventListener('click', getSearchData)
