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
