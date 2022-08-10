const prompt = require("prompt-sync")();

let userArr = [];

function getUserChoice(){
    let userPrompt = "[0] - Quit | [1] - Save | [2] - Update | [3] - Delete";
    const choiceNamesArr = ["Quit", "Save", "Update", "Delete"];
    console.log(userPrompt);
    let userChoice = prompt();

    // Save
    if (userChoice == 0){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
        return;
    }
    
    else if (userChoice == 1){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
        getInputForSave();
    }

    // Update
    else if (userChoice == 2){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
        getInputForUpdate();
    }

    else if (userChoice == 3){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
    }
    else {
        console.log("Error Input.");
        getUserChoice();
    }

    // Delete

    return userChoice;
}


function getInputForSave(){
    let userInfo = new Array(3);
    for (let i = 0; i < userInfo.length; i++){
        userInfo[i] = prompt(); 
    }

    // length starts at 1,
    // array starts at 0 which is why
    // -1 is needed.
    userArr.push(userInfo);
    userInfo.unshift(userArr.length-1);
    
    console.log(userArr.length);
    console.log(userInfo);
    console.log(userArr);
    getUserChoice();
}

function getInputForUpdate(){
    let userInfo = new Array(4);
    for (let i = 0; i < userInfo.length; i++){
        userInfo[i] = prompt(); 
    }
    console.log(userInfo);
    getUserChoice();
}

getUserChoice();