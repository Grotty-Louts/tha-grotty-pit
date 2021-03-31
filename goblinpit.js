/*********************************************************:
 * Class Declarations, Constructors, and Constructor Functions
 */
let whatRaceAmI = {
    goblin:false,
    ork:false,
    gremlin:false,
    troll:false,
    ogre:false,
    human:false,
    dwarf:false,
}

const limbDef = {
    limbs : {
        torso : {
            name:'torso',
            torso:true,
            head : {
                name:'head',
                head:true,
                leftEye : {
                    name:'left eye',
                    leftEye:true
                },
                rightEye : {
                    name:'right eye',
                    rightEye:true
                },
                mouth : {
                    name:'mouth',
                    mouth:true
                },
                leftEar : {
                    name:'left ear',
                    leftEar:true
                },
                rightEar : {
                    name:'right ear',
                    rightEar:true
                },
                nose : {
                    name:'nose',
                    nose:true
                }
            },
            leftArm : {
                name:'left arm',
                leftArm:true,
                leftHand : {
                    name:'left hand',
                    leftHand:true,
                    leftPinkyF:{
                        name:'left pinky finger',
                        leftPinkyF:true
                    },
                    leftRingF:{
                        name:'left ring finger',
                        leftRingF:true
                    },
                    leftMiddleF:{
                        name:'left middle finger',
                        leftMiddleF:true
                    },
                    leftIndexF:{
                        name:'left index finger',
                        leftIndexF:true
                    },
                    leftThumb:{
                        name:'left thumb',
                        leftThumb:true
                    }
                }
            },
            rightArm : {
                name:'right arm',
                rightArm:true,
                rightHand : {
                    name:'right hand',
                    rightHand:true,
                    rightPinkyF:{
                        name:'right pinky finger',
                        rightPinkyF:true
                    },
                    rightRingF:{
                        name:'right ring finger',
                        rightRingF:true
                    },
                    rightMiddleF:{
                        name:'right middle finger',
                        rightMiddleF:true
                    },
                    rightIndexF:{
                        name:'right index finger',
                        rightIndexF:true
                    },
                    rightThumb:{
                        name:'right thumb',
                        rightThumb:true
                    }
                }
            },
            leftLeg : {
                name:'left leg',
                leftLeg:true,
                leftFoot : {
                    name:'left foot',
                    leftFoot:true
                }
            },
            rightLeg : {
                name:'right leg',
                rightLeg:true,
                rightFoot : {
                    name:'right foot',
                    rightFoot:true
                }
            }
        }
    }
}

const entityTraits = {
    brute:{}
}



