/* 
Standardized names as following: luke-sykwalker han-solo r2-d2 bb-8

*/



//variables

var startGame = false;


// objects


var lukeSkywalkerObj = {
    html: $(".col-sm-3.luke-skywalker"),
    name: "Luke Skywalker",
    enemy: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    attack: function () {
        console.log(this.attackPower);
    },
    htmlValue: "luke-skywalker",
    htmlString: '<div class="col-sm-3"> \
        <div class="card luke-skywalker" value = "luke-skywalker">\
            <img class="card-img-top" src="/assets/images/luke-skywalker.jpg"  alt="Luke Sykwalker">\
            <h5 class="card-title">Luke Skywalker</h5>\
            <div class="card-body">\
                150\
            </div>\
        </div>\
    </div>',
}

var hanSoloObj = {
    html: $(".col-sm-3.han-solo"),
    name: "Han Solo",
    enemy: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    attack: function () {
        console.log(this.attackPower);
    },
    htmlValue: "han-solo",
    htmlString: '<div class="col-sm-3">\
         <div class="card han-solo" value = "han-solo">\
            <img class="card-img-top" src="/assets/images/han-solo.jpg" alt="Han Solo">\
            <h5 class="card-title">Han Solo</h5>\
            <div class="card-body">\
                150\
            </div>\
        </div>\
    </div>'
}

var r2d2Obj = {
    html: $(".col-sm-3.r2-d2"),
    name: "R2-D2",
    enemy: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    attack: function () {
        console.log(this.attackPower);
    },
    htmlValue: "r2-d2",
    htmlString: '<div class="col-sm-3">\
        <div class="card r2-d2" value = "r2-d2">\
            <img class="card-img-top" src="/assets/images/r2-d2.jpg" alt="R2-D2">\
            <h5 class="card-title">R2-D2</h5>\
            <div class="card-body">\
                150\
            </div>\
        </div>\
    </div>'
}

var bb8Obj = {
    html: $(".col-sm-3.bb-8"),
    name: "BB-8",
    enemy: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    attack: function () {
        console.log(this.attackPower);
    },
    htmlValue: "bb-8",
    htmlString: '<div class="col-sm-3">\
        <div class="card bb-8"value = "bb-8">\
            <img class="card-img-top" src="/assets/images/bb-8.jpg" alt="BB-8">\
            <h5 class="card-title">BB-8</h5>\
            <div class="card-body">\
                150\
            </div>\
        </div>\
    </div>'
}


var objectArray = [lukeSkywalkerObj, hanSoloObj, r2d2Obj, bb8Obj];






//functions

function setBoard(target, htmlValue) {

    $(".row.your-character").empty();
    $(".row.your-character").append(target.clone());

    $(".row.enemies").empty();
    resetEnemies();

    objectArray.forEach(function (character) {

        //console.log(" the characters value", character);

        if (character.htmlValue !== htmlValue) {
            $(".row.enemies").append(character.html.clone());
        }
        //console.log("character", character);
    }) 
}


function resetEnemies() {
    objectArray.forEach(function (character) {
        character.enemy = false;
    })
}

function setDefender() {
    $(".row.enemies").click(function (event) {

        var target = $(event.target).closest(".col-sm-3");
        var htmlValue = target.attr("value");

        $(".row.defender").empty();
        $(".row.defender").append(target.clone());

        $(".row.characters").off("click");       
    })
};




////////This is where you left off!

function stopClick() {
    $(".row.characters").off("click");
}


function fight (){
    $(".fight").click(function(){

        


    });
}

//main compuation

$(document).ready(function () {



    $(".row.characters").click(function (event) {

        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var target = $(event.target).closest(".col-sm-3");
        var htmlValue = target.attr("value");

        /* resetEnemies();
        $(".row.enemies").empty(); */






        //target debugging

        console.log("target:", target);
        console.log("htmlVale", htmlValue);

        setBoard(target, htmlValue);

        setDefender();

        fight();

        /*    //obj debugging
        console.log("----------------------");
        console.log("This is the luke object", lukeSkywalkerObj);
        console.log("This is the jQuery luke object", $(".card.luke-skywalker"))
        console.log("----------------------");
        console.log("This is the Han object", hanSoloObj);
        console.log("This is the jQuery Han object", $(".card.han-solo"))
        console.log("----------------------");
        console.log("This is the R2-D2 object", r2d2Obj);
        console.log("This is the jQuery R2-D2 object", $(".card.r2-d2"))
        console.log("----------------------");
        console.log("This is the BB-8 object", bb8Obj);
        console.log("This is the jQuery BB-8 object", $(".card.bb-8"))
        console.log("----------------------"); 

*/



    });
});