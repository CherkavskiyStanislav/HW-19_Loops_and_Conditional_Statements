let hummanAge = prompt ("How old are you?", 'age');

if(hummanAge <= 17){
    confirm ("Do you study at school?");
} else if(hummanAge > 17 && hummanAge < 25){
    confirm ("Do you study at university?");
} else if(hummanAge >= 25 && hummanAge < 60){
    confirm ("Do you have a job?");
} else {
    confirm("What are you doing?");
}


let display = prompt("Enter the property CSS Display value:", 'value');

switch(display){
    case 'block':
        alert(`display: ${display}`);
        break;
    case 'flex':
        alert(`display: ${display}`);
        break;
    case 'grid':
        alert(`display: ${display}`);
        break;
    case 'inline':
        alert(`display: ${display}`);
        break;
    case 'none':
        alert(`display: ${display}`);
        break;
    default:
        alert("Set 'display: inline-block;'");
 }


let number = prompt("Please enter the number:", '1');

while (!+number){
    number = prompt("Your number is incorect, please enter corect number", '1');
}

alert(`${number} by 12 equals ${number * 12}`);


for (let i = 2; i <= 50; i +=2) {
    console.log(i);
}