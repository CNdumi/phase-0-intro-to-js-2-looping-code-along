// Code your solutions in this file
function writeCards(list, message){
    let thankYouMessages = [];
    for (let i=0; i<list.length; i++) {
        thankYouMessages.push(`Thank you, ${list[i]}, for the wonderful ${message} gift!`);
    }
    return thankYouMessages
}

function countDown(number){
    while (number >= 0){
        console.log(number);
        number--;
    }
}