const entityRandomizer = {

    raceGen : function (){    //For future random race selection, currently unused but functional
        let raceList = ['Goblin' , 'Ork']
        let randInteger = Math.floor(Math.random() * raceList.length);
        return raceList[randInteger];
    },
  
    idGen :  function (){
        let racialID = '_' + Math.random().toString(36).substr(2, 9);
        if(whatRaceAmI.goblin==true) return 'GOB'+racialID
        else if(whatRaceAmI.ork==true) return 'ORK'+racialID
        else return racialID
      
    },
    
    nameGen : function (){
      let nameConstruction = ['oneSyllable' , 'twoSyllable', 'threeSyllable']
      let randSyllableCount = Math.floor(Math.random() * nameConstruction.length);
      let nameList1 = ['Doo' , 'Scat' , 'Loo', 'Gram' , 'Grease' , 'Lin' , 'Flung', 'Grang', 'Abe', 'Dung', 'Splort', 'Sha', 'Bum', 'Itch', 'Stab','Rash','Ass','Plonk','Tunk','Gronk','Yiss','Yee','Womp']
      let nameList2 = ['town','by','er','tack','dle','do','da','poo','grun','bo','flum','mo','gle','scoot',' III','poodle','slop','bum','zoop','spat','rash','itch','zum','splort','kins','y','ol']
      let nameList3 = ['town','by','er','tack','dle','do','da','poo','grun','bo','flum','mo','gle','scoot',' III','poodle','slop','bum','zoop','spat','rash','itch','zum','splort','kins','y','ol']
      let randInteger = Math.floor(Math.random() * nameList1.length);
      let additionalSyllables1 = Math.floor(Math.random() * nameList2.length);
      let additionalSyllables2 = Math.floor(Math.random() * nameList2.length);
      if(randSyllableCount==0){return nameList1[randInteger]}
      else if (randSyllableCount==1){return nameList1[randInteger]+nameList2[additionalSyllables1]}
      else if (randSyllableCount==2){return nameList1[randInteger]+nameList2[additionalSyllables1]+nameList3[additionalSyllables2]}
      ;
      
    },
  
    hpGen : function (){
        let hpFloor = 0;
        if(whatRaceAmI.goblin==true){hpFloor = (hpFloor + 25)}
        else if (whatRaceAmI.ork==true){hpFloor = (hpFloor + 1000)}
        let hpVariance = Math.floor(Math.random()*101)
        return hpFloor + hpVariance;
    },
    stamGen : function (){
        let stamFloor = 0;
        if(whatRaceAmI.goblin==true){stamFloor = (stamFloor + 1)}
        else if (whatRaceAmI.ork==true){stamFloor = (stamFloor + 5)}
        let stamVariance = Math.floor(Math.random()*10)
        return stamFloor + stamVariance;
    },
    consciousnessGen : function (){
      let consciousnessFloor = 0;
      if(whatRaceAmI.goblin==true){consciousnessFloor = (consciousnessFloor + 25)}
      else if (whatRaceAmI.ork==true){consciousnessFloor = (consciousnessFloor + 1000)}
      let consciousnessVariance = Math.floor(Math.random()*101)
      return consciousnessFloor + consciousnessVariance;
    },
    moraleGen : function (){
      let moraleFloor = 0;
      if(whatRaceAmI.goblin==true){moraleFloor = (moraleFloor + 25)}
      else if (whatRaceAmI.ork==true){moraleFloor = (moraleFloor + 1000)}
      let moraleVariance = Math.floor(Math.random()*101)
      return moraleFloor + moraleVariance;
    },  
    strGen : function (){
      let strFloor = 0;
      if(whatRaceAmI.goblin==true){strFloor = (strFloor + 1)}
      else if (whatRaceAmI.ork==true){strFloor = (strFloor + 5)}
      let strVariance = Math.floor(Math.random()*10)
      return strFloor + strVariance;
    },
    sklGen : function (){
      let sklFloor = 0;
      if(whatRaceAmI.goblin==true){sklFloor = (sklFloor + 2)}
      else if (whatRaceAmI.ork==true){sklFloor = (sklFloor + 4)}
      let sklVariance = Math.floor(Math.random()*10)
      return sklFloor + sklVariance;
    },
    defGen : function (){
      let defFloor = 0;
      if(whatRaceAmI.goblin==true){defFloor = (defFloor + 5)}
      else if (whatRaceAmI.ork==true){defFloor = (defFloor + 2)}
      let defVariance = Math.floor(Math.random()*10)
      return defFloor + defVariance;
    },
    gritGen : function (){
      let gritFloor = 0;
      if(whatRaceAmI.goblin==true){gritFloor = (gritFloor + 1)}
      else if (whatRaceAmI.ork==true){gritFloor = (gritFloor + 4)}
      let gritVariance = Math.floor(Math.random()*10)
      return gritFloor + gritVariance;
    },
    toughGen : function (){
      let toughFloor = 0;
      if(whatRaceAmI.goblin==true){toughFloor = (toughFloor + 2)}
      else if (whatRaceAmI.ork==true){toughFloor = (toughFloor + 4)}
      let toughVariance = Math.floor(Math.random()*10)
      return toughFloor + toughVariance;
    },
    
    
}
  
