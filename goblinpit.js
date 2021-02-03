/***********************************:
*Goblin Object Decs
*/
var schitter = {
    name: 'Schitter',
    alive:true,
    hp:100,
    fatigue: 100,
    conciousness: 100,
    morale: 100,
    battleAfflictions : {
        bleed: 5
    },
    strength:5,
    skill:6,
    deftness:6,
    toughness:5,
    grit:8,

    hitOpponent : function(attacker, defender){
        defender.hp = defender.hp - (attacker.strength - 
        defender.toughness/2);
        return defender.hp;
    },

    biteOpponent : function(attacker, defender){
        defender.hp = defender.hp - (attacker.strength - defender.toughness * .5);
        defender.morale -= 5;
        ++defender.battleAfflictions.bleed;
    },

    checkPulse : function(){
        if (this.hp <= 0){
            this.alive = false;
        }
    },

    checkBleed : function(){
        if(this.battleAfflictions.bleed > 0){
            this.hp = this.hp - this.battleAfflictions.bleed;
            bleedReport = this.name + ' has bled for ' + 
            this.battleAfflictions.bleed + ' damage!';
            return bleedReport;
        }
    } 
};

var loo = {
    name: 'Loo',
    alive:true,
    hp:100,
    fatigue: 100,
    conciousness: 100,
    morale: 100,
    battleAfflictions : {
        bleed:0
    },
    strength:7,
    skill:4,
    deftness:5,
    toughness:6,
    grit:8,

    hitOpponent : function(attacker, defender){
        defender.hp = defender.hp - (attacker.strength - 
        defender.toughness/2);
        return defender.hp;
    },

    biteOpponent : function(biter, bitee){
        bitee.hp = bitee.hp - (biter.strength - bitee.toughness * .5);
        bitee.morale -= 5;
        ++bitee.battleAfflictions.bleed;
    },

    checkPulse : function(){
        if (this.hp <= 0){
        this.alive = false;
        }
    },

    checkBleed : function(){
        if(this.battleAfflictions.bleed > 0){
            this.hp = this.hp - this.battleAfflictions.bleed;
            console.log(this.name + ' has bled for ' + 
            this.battleAfflictions.bleed + ' damage!');
        }
    } 
};


/*****************************
 * Var Decs
 */

var actionInputText= document.querySelector('actionInput text')
var actionInputButton = document.getElementById('inputButton')    
var combatReport = document.getElementById('combatReport')
var opponentOneStats = document.getElementById('opponentOneStats')
var opponentTwoStats = document.getElementById('opponentTwoStats')

/*****************
 * Function Decs
 */

const loopTurn = function(gobbo1, gobbo2){
    checkStats(gobbo1, gobbo2);
    reportStats(gobbo1);
    reportStats(gobbo2);
};

const checkStats = function(gobbo1, gobbo2){
    gobbo1.checkPulse();
    gobbo2.checkPulse();
    gobb1.checkBleed();
    gobbo2.checkBleed();
};

const reportStats = function(gobbo){

};

const reportCombat = function(reportString){ 
    combatReport.appendChild(document.createTextNode(reportString));
    combatReport.appendChild(document.createElement("br")); 
};

