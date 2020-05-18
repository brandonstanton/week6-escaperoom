var readlineSync = require('readline-sync');
const userName = readlineSync.question('What is your name? ');

const strIntroduction = `Welcome ${userName} to the Escape Room`;
console.log(strIntroduction);

let isAlive = true;

while(isAlive == true)
{
    const menuOptions = readlineSync.keyIn(`Enter 1 to put your hand in the hole \n Press 2 for finding the key \n Press 3to open the door`, {limit: `$<1-3>` });

    if(menuOptions == 1)
    {
        console.log(`Oooops! Sorry ${userName}! Your're DEAD.  Game Over!`);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false)
    {
        //Player does not have the key
        console.log(`${userName}, you FOUND the key!`);
        hasKey = true;
    }
    else if (menuOptions == 2 && haskey == true)
    {
        //Player already had the key
        console.log(`${userName}, you ALREADY had the key!`);
    }
    else if (menuOptions == 3 && hasKey == false)
    {
        console.log(`${userName} - you already had the key, insert it into the door and try to open the door!`);
        haskey = true;
    }
    else if (menuOptions == 3 && hasKey == true)
    {
        console.log(`${userName} - you already have the key, you have inserted it into the door, and NOW THE DOOR IS OPEN!`);
    }
}
