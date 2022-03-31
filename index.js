let cost = 0
const sendBtn = document.getElementById("btn-send-invoice")
const totalCost = document.getElementById("total-cost")
const servicesHtml = document.getElementById("services")
const noteInfo = document.getElementById("note-info")

const servicesArray = [
    washCarBtn = {
        id: "btn-wash-car",
        name: "Wash Car",
        cost: 10,
        isSelected: false
    },
    mowLawnBtn = {
        id: "btn-mow-lawn",
        name: "Mow Lawn",
        cost: 20,
        isSelected: false
    },
    pullWeedsBtn = {
        id: "btn-pull-weeds",
        name: "Pull Weeds",
        cost: 30,
        isSelected: false
    }
]

servicesArray.map(service => {

    let serviceBtn = document.getElementById(service.id)
    serviceBtn.addEventListener("click", e => {
        if(service.isSelected === false) {
            noteInfo.textContent = "We accept cash, credit card, or PayPal."
            servicesHtml.innerHTML += `
            <div class="flex service">
                <h2 class="service-name">${service.name}</h2>
                <p class="service-cost"><span class="light-accent">$</span>${service.cost}</p>
            </div>
        `
            updateCost(service)
            service.isSelected = true;
        }
    })
})

function updateCost(service) {
    cost += service.cost
    totalCost.textContent = "$" + cost 
}

sendBtn.addEventListener("click", function(){
    servicesHtml.innerHTML = ""
    noteInfo.textContent = ""
    cost = 0
    totalCost.textContent = "$" + cost
    servicesArray.map(service => {
        service.isSelected = false
    })
})