var weapons = ['rock','paper','scissors'];
export function getEnemyWeapon(){
    return weapons[Math.floor(Math.random() * 3)];
}

export function winnerController(player,pc){
    if(player===pc){
        return 'draw'
    }
    else{
        if(weapons.indexOf(pc) === (weapons.indexOf(player)+2)%3){
            return 'won'
        }
        else{
            return 'lost'
        }
    }
}