document.addEventListener('DOMContentLoaded', function () {
    // code here will execute after the document is loaded 
fetch("https://www.anapioficeandfire.com/api/houses/?pageSize=50") 
    .then(response => response.json())
    .then(houses => {
        accordion(houses)
    } )
});

function accordion(houses) {
    const houseArray = houses.map(function(currentHouse, index){
        // console.log(currentHouse)
        return `<div class="accordion-item">
        <h2 class="accordion-header" id="flush-heading${index + 1}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapse${index + 1}" aria-expanded="false" aria-controls="flush-collapse${index + 1}" id="myAccordion">
                ${currentHouse.name}
            </button>
        </h2>
        <div id="flush-collapse${index + 1}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index + 1}"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body" id="accordionBody">Region: ${currentHouse.region}
            <br>
            Words: ${currentHouse.words}
            <br>
            Coat of Arms: ${currentHouse.coatOfArms}</div>
        </div>
    </div>`
    }).join(' ')
    // console.log(houseArray)
    const accordionStart = document.querySelector("#accordionFlushExample")
    accordionStart.innerHTML = houseArray
}