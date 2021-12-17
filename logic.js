
async function initSite(){

    eventListeners();
    //setHoroscope();
    getHoroscope();
};

// API Logic:

async function getHoroscope(){

    let url = "/api/viewHoroscope.php";

    let GET = await makeRequest(url, {method: "GET"});

    if (GET === false){

        let horoscopeOutput = document.querySelector(".horoscopeOutput");
        horoscopeOutput.innerText = "";

    } else {

        let horoscopeOutput = document.querySelector(".horoscopeOutput");
        horoscopeOutput.innerText = "";

        let horoscopeHeader = document.createElement("h2");
        horoscopeHeader.innerText = GET[0];

        let horoscopeText = document.createElement("p");
        horoscopeText.innerText = GET[1];
    
        horoscopeOutput.append(horoscopeHeader, horoscopeText);
        console.log(GET)

    }

}

async function setHoroscope(month, date){

    let url = "/api/addHoroscope.php";

    let dateObj = {month, date};

    let body = new FormData();
    body.set("body", JSON.stringify(dateObj));

    let POST = await makeRequest(url, {method: "POST", body});

    if(POST == true){
        getHoroscope();
    } else {
        console.log("det finns redan sparat")
    }

}

async function updateHoroscope(month, date){

    let url = "/api/updateHoroscope.php";

    let dateObj = {month, date};

    let body = new FormData();
    body.set("body", JSON.stringify(dateObj));

    let POST = await makeRequest(url, {method: "POST", body});

    if(POST == true){
        getHoroscope();
    }

}

async function deleteHoroscope(){

    let url = "/api/deleteHoroscope.php";

    let DELETE = await makeRequest(url, {method: "DELETE"});

    if(DELETE == true){
        getHoroscope();
        console.log(DELETE)
    }

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

// Form logic:

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

function selectedDate(event, action){

    event.preventDefault();

    let selectedMonth = document.querySelector("#selectMonth").value;
    let selectedDays = document.querySelector("#selectDays").value;

    if (selectedMonth == "" || selectedMonth == "Välj månad" || selectedDays == "" || selectedDays == "Välj datum"){
        console.log("fel");
    } else if (action == "update"){
        updateHoroscope(selectedMonth, selectedDays);
    }
    else{
        setHoroscope(selectedMonth, selectedDays);
    }

}

// Eventlisteners:

function eventListeners(){

    document.querySelector("#selectMonth").addEventListener("change", function(){

        checkMonth(selectMonth.value);

    });

    document.querySelector("#sumbitDate").addEventListener("submit", function(event){

        selectedDate(event, "save");

    })

    document.querySelector("#updateHoroscope").addEventListener("click", function(event){

        selectedDate(event, "update");

    })

    document.querySelector("#deleteHoroscope").addEventListener("click", function(){

        deleteHoroscope();

    })

};

window.addEventListener("load", initSite);