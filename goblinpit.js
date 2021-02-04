/*********************************************************:
 * Class Declarations, Constructors, and Constructor Functions
 */

const goblinRandomizer = {
  
    idGen :  function (){
      return '_' + Math.random().toString(36).substr(2, 9);
      
    },
    
    nameGen : function (){
      let nameList = ['Doodle' , 'Scattacker' , 'Loo', 'Gramby' , 'Greasetown' , 'Linda' , 'Flung', 'Granglescoot III', 'Abe', 'Dung']  
      let randInteger = Math.floor(Math.random() * nameList.length);
      return nameList[randInteger];
      
    },
  
    hpGen : function (){
        let hpFloor = 50;
        let hpVariance = Math.floor(Math.random()*101)
        return hpFloor + hpVariance;
    },
    fatigueGen : function (){
      let fatigueFloor = 50;
      let fatigueVariance = Math.floor(Math.random()*101)
      return fatigueFloor + fatigueVariance;
    },
    consciousnessGen : function (){
      let consciousnessFloor = 50;
      let consciousnessVariance = Math.floor(Math.random()*101)
      return consciousnessFloor + consciousnessVariance;
    },
    moraleGen : function (){
      let moraleFloor = 50;
      let moraleVariance = Math.floor(Math.random()*101)
      return moraleFloor + moraleVariance;
    },  
    strGen : function (){
      let strFloor = 1;
      let strVariance = Math.floor(Math.random()*10)
      return strFloor + strVariance;
    },
    sklGen : function (){
      let sklFloor = 1;
      let sklVariance = Math.floor(Math.random()*10)
      return sklFloor + sklVariance;
    },
    defGen : function (){
      let defFloor = 1;
      let defVariance = Math.floor(Math.random()*10)
      return defFloor + defVariance;
    },
    gritGen : function (){
      let gritFloor = 1;
      let gritVariance = Math.floor(Math.random()*10)
      return gritFloor + gritVariance;
    },
    toughGen : function (){
      let toughFloor = 1;
      let toughVariance = Math.floor(Math.random()*10)
      return toughFloor + toughVariance;
    },
    
    
}
  
class goblin{
    constructor(id, name, hp, fatigue, consciousness, morale, strength, skill, deftness, toughness, grit){
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.fatigue = fatigue;
        this.consciousness = consciousness;
        this.morale = morale;
        this.strength = strength;
        this.skill = skill;
        this.deftness = deftness;
        this.toughness = toughness;
        this.grit = grit;

        this.checkPulse = function(){
        if (this.hp<=0){
        this.alive = false;        
        }
        console.log('It worked.');
        }
    
    
    }
}

const gobboSpawner = function(){
let newGobbo = new goblin(
    goblinRandomizer.idGen(),
    goblinRandomizer.nameGen(),
    goblinRandomizer.hpGen(),
    goblinRandomizer.fatigueGen(),
    goblinRandomizer.consciousnessGen(),
    goblinRandomizer.moraleGen(),
    goblinRandomizer.strGen(),
    goblinRandomizer.sklGen(),
    goblinRandomizer.defGen(),
    goblinRandomizer.toughGen(),
    goblinRandomizer.gritGen())
return newGobbo;
}
  
/****************************************
 * Combat Objects and Methods
 */

const combatCheck = {

    isHit : null,
    damage : null,

    getDamage : function(attacker , defender){
        let damageValue = (attacker.strength - defender.toughness/2)
        defender.hp = defender.hp - damageValue;
        if(damageValue < 0){damageValue = 0}
        this.damage = damageValue;
    },

    getIntervalSequence : function(value, step){   //Calculates diminishing returns for any given interval
        stepAmt = Math.abs(value/step);
        stepValue = 1;
        totalValue = 0;
        for (i = 0 ; i < stepAmt + 1; i++){
            totalValue += .5**stepValue;
            stepValue++;

        }
        return totalValue;
    },

    getIsHit : function(attacker, defender){
        let accuracy = attacker.skill - defender.deftness;
        accuracyMagnitude = Math.abs(combatCheck.getIntervalSequence(accuracy, 5)); //5 is set as the default accuracy step interval
        let hitVariance = Math.random(); //No longer needs to be a whole number.
        if (accuracy < 0 && accuracyMagnitude !== 0){
            trueAccuracy = 1 - accuracyMagnitude;
        } else {
            trueAccuracy = accuracyMagnitude;
        };
        if (trueAccuracy <= hitVariance){
            this.isHit = true;
        } else{
            this.isHit = false;
        }
    }

}

const combatReports = {

    reportMiss : function(protagonist, antagonist){
         reportString = protagonist.name + ' missed ' + antagonist.name + '!';
        console.log(reportString);
    },

    reportHit : function(protagonist, antagonist){
        reportString = protagonist.name + ' hit ' + antagonist.name + '!';
        console.log(reportString);
    },

    reportDamage : function(protagonist, antagonist){
        reportString = protagonist.name + ' dealt ' + combatCheck.damage + ' damage to ' + antagonist.name + '!';
        console.log(reportString);
    },
}

const combatLoop = {

    protagonist : null,
    antagonist : null,

    mainLoop : function(){
    },

    attack : function(){
        combatCheck.getIsHit(this.protagonist, this.antagonist);
        if (combatCheck.isHit){combatReports.reportHit(this.protagonist, this.antagonist)}
        else {
            (combatReports.reportMiss(this.protagonist, this.antagonist));
            return;
        };
        combatCheck.getDamage(this.protagonist, this.antagonist);
        combatReports.reportDamage(this.protagonist, this.antagonist);
    }

}

/******************************************************
 * GUI functions and variables
 */

const actionInputButton = document.getElementById('inputButton');  
const combatConsole = document.getElementById('combatConsole');
const combatantStats = document.getElementById('combatantStats');

const displayCombatantStats = function(combatant){

    combatantStats.appendChild(document.createTextNode(combatant.name));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createElement("br"));
    combatantStats.appendChild(document.createTextNode('HP: ' + combatant.hp));
    combatantStats.appendChild(document.createElement("br"));
    combatantStats.appendChild(document.createTextNode('FAT: ' + combatant.fatigue));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createTextNode('CONS: ' + combatant.consciousness));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createTextNode('MOR: ' + combatant.morale));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createTextNode('STR: ' + combatant.strength));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createTextNode('SKL: ' + combatant.skill));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createTextNode('DFT: ' + combatant.deftness));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createTextNode('TGH: ' + combatant.toughness));
    combatantStats.appendChild(document.createElement("br")); 
    combatantStats.appendChild(document.createTextNode('GRT: ' + combatant.grit));
    combatantStats.appendChild(document.createElement("br")); 
}

const reportCombat = function(reportString){ 
    combatReport.appendChild(document.createTextNode(reportString));
    combatReport.appendChild(document.createElement("br")); 
};

/******************************************************
 * Code Execution
 */

combatLoop.protagonist = gobboSpawner();
combatLoop.antagonist = gobboSpawner();

console.log(combatLoop.protagonist.skill, combatLoop.protagonist.deftness);
console.log(combatLoop.antagonist);

combatLoop.attack();

actionInputButton.addEventListener('click', function(e){
    e.preventDefault();
    reportCombat(combatLoop.attack());
    
});

displayCombatantStats(combatLoop.protagonist);

  /*      Idea for compact randomizer 
  randomGenerator(orcDef);
    let variance = Math.floor(Math.random()*orcDef.statGen.ceilingValue);
    return orcDef.statGen.floor + orc.statGen.variance);*/
