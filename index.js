// Problem no. 1

function mindGame(number) {
    if(typeof number == "number"){
        const result = ((((number * 3) + 10) /2) - 5);
        return result;
    }
    else{
        return ("please enter a valid number")
    }
}

// console.log(mindGame(5));


// Problem no. 2

function evenOdd(name) {
    if(typeof name == "string"){
        if(name.length % 2 === 0){
            return "even"
        }
        else{
            return "odd"
        }
    }
    else{
        return "please enter a valid value"
    }
}

// console.log(evenOdd("emon"))


// Problem no. 3

function isLGSeven(number){
    const difference = number - 7;
    if(typeof number == "number"){
        if(difference < 7 && difference !== 0){
            return difference;
        }
        else{
            return number * 2;
        }
    }
    else{
        return "please enter a valid number"
    }
}

// console.log(isLGSeven(-15));


// Problem no. 4

function findingBadData(array) {
    
    var negatives = [];
    
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                negatives.push(array[i]);
            }
        }
        return negatives.length;
    }
    else {
        return "please enter the valid value"
    }
    
}

// console.log(findingBadData(myArray));



// Problem no. 4

function gemsToDiamond(num1, num2, num3){
    if(typeof num1 == "number" && typeof num2 == "number" && typeof num3 == "number"){
    firstFriend = num1 * 21;
    secondFriend =num2 * 32;
    thirdFriend = num3 * 43;
    }
    else{
        return "please enter the valid all number"
    }
    totalDiamond = firstFriend + secondFriend + thirdFriend;
            if (totalDiamond >= 2000) {
                return totalDiamond - 2000
            }
            else{
                return totalDiamond;
            }
    
}

// console.log(gemsToDiamond(20,200,50));