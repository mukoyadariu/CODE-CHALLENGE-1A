function checkSpeed(speed){
    const speedlimit = 70
    const points = 5
    const pointsthreshhold = 12
    if(speed <= speedlimit){
        return "Okay"
    }
    
    else{
        const excessspeed = speed - speedlimit
        const pointss = Math.floor(speed/points)
        if(points > pointsthreshhold){
            return"LICENCE CANCELED"
        }else{
            return "points" + points
        }
    }
    }
    
    const speed =parseInt("500")
    checkSpeed(speed)
    console.log(checkSpeed(speed))