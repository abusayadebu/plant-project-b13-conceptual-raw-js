// take a empty array for thrivingList and strugglingList--
let thrivingList = [];
let strugglingList = [];



// step-1 first update the counts ----

// so catch the every counts first--
let totalCount = document.getElementById("total-count")
let thrivingCount = document.getElementById("thriving-count")
let strugglingCount = document.getElementById("struggling-count")
// console.log(totalCount, thrivingCount, strugglingCount);

// catch allCards
const allCards = document.getElementById("all-cards")


// calculate count function
function calculateCount(){
    totalCount.innerText = allCards.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}

calculateCount()