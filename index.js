// Page loads
function startup() {
    var el = document.getElementById("infoButton");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
}

// 
function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    var el = document.getElementById("infoCard");
    el.style.visibility = 'visible';
}

// Chart
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ 'UberEats', 'FoodPanda', '線上點餐', '其他平台' ],
        datasets: [{
            data: [20000, 15000, 50000, 5000],
            backgroundColor: [ '#ED5565', '#FFCE54', '#A0D468', '#5D9CEC' ],
            borderColor: '#F2F1F6'
        }]
    }
});

// All Popup (Click outside popup close)
window.onclick = function(event) {
    if (event.target == popTime) {
        popTime.style.display = "none";
    }
}

// Popup (Time)
var popTime    = document.getElementById("popTime");
var buttonTime = document.getElementById("buttonTime");
var close       = popTime.getElementsByClassName("close")[0];
var submit      = popTime.getElementsByClassName("submit")[0];
var cancel      = popTime.getElementsByClassName("cancel")[0];
buttonTime.onclick = function() { popTime.style.display = "flex"; }
close.onclick       = function() { popTime.style.display = "none"; }
submit.onclick      = function() { popTime.style.display = "none"; }
cancel.onclick      = function() { popTime.style.display = "none"; }