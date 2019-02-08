var score;
var clickWorth = 1;
var automatedClickRate = 0.2;
var rate = 1000;
var updateTimer;
var autoSave;

(function() {
    updateTimer = setInterval(onUpdate, rate);
    autoSave = setInterval(saveCookie, 900000);
})();

window.onload = function() {
    getCookie();
    changeTitle();
};

function getCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(',');
    addScore(ca[0].split('=')[1]);
    clickWorth = ca[1];
    automatedClickRate = ca[2];
    rate = ca[3];
    console.log(score + ";" + clickWorth + ";" + automatedClickRate + ";" + rate + ";")
}

function saveCookie() {
  var d = new Date();
  d.setTime(d.getTime() + (5*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "tomatoclicker=" + score + "," + clickWorth + ","
                    + automatedClickRate + "," + rate + "," + expires + ";";
}

function changeTitle() {
    let cf = JSON.parse(CLICKER_CONFIG);
    document.title = cf.name + " ver." + cf.version;
}

function clickFunction() {
    score = bigInt(score).add(clickWorth);
    document.getElementById("clicks").innerText = score.toString();
    saveCookie();//parseBonuses();
}

function onUpdate() {
    if(automatedClickRate != 0){
        addIntervalRate();
        clearInterval(updateTimer);
        updateTimer = setInterval(onUpdate, rate);
    }
}

function addScore(value) {
    score = bigInt(score).add(value);
    document.getElementById("clicks").innerText = score.toString();
}

function addIntervalRate() {
    rate = 1000 / automatedClickRate;
    addScore(1);
}