class entity{
    constructor(race, id, alive, name, consciousness, morale, stamina, strength, skill, deftness, toughness, grit, limbs, bloodLoss, fatigue, afflictions){
        this.race = race;
        this.id = id;
        this.alive = alive;
        this.name = name;
        this.consciousness = consciousness;
        this.morale = morale;
        this.stamina = stamina;
        this.strength = strength;
        this.skill = skill;
        this.deftness = deftness;
        this.toughness = toughness;
        this.grit = grit;
        this.limbs = limbs;
        this.bloodLoss = bloodLoss;
        this.fatigue = fatigue;
        this.afflictions = { 
            graze : {name:'graze', effect:'bleed', magnitude: 1, value: 0},
            gash : {name:'gash', effect:'bleed', magnitude: 2, value: 0},
            toTheBone : {name:'to the bone', effect:'bleed', magnitude: 3, value: 0},
            faint : {name:'faint', effect:['fatigue','consciousness'], magnitude: 1, value: 0},     
           } 
   
    }
        
}
const gobboSpawner = function(){
    whatRaceAmI.goblin=true  
let newGobbo = new entity(
    'Goblin',
    entityRandomizer.idGen(),
    alive=true, 
    entityRandomizer.nameGen(),
    entityRandomizer.consciousnessGen(),
    entityRandomizer.moraleGen(),
    entityRandomizer.stamGen(),
    entityRandomizer.strGen(),
    entityRandomizer.sklGen(),
    entityRandomizer.defGen(),
    entityRandomizer.toughGen(),
    entityRandomizer.gritGen(),
    limbDef,
    bloodLoss=0,
    fatigue=0)
    whatRaceAmI.goblin=false
    
return newGobbo;

}


/**********************************************************
 * Object Declarations for Attack Cards and Afflictions
 */

 const bleedAfflictionTable = function(entity){
    let tableRoll = combatCheck.strengthInterval(entity)
    if(Math.random() > tableRoll){
        entity.afflictions.graze.value++}
    else if(Math.random() < tableRoll - .4){
        entity.afflictions.gash.value++}
    else if(Math.random() < tableRoll - .6){
        entity.afflictions.toTheBone.value++}
    else{entity.afflictions.graze.value++}
    }
    
 const bleedTotal = function(entity){
     let sumOfBleeding = (entity.afflictions.graze.value*entity.afflictions.graze.magnitude + 
                          entity.afflictions.gash.value*entity.afflictions.gash.magnitude + 
                          entity.afflictions.toTheBone.value*entity.afflictions.toTheBone.magnitude);
        console.log(entity.name + ' is suffering from ' + entity.afflictions.graze.value + ' grazes.');
        console.log(entity.name + ' is suffering from ' + entity.afflictions.gash.value + ' gashes.');
        console.log(entity.name + ' is suffering from ' + entity.afflictions.toTheBone.value + ' cuts to the bone.');
        return sumOfBleeding;
    }

const bleedOutTable = function(entity){
    let tableRoll = combatCheck.toughnessInterval(entity)
    if(entity.bloodLoss == 0){
        return} 
    else if (Math.random() < .75){
        entity.afflictions.faint.value++;
        console.log(entity.name + ' is feeling faint x ' + entity.afflictions.faint.value);}
    else{entity.alive=false};
}    
 





