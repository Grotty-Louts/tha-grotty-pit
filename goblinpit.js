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
        if(whatRaceAmI.goblin=true) return 'GOB'+racialID
        else if(whatRaceAmI.ork=true) return 'ORK'+racialID
        else return racialID
      
    },
    
    nameGen : function (){
      let nameConstruction = ['oneSyllable' , 'twoSyllable', 'threeSyllable']
      let randSyllableCount = Math.floor(Math.random() * nameConstruction.length);
      let nameList1 = ['Doo' , 'Scat' , 'Loo', 'Gram' , 'Grease' , 'Lin' , 'Flung', 'Grang', 'Abe', 'Dung', 'Splort', 'Sha', 'Bum', 'Itch', 'Stab','Rash']
      let nameList2 = ['town','by','er','tack','dle','do','da','poo','grun','bo','flum','mo','gle','scoot',' III','poodle','slop','bum','zoop','spat','rash','itch','zum','splort','kins','y']
      let nameList3 = ['town','by','er','tack','dle','do','da','poo','grun','bo','flum','mo','gle','scoot',' III','poodle','slop','bum','zoop','spat','rash','itch','zum','splort','kins','y']
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
    fatigueGen : function (){
      let fatigueFloor = 0;
      if(whatRaceAmI.goblin==true){fatigueFloor = (fatigueFloor + 25)}
      else if (whatRaceAmI.ork==true){fatigueFloor = (fatigueFloor + 1000)}
      let fatigueVariance = Math.floor(Math.random()*101)
      return fatigueFloor + fatigueVariance;
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
    constructor(race, id, name, hp, fatigue, consciousness, morale, strength, skill, deftness, toughness, grit, limbs){
        this.race = race;
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
        this.limbs = limbs;

        this.checkPulse = function(){
        if (this.hp<=0){
        this.alive = false;}
        console.log('It worked.');
        }

    }
}
const gobboSpawner = function(){
    whatRaceAmI.goblin=true   
let newGobbo = new entity(
    'Goblin',
    entityRandomizer.idGen(),
    entityRandomizer.nameGen(),
    entityRandomizer.hpGen(),
    entityRandomizer.fatigueGen(),
    entityRandomizer.consciousnessGen(),
    entityRandomizer.moraleGen(),
    entityRandomizer.strGen(),
    entityRandomizer.sklGen(),
    entityRandomizer.defGen(),
    entityRandomizer.toughGen(),
    entityRandomizer.gritGen(),
    limbDef)
    whatRaceAmI.goblin=false
    
return newGobbo;

}

const goblinGang = []
goblinGang.push(gobboSpawner())
goblinGang.push(gobboSpawner())
console.log(goblinGang)
console.log(goblinGang[0])
console.log(goblinGang[1])

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

combatLoop.protagonist = goblinGang[0];
combatLoop.antagonist = goblinGang[1];

console.log(combatLoop.protagonist.strength, combatLoop.protagonist.deftness);


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
// Poop