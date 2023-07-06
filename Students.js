function calculateGrade(avg){
    if(avg>=79){
        console.log("A")
    }
    
    else if(avg>=60 && avg<79){
        console.log("B")
    }
    
    else if(avg>=49 && avg<=59){
        console.log("C")
    }
    
    else if(avg<49 && avg>=40){
        console.log("D")
    }
    
    else if (avg<40){
        console.log("E")
    } 
    
    else{
        return"invalid marks"
    }
    }
    let marks = parseInt(60)
    let grid = calculateGrade(marks)
    