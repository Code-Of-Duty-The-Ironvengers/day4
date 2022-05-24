// key/value pairs
// word: definition
// key/ value

const firstObject = {
  key: "value",
  theRealFirstObject: true,
  willTheRealSlimShadyPleaseStandup: false,
  example: [1, 2, 3, 4],
  word: "LOOK MOM, IM HERE",
};

console.log(
  "USING DOT NOTATION",
  firstObject.willTheRealSlimShadyPleaseStandup
);

console.log("USING BRACKET NOTATION", firstObject["theRealFirstObject"]);

const aKeyForExample = "example";
console.log(firstObject[aKeyForExample], firstObject.example);

console.clear();

const arr = [
  "key",
  "theRealFirstObject",
  "willTheRealSlimShadyPleaseStandup",
  "example",
];

for (let i = 0; i < arr.length; i++) {
  const word = arr[i];

  console.log(firstObject[word]);
}

for (const word of arr) {
  console.log(firstObject[word]);
}

console.clear();

for (const key in firstObject) {
  console.log("key:", key);
}

console.clear();

const shoppingCart = [
  { id: 1, productTitle: "Baby Shark Tank", price: 13.99 },
  { id: 2, productTitle: "IceJJFish Number One Fan Memorabilia", price: 500 },
  {
    id: 3,
    produtTitle: "The Last Cheeseburger",
    price: 1000000,
    ingredients: [
      {
        name: "Lettuce",
        quantity: 5,
      },
      {
        name: "Cheese",
        quantity: Infinity,
      },
    ],
  },
];

shoppingCart[2].price = 13;
const burguer = shoppingCart[2];
burguer.price = 35;

for (const item of shoppingCart) {
  if (item.id === 3) {
    item.price = 15;
  }
}

console.clear();

const exampleObj = {
  name: "Lettuce",
  name: "Cheese",
};

console.log("exampleObj:", exampleObj);
exampleObj.isGreat = true;
console.log("exampleObj:", exampleObj);

const obj1 = {};
const obj2 = obj1;
console.log(obj1 === obj2);

obj1.whatever = "Nana speaks several languages";

console.log(obj2);

const arrExample = [{ name: "Vincent" }];

const getObject = arrExample[0];
Object.freeze(getObject);
getObject.from = "Germany";
getObject.age = 12;
getObject.whereWasHe = "on vacation";
console.log(arrExample);
