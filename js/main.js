var score;
var clickWorth = 1;

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
