const prompt = require("prompt-sync")();

let userArr = [];

function getUserChoice(){
    let userPrompt = "[0] - Quit | [1] - Save | [2] - Update | [3] - Delete";
    const choiceNamesArr = ["Quit", "Save", "Update", "Delete"];
    console.log(userPrompt);
    let userChoice = prompt();

    // Save
    // added q key as alternative for easy exit.
    if (userChoice == 0 || userChoice == "q"){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
        return;
    }
    
    else if (userChoice == 1){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
        getInputForSave();
    }

    // Update
    else if (
        // fix error handler
        userChoice == 2 && 
        userArr.length != 0){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
        getInputForUpdate();
    }

    // Delete
    else if (userChoice == 3){
        console.log(`Selected ${choiceNamesArr[userChoice]}.`);
        getInputForDelete();
    }
    else {
        console.log("Error Input.");
        getUserChoice();
    }

    return userChoice;
}


function getInputForSave(){
    let userInfo = new Array(3);
    for (let i = 0; i < userInfo.length; i++){
        userInfo[i] = prompt(); 
    }

    // inserts new userInfo to
    // the end of the array.
    userArr.push(userInfo);
    // inserts ID in the beginning of the 
    // userArray.
    // length starts at 1,
    // array starts at 0 which is why
    // -1 is needed.
    userInfo.unshift(userArr.length-1);

    console.log(userInfo);
    console.log(userArr);
    getUserChoice();
}

function getInputForUpdate(){
    //
    console.log("Input the ID of the record you want to change:");
    let userIdInput = prompt();

  
    // asks for userInfo to replace the existing 
    // values in indexes of array
    let userInfo = new Array(3);
    for (let i = 0; i < userInfo.length; i++){
        userInfo[i] = prompt(); 
    }
   try {
       userArr
    // replaces values inside indexes depending on
    // the id value provided by uses
    userArr[userIdInput].splice(
        1, 3,
        userInfo[0],
        userInfo[1],
        userInfo[2]
        )
    } catch (error){
        console.log("Error! Invalid ID. No action taken.")
    }
    
    console.log(userArr);
    getUserChoice();
}

function getInputForDelete(){
    console.log("Input the ID of the record you want to delete:");
    let userIdInput = prompt();
    try {
        // replaces values inside indexes depending on
        // the id value provided by uses
        userArr.splice(userIdInput, 1);
        } catch (error){
            console.log("Error! Invalid ID. No action taken.")
        }
        
        console.log(userArr);
        getUserChoice();
    
}

getUserChoice(); 