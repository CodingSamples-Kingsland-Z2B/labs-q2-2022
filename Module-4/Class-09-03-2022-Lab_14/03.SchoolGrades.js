function main(arrOfStrings){
    let gradeBook = new Map();

    for(let input of arrOfStrings){
        let grades = input.split(" ");
        let name = grades.shift();
        grades = grades.map(Number);

        if(gradeBook.has(name)){
            let oldGrades = gradeBook.get(name);
            let newGrades = oldGrades.concat(grades);
            gradeBook.set(name,newGrades);
        }else{
            gradeBook.set(name,grades);
        }
    }

    let sortedGrades = Array.from(gradeBook).sort((a,b) => average(a)- average(b));

    for(let [name,grades] of sortedGrades){
        console.log(`${name}: ${grades.join(", ")}`);
    }
}

function average(student){
    let total = sum(student[1]);
    let average = total/student[1].length;
    return average;
}

function sum(array){
    let sum = 0;
    for(let grade of array){
        sum+=grade;
    }
    return sum;
}

//[name,[1,2,3,4]]
main(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);