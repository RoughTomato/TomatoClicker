var bonusArray = new Array();

function generateBonusButtons() {
    var arr = parseBonuses();
    var training = document.createElement('button');
    training.setAttribute('title', arr[0].desc);
    training.setAttribute('class', 'bonus');
    training.setAttribute('id', 'bonus'+ arr[0].key);
    training.setAttribute('onclick', 'bonus'+ arr[0].key + "()");
    training.innerText = "["+ arr[0].level +"] "+ 
    arr[0].name + " cost : " + arr[0].nextPrice();
    $('body').append(training);

}

function bonus0() {
    if(score >= bonusArray[0].nextPrice()) {
       addScore(-(bonusArray[0].nextPrice()));
       console.log(clickWorth);
       clickWorth = clickWorth + parseInt(bonusArray[0].value);
       console.log(clickWorth);
       bonusArray[0].level += 1;
       document.getElementsByClassName('bonus')[0].innerText = "["+ bonusArray[0].level +"] "+ 
       bonusArray[0].name + " cost : " + bonusArray[0].nextPrice();

       console.log("["+ bonusArray[0].level +"] "+ 
       bonusArray[0].name + " cost : " + bonusArray[0].nextPrice());
    }
}

function parseBonuses() {
    var bonusesArr = JSON.parse(bonuses);
    for(i = 0; i < bonusesArr.length; i++) {
        bonusArray[i] = new bonus(i,bonusesArr[i].name,
            bonusesArr[i].desc, bonusesArr[i].value, bonusesArr[i].price, 0);
    }
    return bonusArray;
}

function bonus(key,name,desc,value,price,level){
    this.key = key,
    this.name = name,
    this.desc = desc,
    this.value = value,
    this.price = price,
    this.level = level,

    this.nextValue = function() {
        return this.value * this.level;
    },

    this.nextPrice = function() {
        return (this.price * (this.level+1));
    }
}

var bonuses = `[{
    "name": "Harvester Training",
    "desc": "Train yourself to harvest more tomatos with each click!",
    "value": "1",
    "price": "100"
},
{
    "name": "Hired Help",
    "desc": "You hired someone to help you with harvesting!",
    "value": "0.02",
    "price": "1000"
},
{
    "name": "Trained Help",
    "desc": "You hired someone with good qualifications to help you with harvesting!",
    "value": "0.2",
    "price": "5000"
},
{
    "name": "Harvester",
    "desc": "Harvester to help gather more of these tomatoes!",
    "value": "0.8",
    "price": "25000"
},
{
    "name": "Turbo Harvester",
    "desc": "Harvester to help gather more of these tomatoes!",
    "value": "1.5",
    "price": "120000"
}]`;