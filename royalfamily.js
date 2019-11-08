const employer = {
    first_name: "Charles",
    last_name: "Peterson",
    title: "Baron",
    gender: "male"
}
const employer2 ={
    first_name: "Leticia",
    last_name: "Parker",
    title: "Baroness",
    gender: "female"
}
const employer3 ={
    first_name: "Joao",
    last_name: "Neves",
    title: "Prince",
    gender: "male"
}
const findFormOfAddress = function (employer) {
    if (employer.title === "King" || employer.title === "Queen"){
            console.log("Your Majesty");
    }   else if (employer.title === "Prince" || employer.title === "Princess"){
            console.log("Your Royal Highness");
    }   else if (employer.title === "Duke" || employer.title === "Duchess" ){
            console.log ("Your Grace");
    }   else if (employer.title === "Baronet" || employer.title === "Knight"){
            console.log (`Sir ${first_name}`);
    }   else if (employer.title === "Dame"){
            console.log (`Dame ${first_name}`)
    }   else 
            if (employer.gender === "female"){
                console.log(`Lady ${employer.last_name}`)
            }  else {
                console.log(`Lord ${employer.last_name}`)
            }
}


findFormOfAddress(employer);
findFormOfAddress(employer2);
findFormOfAddress(employer3);