const offensive = {
    punch: function(attacker, defender){ //basic melee bludgeoning attack. Inflicts bruises, concussions, and black eyes.

    },

    bite: function(attacker, defender){ //basic melee piercing attack. Lowers morale of opponent, Inflicts bloodLoss, lowers own deftness for one turn.
        console.log(attacker.name + ' chomps at ' + defender.name + '!')
        if(combatCheck.isHit=true){
            defender.morale -= 5;
            bleedAfflictionTable(defender);
            console.log(attacker.name + ' has bitten ' + defender.name + ' !');                                   //(x = x + 1 : x += 1 x = x - 1 : x -= 1) 
        }
        else {console.log(attacker.name + ' has missed!')}
        attacker.fatigue += 2;
        console.log(attacker.name + ' is at ' + attacker.fatigue + ' points of fatigue.');
        combatCheck.isHit = null;
        
        
    },

    kick: function(attacker, defender){ //basic melee bludgeoning attack (for when limbs work). Inflicts bruises. Inflicts concussions and might cause instant death if oponnent is prone.

    },

    gougeEyes: function(attacker, defender){ //basic melee status attack that inflicts blindness (temporary), blindness (permanent), or bloodLoss. Lowers own deftness for one turn.

    },

    taunt: function(attacker, defender){ //lowers opponent morale. Small chance of opponent playing random offensive attack next turn. Small chance of lowering own morale(opponent grit). 


    }
}


const defensive = {
    recover: function(self){  //lowers deftness for one turn & restores fatigue.

    },

    psychUp: function(self){ //lowers deftness for one turn & restores morale. Small chance of the 'pumped' affect (one extra card per turn. Durability: 5 morale)

    },

    block: function(self){ //lowers risk of afflictions next turn (toughness) & restores small amount of fatigue

    },

    dodge: function(self){ //increases deftness for one turn & restores small amount of fatigue.

    },

    patchUp: function(self){ //restore one minor bloodLoss affliction & lowers deftness for one turn.


    } 


}


const moraleBreak = {


}

const prone = {


}


 

/****************************************
 * Combat Objects and Methods
 */

const combatCheck = {

    isHit : null,
    damage : null,

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

    strengthInterval : function(entity) {
        return combatCheck.getIntervalSequence(entity.strength, 10);
    },

    toughnessInterval : function(entity) {
        return combatCheck.getIntervalSequence(entity.toughness, 10);
    },


    setBloodLoss: function (entity) {
        entity.bloodLoss += bleedTotal(entity)
        console.log(entity.name + ' has lost ' + entity.bloodLoss + ' blood!')
        tableCheck = this.toughnessInterval(entity)
        if (this.checkBleedAffliction(entity) == true){
            bleedOutTable(entity);
        } else{
            return;
        }
    },
    

    checkBleedAffliction (entity){
        let afflictionThreshold = entity.toughness - entity.bloodLoss;
        afflictionThresholdMagnitude = Math.abs(this.toughnessInterval(entity)); //5 is set as the default accuracy step interval
        let afflictionVariance = Math.random(); //No longer needs to be a whole number.
        if (afflictionThreshold < 0 && afflictionThresholdMagnitude !== 0){
            trueAfflictionThreshold = 1 - afflictionThresholdMagnitude;
        } else {
            trueAfflictionThreshold = afflictionThresholdMagnitude;
        };
        if (trueAfflictionThreshold <= afflictionVariance){
            return true;
        } else{
            return false;
        }
    },
    

    checkFatigue: function(entity){
        if (entity.fatigue > entity.stamina){
            let fatigueMagnitude = entity.fatigue - entity.stamina; 
            let fatigueInterval = combatCheck.getIntervalSequence(fatigueMagnitude, 1);
            if (Math.random() < fatigueInterval){
                console.log(entity.name + ' has passed out from exhaustion!')
            }
        } else {
            console.log(entity.name + ' still has fight in him!')
        }

    },

    getDamage : function(attacker , defender){
        let damageValue = (attacker.strength - defender.toughness/2)
        defender.hp = defender.hp - damageValue;
        if(damageValue < 0){damageValue = 0}
        this.damage = damageValue;
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
            combatCheck.isHit = true;
        } else{
            combatCheck.isHit = false;
        }
    }

}

