dataSetVersion = "2025-08-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game Entry",
    key: "games",
    tooltip: "Check this to restrict to certain game appearances.",
    checked: false,
    sub: [
      { name: "Drawn to Life", tooltip: "The 2007 game, Drawn to Life", key: "DTL" },
      { name: "The Next Chapter (DS)", tooltip: "The 2009 DS game, Drawn to Life: The Next Chapter", key: "TNC" },
      { name: "The Next Chapter (Wii)", tooltip: "The 2009 Wii game, Drawn to Life: The Next Chapter", key: "Wii" },
      { name: "Two Realms", tooltip: "The 2020 game, Drawn to Life: Two Realms", key: "TR" }
    ]
  },
  {
    name: "Filter by Relevance",
    key: "rel",
    tooltip: "Check this to restrict selection to characters of a specific relevance in the games. Each Character only has one relevance status.",
    checked: false,
    sub: [
      { name: "Story Characters", tooltip: "Only includes characters that have a speaking role in the main plot of a game. Includes Aldark and Wilfre.", key: "story" },
      { name: "Minor Characters", tooltip: "Only includes non-enemy characters that do not have a speaking role, as well as most Generic Raposa Characters.", key: "minor" },
      { name: "Mentioned Characters", tooltip: "Only includes characters (of any species) that are only named and never seen.", key: "mentioned" },
      { name: "Enemy", tooltip: "Only includes enemies from each game. Excludes all Shadows from Two Realms.", key: "enemy" },
      { name: "Bosses", tooltip: "Only includes bosses. Includes all Shadows from Two Realms.", key: "boss" },
      { name: "Fringe Characters", tooltip: "Only includes characters that are debatably not even characters such as Baki Engineer and Wanted Pirates.", key: "fringe" },
      { name: "Cut Characters", tooltip: "Only includes characters that were cut, regardless of intended relevance (e.g. Fortune Cookie, Tree King, Teeter all grouped together).", key: "cut" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Mari",
    img: "Mari.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Jowee",
    img: "Jowee.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Click",
    img: "Click.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Heathern",
    img: "Heathern.png",
    opts: {
      games: ["DTL", "TNC", "Wii"],
      rel: ["story"]
    }
  },
  {
    name: "Mayor",
    img: "Mayor.png",
    opts: {
      games: ["DTL", "TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Mike",
    img: "Mike.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Miney",
    img: "Miney.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Monkey King",
    img: "Monkey King.png",
    opts: {
      games: ["Wii"],
      rel: ["story"]
    }
  },
  {
    name: "Rose",
    img: "Rose.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Salem",
    img: "Salem.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Sock",
    img: "Sock.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Wilfre",
    img: "Wilfre.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story", "boss"]
    }
  },
  {
    name: "Isaac",
    img: "Isaac.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Hero (Drew)",
    img: "Drew.png",
    opts: {
      games: ["DTL", "TNC", "Wii"],
      rel: ["story"]
    }
  },
  {
    name: "Frostwind",
    img: "Frostwind.png",
    opts: {
      games: ["DTL"],
      rel: ["boss"]
    }
  },
  {
    name: "Deadwood",
    img: "Deadwood.png",
    opts: {
      games: ["DTL"],
      rel: ["boss"]
    }
  },
  {
    name: "Angler King",
    img: "Angler King.png",
    opts: {
      games: ["DTL"],
      rel: ["boss"]
    }
  },
  {
    name: "Wilfre's Scorpion",
    img: "Scorpion.png",
    opts: {
      games: ["DTL"],
      rel: ["boss"]
    }
  },
  {
    name: "Boss",
    img: "Boss.png",
    opts: {
      games: ["Wii"],
      rel: ["boss"]
    }
  },
  {
    name: "Giant Scribble Monster",
    img: "GSM.png",
    opts: {
      games: ["Wii"],
      rel: ["boss"]
    }
  },
  {
    name: "Baki Beard",
    img: "BakiBeard.png",
    opts: {
      games: ["TNC"],
      rel: ["boss"]
    }
  },
  {
    name: "Giant Robosa",
    img: "Giant Robosa.png",
    opts: {
      games: ["TNC"],
      rel: ["boss"]
    }
  },
  {
    name: "Queen",
    img: "Queen.png",
    opts: {
      games: ["TNC"],
      rel: ["boss"]
    }
  },
  {
    name: "King",
    img: "King.png",
    opts: {
      games: ["TNC"],
      rel: ["boss"]
    }
  },
  {
    name: "Circi",
    img: "Circi.png",
    opts: {
      games: ["Wii"],
      rel: ["story"]
    }
  },
  {
    name: "DJ",
    img: "DJ.png",
    opts: {
      games: ["Wii"],
      rel: ["story"]
    }
  },
  {
    name: "Erika",
    img: "Erika.png",
    opts: {
      games: ["Wii"],
      rel: ["story"]
    }
  },
  {
    name: "Aldark",
    img: "Aldark.png",
    opts: {
      games: ["TR"],
      rel: ["story", "boss"]
    }
  },
  {
    name: "Aly",
    img: "Aly.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Uncle Owen",
    img: "Uncle Owen.png",
    opts: {
      games: ["TR"],
      rel: ["mentioned"]
    }
  }
];
