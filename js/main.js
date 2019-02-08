var score;
var clickWorth = 1;
var automatedClickRate = 0;
var rate = 1000;
var updateTimer;

(function(){
    updateTimer = setInterval(onUpdate, rate);
    console.log("event started");
})();

window.onload = function(){
    score = bigInt();
    changeTitle();
};

function changeTitle() {
    let cf = JSON.parse(CLICKER_CONFIG);
    document.title = cf.name + " ver." + cf.version;
}

function clickFunction() {
    score = bigInt(score).add(clickWorth);  
    document.getElementById("clicks").innerText = score.toString();
}

function onUpdate() {
    if(automatedClickRate != 0){
        addIntervalRate();
        clearInterval(updateTimer);
        updateTimer = setInterval(onUpdate, rate);
    }
}

function addIntervalRate() {
    rate = 1000 / automatedClickRate;
    score = bigInt(score).add(1);
    document.getElementById("clicks").innerText = score.toString();
}