const combatReports = {

    reportMiss : function(protagonist, antagonist){
         reportString = protagonist.name + ' missed ' + antagonist.name + '!';
        console.log(reportString);
        return reportString;
    },

    reportHit : function(protagonist, antagonist){
        reportString = protagonist.name + ' hit ' + antagonist.name + '!';
        console.log(reportString);
        return reportString;
    },

    reportDamage : function(protagonist, antagonist){
        reportString = protagonist.name + ' dealt ' + combatCheck.damage + ' damage to ' + antagonist.name + '!';
        console.log(reportString);
        return reportString;
    },
}
const combatLoop = {

    protagonist : null,
    antagonist : null,

    mainLoop : function(entity1, entity2){
        if (entity1.deftness>=entity2.deftness){
            protagonist = entity1;
            antagonist = entity2;
        } else {
            protagonist = entity2;
            antagonist = entity1;
        }

        console.log(protagonist.stamina, protagonist.strength);
        console.log(antagonist.stamina, antagonist.strength);
        for(turnCounter = 0; turnCounter < 20; turnCounter++){
            combatCheck.setBloodLoss(protagonist);
            combatCheck.checkFatigue(protagonist);
            offensive.bite(protagonist, antagonist);
            combatCheck.setBloodLoss(antagonist);
            combatCheck.checkFatigue(antagonist);
            offensive.bite(antagonist, protagonist);
            if (protagonist.alive == false){
                console.log(protagonist.name + ' has bled out like a grotty pig!');
                break;
            } 
            else if (antagonist.alive == false){
                console.log(antagonist.name + ' has bled out like a wee babb.')
                break;
            }

        }
    console.log('Combat is over!')
        
    },

    attack : function(){
        let reportString;
        combatCheck.getIsHit(this.protagonist, this.antagonist);
        if (combatCheck.isHit){reportCombat(combatReports.reportHit(this.protagonist, this.antagonist))}
        else {
            (reportCombat(combatReports.reportMiss(this.protagonist, this.antagonist)));
            return;
        };
        combatCheck.getDamage(this.protagonist, this.antagonist);
        reportString = combatReports.reportDamage(this.protagonist, this.antagonist);
        console.log(reportString);
        reportCombat(reportString);
    }

}


/******************************************************
 * GUI functions and variables
 */

const actionInputButton = document.getElementById('inputButton');  
const combatConsole = document.getElementById('combatConsole');
const combatantStats = document.getElementById('combatantStats');
const currentCombatantDisplay = document.getElementById('currentCombatantDisplay')
const combatantList = document.getElementById('combatantList')

const displayCombatantStats = function(combatant){
    combatantStats.innerHTML = '';
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

const displayCurrentCombatant = function(protagonist){
    currentCombatantDisplay.appendChild(document.createTextNode(protagonist.name));
}

const displayNextCombatants = function(antagonist){
    combatantList.appendChild(document.createTextNode(antagonist.name));
}

const reportCombat = function(reportString){ 
    combatConsole.appendChild(document.createTextNode(reportString));
    combatConsole.appendChild(document.createElement("br")); 
};


/******************************************************
 * Code Execution
 */

combatLoop.mainLoop(gobboSpawner(),gobboSpawner())

/***********GUI CODE
actionInputButton.addEventListener('click', function(e){
    e.preventDefault();
    combatLoop.attack();  
    
});

currentCombatantDisplay.addEventListener('click', function(e){
    e.preventDefault();
    displayCombatantStats(combatLoop.protagonist);
    console.log('click');
});

combatantList.addEventListener('click', function(e){
    e.preventDefault();
    displayCombatantStats(combatLoop.antagonist);
    console.log('click');
});

displayCurrentCombatant (combatLoop.protagonist);
displayNextCombatants(combatLoop.antagonist);
displayCombatantStats(combatLoop.protagonist);

*/

  /*      Idea for compact randomizer 
  randomGenerator(orcDef);
    let variance = Math.floor(Math.random()*orcDef.statGen.ceilingValue);
    return orcDef.statGen.floor + orc.statGen.variance);*/