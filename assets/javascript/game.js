/* 
I know it isn't finished, this is the best I've gotten thus far. I'm going to keep on working on it to improve!



*/



//variables

var startGame = false;

var player1 = {};

var defender = {};


// objects


var lukeSkywalkerObj = {
    html: $(".col-sm-3.luke-skywalker"),
    name: "Luke Skywalker",
    enemy: false,
    defender: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    htmlValue: "luke-skywalker",
}

var hanSoloObj = {
    html: $(".col-sm-3.han-solo"),
    name: "Han Solo",
    enemy: false,
    defender: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    htmlValue: "han-solo",
}

var r2d2Obj = {
    html: $(".col-sm-3.r2-d2"),
    name: "R2-D2",
    enemy: false,
    defender: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    htmlValue: "r2-d2",
}

var bb8Obj = {
    html: $(".col-sm-3.bb-8"),
    name: "BB-8",
    enemy: false,
    defender: false,
    hp: 150,
    attackPower: 20,
    counterAttackPower: 5,
    htmlValue: "bb-8",
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
            character.enemy = true;
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

        objectArray.forEach(function (character) {
            if (character.htmlValue === htmlValue) {
                character.defender = true;

            }
        })

        $(".row.characters").off("click");
    })
};


function stopClick() {
    $(".row.characters").off("click");
}

function setOpponets() {

    $(".row.enemies").click(function () {

        objectArray.forEach(function (character) {
            console.log("These are the character", character);

            if (character.enemy === false) {
                player1 = character;
            }
        })

        console.log("Player 1", player1);

        objectArray.forEach(function (character) {
            console.log("These are the character", character);

            if (character.defender === true) {
                defender = character;
            }
        })

        console.log("defender", defender);
    });
}

//main compuation

$(document).ready(function () {



    $(".row.characters").click(function (event) {

        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var target = $(event.target).closest(".col-sm-3");
        var htmlValue = target.attr("value");

        console.log("target:", target);
        console.log("htmlVale", htmlValue);

        setBoard(target, htmlValue);

        setDefender();

        setOpponets();

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