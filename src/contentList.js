const list = [
  {
    name: "angular2",
    isOpen: false,
    isFind: false,
  },
  {
    name: "babel",
    isOpen: false,
    isFind: false,
  },
  {
    name: "bower",
    isOpen: false,
    isFind: false,
  },
  {
    name: "browserify",
    isOpen: false,
    isFind: false,
  },
  {
    name: "ember",
    isOpen: false,
    isFind: false,
  },
  {
    name: "grunt",
    isOpen: false,
    isFind: false,
  },
  {
    name: "gulp",
    isOpen: false,
    isFind: false,
  },
  {
    name: "ionic",
    isOpen: false,
    isFind: false,
  },
  {
    name: "meteor",
    isOpen: false,
    isFind: false,
  },
  {
    name: "nodejs",
    isOpen: false,
    isFind: false,
  },
  {
    name: "phantomjs",
    isOpen: false,
    isFind: false,
  },
  {
    name: "react",
    isOpen: false,
    isFind: false,
  },
  {
    name: "vue",
    isOpen: false,
    isFind: false,
  },
  {
    name: "yarn",
    isOpen: false,
    isFind: false,
  },
  {
    name: "yeoman",
    isOpen: false,
    isFind: false,
  },
];

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const cardList = shuffle([...list, ...list]);
