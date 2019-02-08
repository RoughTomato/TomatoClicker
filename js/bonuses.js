
var bonusArray;

function parseBonuses() {
    var bonusesArr = JSON.parse(bonuses);
    bonusesArr.forEach(function(index,value){
        console.log(index + ":" + value);
    });
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
        return this.price * this.level;
    }
}

var bonuses = `[{
        'name':'Harvester Training',
        'desc':'Train yourself to harvest more tomatos with each click!',
        'value':'1'
        'price':'100'
    },
    'hiredHelp':{
        'name':'Hired Help',
        'desc':'You hired someone to help you with harvesting!',
        'value':'0.02'
        'price':'1000'
    },
    'trainedHelp':{
        'name':'Trained Help',
        'desc':'You hired someone with good qualifications to help you with harvesting!',
        'value':'0.2'
        'price':'5000'       
    },
    'harvester':{
        'name':'Harvester',
        'desc':'Harvester to help gather more of these tomatoes!',
        'value':'0.8',
        'price':'25000'
    },
    'turboHarvester':{
        'name':'Turbo Harvester',
        'desc':'Harvester to help gather more of these tomatoes!',
        'value':'1.5',
        'price':'120000'  
    },
}]`;