// Family tree data in family-chart's expected shape: a flat array of
// people, each with a unique id and a "rels" object referencing other
// people's ids. Relationships must be recorded on both sides (e.g. a
// spouse link needs an entry in each person's rels.spouses).
// See https://github.com/donatso/family-chart/blob/master/docs/data-format.md
var familyTreeData = [
  {
    id: "1",
    data: {
      "first name": "Jan Patrick",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      spouses: ["2"],
      children: ["3", "4"],
      parents: ["5", "6"]
    }
  },
  {
    id: "7",
    data: {
      "first name": "Joseph Jr",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      spouses: ["9"],
      children: ["14", "15"],
      parents: ["5", "6"]
    }
  },
  {
    id: "8",
    data: {
      "first name": "Joan Patricia",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      spouses: ["10"],
      children: ["11", "12", "13"],
      parents: ["5", "6"]
    }
  },
  {
    id: "2",
    data: {
      "first name": "Mee Hyang",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      spouses: ["1"],
      children: ["3", "4"]
    }
  },
  {
    id: "3",
    data: {
      "first name": "Aiden",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["1", "2"]
    }
  },
  {
    id: "4",
    data: {
      "first name": "Avery",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      parents: ["1", "2"]
    }
  },
  {
    id: "5",
    data: {
      "first name": "Emiliana",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      spouses: ["6"],
      parents: ["18", "19"],
      children: ["1", "7", "8"]
    }
  },
  {
    id: "6",
    data: {
      "first name": "Joseph",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      spouses: ["5"],
      parents: ["16", "17"],
      children: ["1", "7", "8"]
    }
  },
  {
    id: "9",
    data: {
      "first name": "Reizchel",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      spouses: ["7"],
      children: ["14", "15"]
    }
  },
  {
    id: "10",
    data: {
      "first name": "Roi",
      "last name": "De Guzman",
      gender: "M"
    },
    rels: {
      spouses: ["8"],
      children: ["11", "12", "13"]
    }
  },
  {
    id: "11",
    data: {
      "first name": "Joaquin",
      "last name": "De Guzman",
      gender: "M"
    },
    rels: {
      parents: ["8", "10"]
    }
  },
  {
    id: "12",
    data: {
      "first name": "Anaia",
      "last name": "De Guzman",
      gender: "F"
    },
    rels: {
      parents: ["8", "10"]
    }
  },
  {
    id: "13",
    data: {
      "first name": "Ayla",
      "last name": "De Guzman",
      gender: "F"
    },
    rels: {
      parents: ["8", "10"]
    }
  },
  {
    id: "14",
    data: {
      "first name": "Joseph III",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["7", "9"]
    }
  },
  {
    id: "15",
    data: {
      "first name": "Raven",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      parents: ["7", "9"]
    }
  },
  {
    id: "16",
    data: {
      "first name": "Severino",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      spouses: ["17"],
      children: ["6", "20", "21", "22", "23", "24"]
    }
  },
  {
    id: "17",
    data: {
      "first name": "Evelina",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      spouses: ["16"],
      children: ["6", "20", "21", "22", "23", "24"]
    }
  },
  {
    id: "18",
    data: {
      "first name": "Porfirio",
      "last name": "Rivas",
      gender: "M"
    },
    rels: {
      spouses: ["19"],
      children: ["5"]
    }
  },
  {
    id: "19",
    data: {
      "first name": "Esther",
      "last name": "Rivas",
      gender: "F"
    },
    rels: {
      spouses: ["18"],
      children: ["5"]
    }
  },
  {
    id: "20",
    data: {
      "first name": "Joselito",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      spouses: ["25"],
      children: ["26", "27", "28", "29"],
      parents: ["16", "17"]
    }
  },
  {
    id: "21",
    data: {
      "first name": "Divina",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      parents: ["16", "17"]
    }
  },
  {
    id: "22",
    data: {
      "first name": "Patrick",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["16", "17"]
    }
  },
  {
    id: "23",
    data: {
      "first name": "Raymond",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["16", "17"]
    }
  },
  {
    id: "24",
    data: {
      "first name": "Marcelino",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["16", "17"]
    }
  },
  {
    id: "25",
    data: {
      "first name": "Evelyn",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      spouses: ["20"],
      children: ["26", "27", "28", "29"]
    }
  },
  {
    id: "26",
    data: {
      "first name": "John Claudio",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["20", "25"]
    }
  },
  {
    id: "27",
    data: {
      "first name": "Joselito Jr",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["20", "25"]
    }
  },
  {
    id: "28",
    data: {
      "first name": "Joevelyn",
      "last name": "Lara",
      gender: "F"
    },
    rels: {
      parents: ["20", "25"]
    }
  },
  {
    id: "29",
    data: {
      "first name": "John Francis",
      "last name": "Lara",
      gender: "M"
    },
    rels: {
      parents: ["20", "25"]
    }
  }
];
