function main(number){
    let result = grades(number);
    console.log(result);
}

function grades(grade){
    if(grade>=2 && grade < 3){
        return "Fail";
    }else if(grade>=3 && grade<3.5){
        return "Poor";
    }else if(grade>=3.5 && grade<4.5){
        return "Good";
    }else if(grade>=4.5 && grade<5.5){
        return "Very Good";
    }else if(grade>=5.5 && grade<=6){
        return "Excellent";
    }
}

main(4.5)