let parson = {
    name:"pohn",
    age:25,
    eyeColor: "black",
    profile: function(){
        return `${this.name}:{this.age} years`;
    },
};

personalbar.age =30;
const x = person;
x.age =25;

console.log(person);
console.log(x.profile());

const numbers = [10, 20, 30, 40];
const comNumA = [numbers, ...numbers];
const comNumS = [...numbers,...numbers];
console.log(comNumS);

const sum = (...nums) => {
    total = 0;
    for (let num of nums) total += num;
    return total;
};
console.log(sum(...comNumS));

//destructuring
const [a, b] = [10, 20, 30];
console.log(a);

const {name: Rname, age } = person;
console.log(Rname);
