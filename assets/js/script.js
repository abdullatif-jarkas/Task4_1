//////////////////  Task 4_1 : SECTION a //////////////////

//// Generating Numbers ////
let arr = [];
for (let index = 0; index < 10; index++) {
  arr[index] = Math.floor(Math.random()*100);
}

console.log(arr)

let evenSum = 0;

arr.forEach(element => {
  if(element % 2 == 0) {
    evenSum += element;
  }
});

console.log("the sum of even numbers: " + evenSum);

let indexSum = 0;

for (let index = 0; index < arr.length; index++) {
  if(index < 5) {
    indexSum += arr[index];
  };
};
console.log("the result of adding numbers whose index is less than 5: " + indexSum)

//// Printing result on HTML page ////

let e1 = document.querySelector('.even-sum');
e1.innerHTML = evenSum;
let e2 = document.querySelector('.index-sum');
e2.innerHTML = indexSum;

console.log("\n/////////////////////////////////\n");

////////////////// Task 4_1 : SECTION b //////////////////

let obj = {
  name: "karam",
  number: "+963999999999",
  age: 28,
  email: "karam@mustafa.com",  
};

console.log(obj);
console.log("Name: " + obj.name);
console.log("Number: " + obj.number);
console.log("Age: " + obj.age);
console.log("Email" + obj.email);

//// Printing result on HTML page ////

let e3 = document.querySelector('.whole-object');
e3.innerHTML = obj;

let e4 = document.querySelector('.name');
e4.innerHTML = obj.name;
let e5 = document.querySelector('.number');
e5.innerHTML = obj.number;
let e6 = document.querySelector('.age');
e6.innerHTML = obj.age;
let e7 = document.querySelector('.email');
e7.innerHTML = obj.email;