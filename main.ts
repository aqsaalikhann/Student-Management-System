#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber: number = Math.floor(10000 + Math.random() *90000)

let myBalance: number = 0

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter student name:",
            validate: function (value) {
                if(value.trim() != "") {
                    return true;
                }
                return "please enter a non-empty value.";
            },
            },
            {
                name: "courses",
                type: "list",
                message: "select the course to enrolled",
                choices: ["MS.Office", "HTML", "Javascript", "Typescript"]
    
            }
    ]
);

let tutionFee: {[key: string]: number}= {
    "MS.Office":2000,
    "HTML": 2500,
    "Javacript": 5000,
    "Typescript": 6000,
    
};

console.log(`\nTution fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: "select payment method",
            choices: ["Bank transfer","Easypaisa", "Jazzcash"]
        },
        {
            name: "amount",
            type: "input",
            message: "transfer money:",
            validate: function (value) {
                if(value.trim() != "") {
                    return true
                }
                return "please enter a non-empty value.";
        
            },
        }
    ]
);
console.log (`\nYou select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount){
    console.log(`congratulations! you have successfully enrolled in ${answer.courses}.\n`);

let ans = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View status","Exit"]
        }
    ]
)

if (ans.select === "View status"){
    console.log(`student name: ${answer.students}`);
    console.log(`student id: ${randomNumber}`);
    console.log(`course: ${answer.courses}`);
    console.log(`tution fees paid: ${paymentAmount}`);
    console.log(`balance: ${myBalance += paymentAmount}`);

}else {
    console.log("Invalid amount due to course\n");
}
}
