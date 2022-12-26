let arr = ["a", 34, "ghj"];
let detailObject = [
  {
    nickname: "asd",
    name: "Ankur",
    age: 24,
    address: { flatNo: "raj", locality: "rty" },
    choices: ["movies", "clubbing", "reading"],
  },
  {
    name: undefined,
    age: 23,
    address: { flatNo: "raj", locality: "rty" },
    choices: ["movies", "clubbing", "reading"],
  },
  {
    name: "Shivani",
    age: 21,
    address: { flatNo: "raj", locality: "rty" },
    choices: ["movies", "clubbing", "reading"],
  },
];
// console.log(Object.values(detailObject)[3]);
let result = detailObject.map((item) => {
  return item.name || item.age;
});

console.log(result);

// for (i = 0; i < detailObject.length; i++) {
//   console.log(detailObect[i].name);
// }
