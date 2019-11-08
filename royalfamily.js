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
            return "Your Majesty"
    }   else if (employer.title === "Prince" || employer.title === "Princess"){
            return "Your Royal Highness"
    }   else if (employer.title === "Duke" || employer.title === "Duchess" ){
            return "Your Grace"
    }   else if (employer.title === "Baronet" || employer.title === "Knight"){
            return `Sir ${first_name}`
    }   else if (employer.title === "Dame"){
            return `Dame ${first_name}`
    }   else 
            if (employer.gender === "female"){
                return `Lady ${employer.last_name}`
            }  else {
                return `Lord ${employer.last_name}`
            }
}

const adress = findFormOfAddress(employer)
    console.log(adress)

const adress2 = findFormOfAddress(employer2)
    console.log(adress2)

const adress3 = findFormOfAddress(employer3)
    console.log(adress3)
