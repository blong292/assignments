const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(people, alphabet) {  
    let newArr = [];
    let splitAlph = alphabet.toUpperCase().split("");
    for(let i = 0; i <people.length; i++){
        newArr.push(people[i] + ':' + splitAlph);
        
    }
    console.log(newArr)
}
forception(people,alphabet);