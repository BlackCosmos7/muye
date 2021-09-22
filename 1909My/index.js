class Person {
    constructor(surname, name, gender, birthdate) {
    this.nameinicial = name.charAt(0) + ". " + surname;
    this.surname =  surname;
    this.name = name;
    this.gender = gender;
    this.birthdate = birthdate;
    }
}
const nowData = new Date();

murrr = require("fs");
murrr.readFile(`ppl.csv`, {encoding: "utf-8"}, function(err, data){
    if(err){
        throw new Error(err)
    } else {
        kotiki = kotiki(data)
        kotiki.sort((a, b) => {
            return smert(a) - smert(b)
        })
        kotiki.forEach(element => {
            console.log(element.nameinicial)
        })
    }
})

function kotiki(data) {
    let arr =  []
    let cat = data.split("\n")
    cat.shift()
    for(i of cat) {
        line = i.split(";");
        let kit = new Person(line[0], line[1], line[2], line[3]);
        arr.push(kit);
    }
return arr
}

function smert(element){
    let birth = new Date(element.birthdate);
    let year =  nowData.getFullYear();
    birth.setFullYear( year); 
    if (birth < nowData){
        year += 1 
        birth.setFullYear( year)
    }
    var bolRazn = birth - nowData;
    return bolRazn 
}