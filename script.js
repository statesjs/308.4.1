let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//after looking into the split() method, I don't know why I was over-complicating it. I was probably sleep deprived
//but fresh eyes and fresh brain made this problem 10x easier when I recognized to just use the length() method to get a count
//and dynamically console.log the entire array at each index position.

let rows = csv.split("\n"); //splitting into 5 different rows

for (let i = 0; i < rows.length; i++) {
  console.log(rows[i]);
}
//just a cleaner way to console.log without needed to know how many indexes exist beforehand
// especially when the data is too long
//the previous code doesnt look that messy, but look at the commits and you'll see just how bad it got. My god I
//don't know how I got so off track

//TEST CSV
//PART 2
let csvTest =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let rowsTest = csvTest.split("\n"); //splitting into 5 different rows
let rowsSplit = [];
let rowsSingleValues = [];
rowsSplit.length = 11;

for (let i = 0; i < rowsTest.length; i++) {
  rowsSplit = rowsTest[i].split(","); //breaking down the strings in the array into sub-arrays in the array
  rowsSingleValues.push(rowsSplit); //  adding each sub array, line by line
}
console.log(rowsSplit);
console.log(rowsSingleValues);
console.log(rowsSingleValues[0]);
console.log(rowsSingleValues[0][0]);

//I had alot of difficulty trying to understand hwo to dynamically make
// rowsSplit have the array containing smaller arrays but then I realized the 2 problems:

//PROBLEM 1 : you can't create initialize a variable dynamically with rowsSplit[i] = etc

//PROBLEM 2 : rowsSplit = rowsTest[i].split(",") (<---LINE 29) assigns and overwrites the previous array,
//making the value just take on the last array in the iteration (<---SEE LINE 32)

//Tory was great at explaining how to reference sub arrays (<---LINE 35)

//CONCLUSION: using the push method off every iteration into a new variable will FINALLY acheive a subarray
//that can be reference by using their main index then their sub index ex. rowsSingleValues[num]num]

//there are errors setting each row into seperate variable without hardcoding,
// but this was also just sounded cleaner anyways
let emptyPlaceHolder = [];
let csvColumns = 7; // <--- CHANGING THIS VALUE CHANGES THE REST OF THE ARRAY'S COLUMNS
console.log(csvColumns);
if (rowsSingleValues[0].length < csvColumns) {
  for (let i = 0; i < rowsSingleValues.length; i++) {
    while (rowsSingleValues[i].length < csvColumns) {
      //<--- might be the first time ive actually had to use a while loop besides an exercise
      rowsSingleValues[i].push("");
    }
  }
}
for (let i of rowsSingleValues) {
  console.log(i);
}

//PART 3
let mainArr = [];
let objBruce = {};
let objBob = {};
let objBlaine = {};
let objBill = {};
let csvRowsSplit = []; //holds completed array w nested arrays
//lets make the original csv into organized arrays too
let csvRows = csv.split("\n");

console.log(csvRows);
for (let i = 0; i < csvRows.length; i++) {
  let csvRowsSplit2 = csvRows[i].split(",");
  csvRowsSplit.push(csvRowsSplit2);
}
console.log(csvRowsSplit);

//create an array with just the keys to sort them out later
let keysArr4 = csvRowsSplit[0];
let keysArr3 = keysArr4.toString();
let keysArr2 = keysArr3.toLowerCase();
let keysArr = keysArr2.split(",");
console.log(keysArr);
for (let i = 0; i < csvRowsSplit.length - 1; i++) {
  objBruce[keysArr[i]] = csvRowsSplit[1][i];
  objBob[keysArr[i]] = csvRowsSplit[2][i];
  objBlaine[keysArr[i]] = csvRowsSplit[3][i];
  objBill[keysArr[i]] = csvRowsSplit[4][i];
}
mainArr.push(objBruce, objBob, objBlaine, objBill);

console.log(mainArr);

// PART 4
// STEP1
mainArr.pop();
console.log(mainArr);
//STEP 2
let objBarry = {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
};
mainArr.splice(1, 0, objBarry);
console.log(mainArr);
//STEP 3
let objBilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
mainArr.push(objBilbo);
console.log(mainArr);
//STEP 4
let ageTotal = 0;
let avgAge = 0;
for (let i = 0; i < mainArr.length; i++) {
  ageTotal += Number(mainArr[i].age); // I thought it would type convert but i was wrong. ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
}
avgAge = ageTotal / mainArr.length;
console.log(ageTotal);
console.log(avgAge);
// PART 5
console.log(mainArr);
let csvFormat = "";
let csvFormat1 = "";
for (let key in mainArr[0]) {
  console.log(key);
  let arrKey = key.split(",");
  let fixedArrKey = arrKey[0][0].toUpperCase() + arrKey[0].slice(1);
  let strArrKey = fixedArrKey.toString();
  csvFormat1 += strArrKey + ",";
}
csvFormat1 += "\n"; //make sure to add a "\n" for the topics row
console.log(csvFormat1);
//finished the first row/string, making the first letter uppercase
//work on the normal strings now
let csvFormat2 = "";
console.log(mainArr[0]);
for (let i = 0; i < mainArr.length; i++) {
  for (let key in mainArr[i]) {
    //make a conditional on when to add a "\n"
    if (
      mainArr[i][key] == 41 ||
      mainArr[i][key] == 25 ||
      mainArr[i][key] == 19 ||
      mainArr[i][key] == 58
    ) {
      csvFormat2 += mainArr[i][key] + "\n";
    } else {
      //otherwise just add a comma since its on the same row
      csvFormat2 += mainArr[i][key] + ",";
    }
  }
}
csvFormat = csvFormat1 + csvFormat2;
console.log(csvFormat); // finished product
