const list = [
  {
    name: "tgb1s5de1dc2tgbc5j9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2tgcbjj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2asbc5j9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2jhunmj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2nhyt3j9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2er5yhj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2cd5thj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2er3yhj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2vg2jbj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2liuy5j9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2xs2fgj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2we2fhj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2ds1hlj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2bfghlj9yu8j1n",
    isOpen: false,
    isFind: false,
  },
  {
    name: "tgb1s5de1dc2er2gcj9yu8j1n",
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
