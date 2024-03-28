#! /usr/bin/env node
import inquirer from "inquirer";
let marks = await inquirer.prompt([{
        message: "Enter english number:",
        type: "number",
        name: "english"
    },
    { message: "Enter urdu number:",
        type: "number",
        name: "urdu" },
    { message: "Enter math number:",
        type: "number",
        name: "math" },
    { message: "Enter chemistry number:",
        type: "number",
        name: "chemistry" },
    { message: "Enter islamiat number:",
        type: "number",
        name: "islamiat" },
    { message: "Enter biology number:",
        type: "number",
        name: "biology" },
    { message: "Enter drawing number:",
        type: "number",
        name: "drawing" },
]);
const totalMarks = 700;
console.log('totalMarks:', totalMarks);
const obtainedMarks = marks.english + marks.urdu + marks.math + marks.chemistry + marks.islamiat + marks.biology + marks.drawing;
console.log('obtainedMarks:', obtainedMarks);
const percentage = obtainedMarks / totalMarks * 100;
console.log('percentage:', percentage);
if (percentage >= 90) {
    console.log("you obtain is ${percentage}% Congratulation! you got Grade 'A'");
}
else if (percentage >= 80) {
    console.log("you obtain is ${percentage}% Congratulation! you got Grade 'B'");
}
else if (percentage >= 70) {
    console.log("you obtain is ${percentage}% Congratulation! you got Grade 'C'");
}
else if (percentage >= 60) {
    console.log("you obtain is ${percentage}% Congratulation! you got Grade 'D'");
}
else if (percentage >= 50) {
    console.log("you obtain is ${percentage}% Congartulation! you got 'promote'");
}
console.log("you are permote");
