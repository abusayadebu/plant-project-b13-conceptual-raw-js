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
}
