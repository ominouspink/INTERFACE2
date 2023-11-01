export function attack(baseDMG, critPWR, modifiers) {
    // we slaan de baseDMG en modifiers op in een const want die staan vast
    const DMG =baseDMG +modifiers;
    //we maken critDMG aan voor het geval dat de gebruiker een critical hit doet
    const critDMG = DMG + critPWR;
    //we maken een random voor crit
    RNDM = Math.floor(Math.random() * 2);

    if(RNDM == 1){
        return critDMG;
    } else{
        return DMG;
    }
   
}