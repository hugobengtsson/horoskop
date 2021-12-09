
async function initSite(){

    eventListeners();

};


async function loadHoroscope(){




}


async function makeRequest(url, option){

    try {
        let response = await fetch(url, option);
        let result = response.json();
        return result;
    } catch(err) {
        console.error(err);
    }


}



function checkMonth(month){

    if (month === "Januari" || month === "Mars" || month === "Maj" || month === "Juli" || month === "Augusti" || month === "Oktober" || month === "December"){
        renderDays("31");
    } else if (month === "Februari"){
        renderDays("29");
    } else if (month === ""){
        
        let select = document.querySelector("#select");

        select.innerHTML = "";

        let optionText = document.createElement("option");
        optionText.innerText = "Månad måste väljas"

        select.append(optionText)

    } else {
        renderDays("30");
    }

}

function renderDays(days){

    let select = document.querySelector("#select");

    select.innerHTML = "";

    let optionText = document.createElement("option");
    optionText.innerText = "Välj datum"

    select.append(optionText)

    for(i=1; i<=days; i++){

        let option = document.createElement("option");

        option.innerText = i;

        select.append(option);

    }

}


function eventListeners(){

    let selectMonth = document.querySelector("#selectMonth");

    selectMonth.addEventListener("change", function(){

        checkMonth(selectMonth.value);

    });

};

window.addEventListener("load", initSite);