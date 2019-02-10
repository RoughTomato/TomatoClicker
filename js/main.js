var score;
var clickWorth = 1;
var automatedClickRate = 0.0;
var rate = 1000;
var updateTimer;
var autoSave;
var mousePos;

(function() {
    document.onmousemove = handleMouseMove;
    updateTimer = setInterval(onUpdate, rate);
    autoSave = setInterval(saves.saveCookie, 900000);
})();

window.onload = function() {
    saves.getCookie();
    generateBonusButtons();
    changeTitle();
};

function changeTitle() {
    let cf = JSON.parse(CLICKER_CONFIG);
    document.title = cf.name + " ver." + cf.version;
}

var clicks = 0;

function clickAnimation() {
    createClickElement();
    $('#clickTomato'+clicks).css({ 
        "visibility":"visible",
        "top": mousePos.y-14 + "px",
        "left": mousePos.x-14 + "px",
        "width":"28px",
        "height":"28px",
    });
    $('#clickTomato'+clicks).fadeOut(800);
    setTimeout(deleteClickElement, 1000, "#clickTomato"+clicks);
    clicks++;
}

function createClickElement() {
    var newClick = document.createElement('div');
    newClick.setAttribute('class', 'tomatoClick');
    newClick.setAttribute('id', 'clickTomato'+clicks);
    $('body').append(newClick);
}

function deleteClickElement(id) {
    $(id).remove();
}

function clickFunction() {
    score = bigInt(score).add(clickWorth);
    document.getElementById("clicks").innerText = score.toString();
    clickAnimation();
    saves.saveCookie();
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


function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;
    event = event || window.event;

    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    mousePos = {
        x: event.pageX,
        y: event.pageY
    };
}

function addIntervalRate() {
    rate = 1000 / automatedClickRate;
    addScore(1);
}