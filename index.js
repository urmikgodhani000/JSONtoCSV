const json2csv = require("json2csv").parse;
const fs = require("fs");

const jsonData = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane Doe",
    age: 25,
    city: "San Francisco",
  },
];

const csv = json2csv(jsonData);

fs.writeFile("data.csv", csv, function (err) {
  if (err) throw err;
  console.log("File saved successfully!");
});
