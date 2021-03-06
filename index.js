// Info Touch
function touchInfo(evt) {
    evt.preventDefault();
    evt.target.children[2].style['visibility'] = 'visible';
}
function closeInfo() {
    var info = document.getElementsByClassName("info");
    for (var i = 0; i < info.length; i++) {
        if ( item(i).style['visibility'] === 'visible' )
            info.item(i).style['visibility'] = 'hidden';
    }
}
// document.addEventListener('scroll', function(e) {
//     closeInfo();
// });

// Chart
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ 'UberEats', 'FoodPanda', '線上點餐', '愛點餐飲', '其他平台' ],
        datasets: [{
            data: [20000, 15000, 50000, 10000, 5000],
            backgroundColor: [ '#ED5565', '#FFCE54', '#A0D468', '#5D9CEC', '#AC92EC' ],
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