const displayCombatantOneStats = function(combatant){
    opponentOneStats.appendChild(document.createTextNode(combatant.name));
    opponentOneStats.appendChild(document.createElement("br"));
    opponentOneStats.appendChild(document.createTextNode('HP: ' + combatant.hp));
    opponentOneStats.appendChild(document.createElement("br"));
    opponentOneStats.appendChild(document.createTextNode('FAT: ' + combatant.fatigue));
    opponentOneStats.appendChild(document.createElement("br")); 
    opponentOneStats.appendChild(document.createTextNode('CONS: ' + combatant.conciousness));
    opponentOneStats.appendChild(document.createElement("br")); 
    opponentOneStats.appendChild(document.createTextNode('MOR: ' + combatant.morale));
    opponentOneStats.appendChild(document.createElement("br")); 
    opponentOneStats.appendChild(document.createTextNode('STR: ' + combatant.strength));
    opponentOneStats.appendChild(document.createElement("br")); 
    opponentOneStats.appendChild(document.createTextNode('SKL: ' + combatant.skill));
    opponentOneStats.appendChild(document.createElement("br")); 
    opponentOneStats.appendChild(document.createTextNode('DFT: ' + combatant.deftness));
    opponentOneStats.appendChild(document.createElement("br")); 
    opponentOneStats.appendChild(document.createTextNode('TGH: ' + combatant.toughness));
    opponentOneStats.appendChild(document.createElement("br")); 
    opponentOneStats.appendChild(document.createTextNode('GRT: ' + combatant.grit));
    opponentOneStats.appendChild(document.createElement("br")); 
}

const displayCombatantTwoStats = function(combatant){
    opponentTwoStats.appendChild(document.createTextNode(combatant.name));
    opponentTwoStats.appendChild(document.createElement("br"));
    opponentTwoStats.appendChild(document.createTextNode('HP: ' + combatant.hp));
    opponentTwoStats.appendChild(document.createElement("br"));
    opponentTwoStats.appendChild(document.createTextNode('FAT: ' + combatant.fatigue));
    opponentTwoStats.appendChild(document.createElement("br")); 
    opponentTwoStats.appendChild(document.createTextNode('CONS: ' + combatant.conciousness));
    opponentTwoStats.appendChild(document.createElement("br")); 
    opponentTwoStats.appendChild(document.createTextNode('MOR: ' + combatant.morale));
    opponentTwoStats.appendChild(document.createElement("br")); 
    opponentTwoStats.appendChild(document.createTextNode('STR: ' + combatant.strength));
    opponentTwoStats.appendChild(document.createElement("br")); 
    opponentTwoStats.appendChild(document.createTextNode('SKL: ' + combatant.skill));
    opponentTwoStats.appendChild(document.createElement("br")); 
    opponentTwoStats.appendChild(document.createTextNode('DFT: ' + combatant.deftness));
    opponentTwoStats.appendChild(document.createElement("br")); 
    opponentTwoStats.appendChild(document.createTextNode('TGH: ' + combatant.toughness));
    opponentTwoStats.appendChild(document.createElement("br")); 
    opponentTwoStats.appendChild(document.createTextNode('GRT: ' + combatant.grit));
    opponentTwoStats.appendChild(document.createElement("br")); 
}

/*********************
*Test Functions 
*/


/***********************
 * The Program
 */

displayCombatantOneStats(schitter);
displayCombatantTwoStats(loo);

actionInputButton.addEventListener('click', function(e){
    e.preventDefault();
    reportCombat(schitter.checkBleed());
});


/*******************
 * Old Code
 */


 /*
while (schitter.alive && loo.alive) {
    schitter.checkBleed();
    schitter.checkPulse();
    schitterAction = prompt("Does Schitter 'attack' or 'bite'?")
     if (schitterAction == 'attack') {
        console.log('Schitter attacks Loo');
        schitter.hitOpponent (schitter, loo);
        if (loo.alive == false){
            console.log('Loo is dead.')
            break;
        }
        console.log('Loo has ' + loo.hp + ' hp');
    } else if (schitterAction == 'bite') {
        console.log('Schitter bites Loo!');
        schitter.biteOpponent(schitter, loo);
        if (loo.alive == false){
            console.log('Loo is dead.')
            break;
        }
    } else {
        console.log('Schitter seems confused.');
    }


    loo.checkPulse();
    loo.checkBleed();
    console.log('Loo attacks Schitter');
    loo.hitOpponent (loo, schitter);
    if (schitter.alive == false){
        console.log('Schitter is dead.');
        break;
    } 
    
    console.log('Loo has ' + loo.hp + ' hp');
    console.log('Schitter has ' + schitter.hp + ' hp');


};

*/