/*********************************************************:
 * Class Declarations, Constructors, and Constructor Functions
 */

const goblinRandomizer ={
  
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
 * Combat Functions
 */
  
getRandInteger = function(){
    let hitVariance = Math.floor(Math.random() * 101);
    console.log(hitVariance);
    return hitVariance;   
}

const combatReport = function(attacker , defender){
    console.log(attacker.name + ' attacks ' + defender.name + '!');
    console.log(defender.name + ' has ' + defender.hp + ' HP remaining');
}
    
damageOpponent = function(attacker , defender){
    defender.hp = defender.hp - (attacker.strength - 
    defender.toughness/2);
    combatReport(attacker , defender)
    return defender.hp;
}

hitOpponent = function(attacker , defender){
    let hitVariance = getRandInteger();
    if(attacker.skill == defender.deftness){
       if(hitVariance > 50){
        damageOpponent (attacker , defender);
       }
       else {console.log(attacker.name + ' misses they strike!')}
    }
    else if(attacker.skill > defender.deftness){
        if(hitVariance > 10){
            damageOpponent (attacker , defender);
           }
            else {console.log(attacker.name + ' misses they strike!')}
    }
    else if(attacker.skill < defender.deftness){
        if(hitVariance > 90){
            damageOpponent (attacker , defender);
           }
           else {console.log(attacker.name + ' misses they strike!')}
      
    }
}

/******************************************************
 * Code Execution
 */


const protaganist = gobboSpawner();
const antagonist = gobboSpawner();

console.log(protaganist);
console.log(antagonist);

hitOpponent(protaganist,antagonist)


  /*      Idea for compact randomizer 
  randomGenerator(orcDef);
    let variance = Math.floor(Math.random()*orcDef.statGen.ceilingValue);
    return orcDef.statGen.floor + orc.statGen.variance);*/