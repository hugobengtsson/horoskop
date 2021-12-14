
async function initSite(){

    eventListeners();
    //setHoroscope();
};


async function setHoroscope(month, date){

    console.log(month + " " + date);

    let url = "/api/addHoroscope.php?month=" + month + "&date=" + date;

    let GET = await makeRequest(url, {method: "GET"});

    console.log(GET);

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

        let select = document.querySelector("#selectDays");

        select.innerText = "";

        let optionText = document.createElement("option");
        optionText.innerText = "Månad måste väljas"

        select.append(optionText)

    } else {
        renderDays("30");
    }

}

function renderDays(days){

    let select = document.querySelector("#selectDays");

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

function selectedDate(event){

    event.preventDefault();

    let selectedMonth = document.querySelector("#selectMonth").value;
    let selectedDays = document.querySelector("#selectDays").value;

    setHoroscope(selectedMonth, selectedDays);

}


function eventListeners(){

    document.querySelector("#selectMonth").addEventListener("change", function(){

        checkMonth(selectMonth.value);

    });

    document.querySelector("#sumbitDate").addEventListener("submit", function(event){

        selectedDate(event);

    })


};

window.addEventListener("load", initSite);