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
    tooltip: "Check this to restrict selection to characters of a specific relevance in the games.",
    checked: false,
    sub: [
      { name: "Story Characters", tooltip: "Only includes characters that have a speaking role in the main plot of a game.", key: "story" },
      { name: "Minor Characters", tooltip: "Only includes non-enemy characters that do not have a speaking role, as well as most Generic Raposa Characters.", key: "minor" },
      { name: "Enemy", tooltip: "Only includes enemies from each game. Excludes all Shadows from Two Realms.", key: "enemy" },
      { name: "Bosses", tooltip: "Only includes bosses. Includes all Shadows from Two Realms", key: "boss" },
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
  }
];
