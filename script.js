// take a empty array for thrivingList and strugglingList--
let thrivingList = [];
let strugglingList = [];


// so catch the every counts first--
let totalCount = document.getElementById("total-count")
let thrivingCount = document.getElementById("thriving-count")
let strugglingCount = document.getElementById("struggling-count")
// console.log(totalCount, thrivingCount, strugglingCount);

// catch allCards
const allCards = document.getElementById("all-cards")
let mainContainer = document.querySelector("#main-container")
console.log(mainContainer);

// catch filter buttons here
const allFilterbtn = document.getElementById("all-filter-button")
const thrivingFilterBtn = document.getElementById("thriving-filter-button")
const strugglingFilterBtn = document.getElementById("struggling-filter-button")

// catch filteredSection
const filteredSection = document.getElementById("filtered-section")



// step-1 first update the counts ----
// calculate count function
function calculateCount(){
    totalCount.innerText = allCards.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}
calculateCount()


// step-2 toggle color
// toggleStyle Function
function toggleStyle(id){
    allFilterbtn.classList.remove('bg-black', 'text-white')
    thrivingFilterBtn.classList.remove('bg-black', 'text-white')
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')

    allFilterbtn.classList.add('bg-gray-400')
    thrivingFilterBtn.classList.add('bg-gray-400')
    strugglingFilterBtn.classList.add('bg-gray-400')

    // selected
    const selectedBtn = document.getElementById(id)
    selectedBtn.classList.remove('bg-gray-400')
    selectedBtn.classList.add('bg-black', 'text-white')

    // step-5 when selected hide and show filtered section
    if(id == "thriving-filter-button"){
        allCards.classList.add("hidden")
        filteredSection.classList.remove("hidden")
        // createThrivingRender()
    }
    else if(id == "all-filter-button"){
        filteredSection.classList.add("hidden")
        allCards.classList.remove("hidden")
    }
    else if(id == "struggling-filter-button"){
        filteredSection.classList.remove("hidden")
        allCards.classList.add("hidden")
        // createStrugglingRender()
    }
}


// step-3 catch the inner thrive and struggling btn and catch that event with delegation
mainContainer.addEventListener("click", function(event){

    if(event.target.classList.contains('thriving-btn')){
        // get the parentNode of the event
    const parentNodeCard = event.target.parentNode;
    // take what you need from parentNode card
    const plantName = parentNodeCard.querySelector(".plant-name").innerText;
    const lathinName = parentNodeCard.querySelector(".lathin-name").innerText;
    const light = parentNodeCard.querySelector(".light").innerText;
    const water = parentNodeCard.querySelector(".water").innerText;
    const status = parentNodeCard.querySelector(".status").innerText;
    const note = parentNodeCard.querySelector(".note").innerText;

    // make object now
    const cardInfo = {
        plantName : plantName,
        lathinName: lathinName, 
        light: lathinName, 
        water: water, 
        status: status,
        note: note,
    }
    // now push this object to the thrivingList array- but first check if already exist that items or not in that array
    const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName)
    // validate
    if(!plantExist){
        thrivingList.push(cardInfo)
        calculateCount()
    }
    else{
        alert("sorry alredy exist")
    }
    createThrivingRender()

    }
    else if(event.target.classList.contains('struggling-btn')){
        // get the parentNode of the event
    const parentNodeCard = event.target.parentNode;
    // take what you need from parentNode card
    const plantName = parentNodeCard.querySelector(".plant-name").innerText;
    const lathinName = parentNodeCard.querySelector(".lathin-name").innerText;
    const light = parentNodeCard.querySelector(".light").innerText;
    const water = parentNodeCard.querySelector(".water").innerText;
    const status = parentNodeCard.querySelector(".status").innerText;
    const note = parentNodeCard.querySelector(".note").innerText;

    // make object now
    const cardInfo = {
        plantName : plantName,
        lathinName: lathinName, 
        light: lathinName, 
        water: water, 
        status: status,
        note: note,
    }
    // now push this object to the thrivingList array- but first check if already exist that items or not in that array
    const plantExist = strugglingList.find(item => item.plantName == cardInfo.plantName)
    // validate
    if(!plantExist){
        strugglingList.push(cardInfo)
        calculateCount()
    }
    else{
        alert("sorry alredy exist")
    }
    // render struggling
    createStrugglingRender()
    }
})


// step-4 html file create render for keeping the cards in the filtered section
function createThrivingRender(){
    filteredSection.innerHTML = "";
    for(let thrive of thrivingList){
        console.log(thrive);
        let card = document.createElement("div")
        card.className = "bg-orange-200"
        card.innerHTML = ` <div class="plant-card border-2 border-gray-400 p-8 rounded-md">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="plant-name font-bold text-xl">${thrive.plantName}</h4>
                <p class="lathin-name text-gray-400">Latine Name-1</p>
                </div>
                <button class="bg-red-300 text-red-700 px-4 py-2 rounded-lg">Delete</button>
            </div>

            <!-- bright -->
             <div class="flex items-center gap-5 my-4">
                <div class="light bg-gray-400 px-4 w-[150px] text-gray-700 rounded-md">Bright Indicate</div>
                <div class="water bg-gray-400 px-4 w-[150px] text-gray-700 rounded-md">Weekly</div>
             </div>

             <!-- no applicable -->
             <div>
                <div class="status border border-gray-400 px-4 w-[150px] text-gray-700 rounded-md">No Applicable</div>
             </div>

             <p class="note plant-description text-lg text-gray-400 my-5">New leaf unfurling by the east window</p>
             
             <!-- buttons -->
             <button class="border border-green-400 text-green-400 text-xl px-4 py-2 rounded-md">Thriving</button>
             <button class="border border-red-400 text-red-400 text-xl px-4 py-2 rounded-md ml-5">Struggling</button>
            </div> 
        `

        // append child the div tho the filteredSection
    filteredSection.appendChild(card)
    }

    
}

// html file create render for keeping the cards in the filtered section for the struggling
function createStrugglingRender(){
    filteredSection.innerHTML = "";
    for(let struggle of strugglingList){
        console.log(struggle);
        let card = document.createElement("div")
        card.className = "bg-red-300"
        card.innerHTML = ` <div class="plant-card border-2 border-gray-400 p-8 rounded-md">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="plant-name font-bold text-xl">${struggle.plantName}</h4>
                <p class="lathin-name text-gray-400">Latine Name-1</p>
                </div>
                <button class="bg-red-300 text-red-700 px-4 py-2 rounded-lg">Delete</button>
            </div>

            <!-- bright -->
             <div class="flex items-center gap-5 my-4">
                <div class="light bg-gray-400 px-4 w-[150px] text-gray-700 rounded-md">Bright Indicate</div>
                <div class="water bg-gray-400 px-4 w-[150px] text-gray-700 rounded-md">Weekly</div>
             </div>

             <!-- no applicable -->
             <div>
                <div class="status border border-gray-400 px-4 w-[150px] text-gray-700 rounded-md">No Applicable</div>
             </div>

             <p class="note plant-description text-lg text-gray-400 my-5">New leaf unfurling by the east window</p>
             
             <!-- buttons -->
             <button class="border border-green-400 text-green-400 text-xl px-4 py-2 rounded-md">Thriving</button>
             <button class="border border-red-400 text-red-400 text-xl px-4 py-2 rounded-md ml-5">Struggling</button>
            </div> 
        `

        // append child the div tho the filteredSection
    filteredSection.appendChild(card)
    }

    
}