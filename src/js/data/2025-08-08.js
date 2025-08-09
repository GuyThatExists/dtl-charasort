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
    checked: true,
    sub: [
      { name: "Story Characters", tooltip: "Only includes characters that have a speaking role in the main plot of a game. Includes Aldark and Wilfre.", key: "story" },
      { name: "Minor Characters", tooltip: "Only includes characters that do not have a speaking role, as well as most Generic Raposa Characters. Includes TR Overworld enemies.", key: "minor" },
      { name: "Mentioned Characters", tooltip: "Only includes characters (of any species) that are only named and never seen.", key: "mentioned", checked: false },
      { name: "Enemy", tooltip: "Only includes enemies from each game. Excludes all Shadows from Two Realms.", key: "enemy", checked: false },
      { name: "Bosses", tooltip: "Only includes bosses. Includes all Shadows from Two Realms.", key: "boss" },
      { name: "Fringe Characters", tooltip: "Only includes characters that are debatably not even characters such as Baki Engineer and Wanted Pirates.", key: "fringe", checked: false },
      { name: "Cut Characters", tooltip: "Only includes characters that were cut, regardless of intended relevance (e.g. Fortune Cookie, Tree King, Teeter all grouped together).", key: "cut", checked: false }
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
  },
  {
    name: "Green Baki",
    img: "Green Baki.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "E'Squire",
    img: "Esquire.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Sasquatch",
    img: "Sasquatch.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Acorn Baki",
    img: "Acorn Baki.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Dart Bonobo",
    img: "Dart Bonobo.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Balloon",
    img: "Balloon.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Snow Bird",
    img: "Snow Bird.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Boom Baki",
    img: "Boom Baki.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Snow Warrior",
    img: "Snow Warrior.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Bounce",
    img: "Bounce.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Yeti",
    img: "Yeti Wii.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Cactus Baki",
    img: "Cactus Baki.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Fire Baki",
    img: "Fire Baki.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Monkey",
    img: "Monkey.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Flipper",
    img: "Flipper.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Snow Cat",
    img: "Snow Cat.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Grabber",
    img: "Grabber.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Dreamer",
    img: "Dreamer.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Heavy Twins",
    img: "Heavy Twins.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Watersong Warrior",
    img: "Watersong Warrior.png",
    opts: {
      games: ["TNC"],
      rel: ["fringe"]
    }
  },
  {
    name: "Hootlamp",
    img: "Hootlamp.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Wanted Pirate",
    img: "Wanted Pirates.png",
    opts: {
      games: ["TNC"],
      rel: ["fringe"]
    }
  },
  {
    name: "Baki Engineer",
    img: "Baki Engineer.png",
    opts: {
      games: ["TNC"],
      rel: ["fringe"]
    }
  },
  {
    name: "Hopper",
    img: "Hopper.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Miner",
    img: "Baki Miner.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Megamini",
    img: "Megamini.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Baki Chimneysweep",
    img: "Chimneysweep.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Octoshot",
    img: "Octoshot.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Baki Turret",
    img: "Baki Turret.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Pengoon",
    img: "Pengoon.png",
    opts: {
      games: ["DTL", "TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Box Monster",
    img: "Box Monster.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Rolly",
    img: "Rolly.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Seedling",
    img: "Seedling.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Moon Baki",
    img: "Moon Baki.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Spiky Stan",
    img: "Spiky Stan.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Grey Baki",
    img: "Grey Baki.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Spring",
    img: "Spring.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Shadow Fountain",
    img: "Shadow Fountain.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Spikes",
    img: "Spikes.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Shadow Bird",
    img: "Shadow Bird.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Squwacky",
    img: "Squwacky.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Snow Baki",
    img: "Snow Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Snowget",
    img: "Snowget.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Swooper",
    img: "Swooper.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Bucket Jelly",
    img: "Bucket Jelly.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "SwordFisher",
    img: "SwordFisher.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Ameba",
    img: "Ameba.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Wind Doot",
    img: "Wind Doot.png",
    opts: {
      games: ["TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Ancient Raposa",
    img: "Ancient Raposa.png",
    opts: {
      games: ["TNC"],
      rel: ["fringe"]
    }
  },
  {
    name: "Wood Baki",
    img: "Wood Baki.png",
    opts: {
      games: ["TR"],
      rel: ["enemy"]
    }
  },
  {
    name: "Bruce Lannialli",
    img: "Bruce.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Chef Cookie",
    img: "Cookie.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Crazy Barks",
    img: "Crazy Barks.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Bubba",
    img: "Bubba.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Tubba",
    img: "Tubba.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Cricket",
    img: "Cricket.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Count Choco",
    img: "Count Choco.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Farmer Brown",
    img: "Farmer Brown.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Deputy Snyder",
    img: "Deputy Snyder.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Galileo",
    img: "Galileo.png",
    opts: {
      games: ["DTL", "Wii", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Dr. Cure",
    img: "Dr. Cure.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Pirate Beard",
    img: "Pirate Beard.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Dr. Curie",
    img: "Dr. Curie.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Heather",
    img: "Heather.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Zsasha",
    img: "Zsasha.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Indee",
    img: "Indee.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Robosa",
    img: "Robosa.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Miles",
    img: "Miles.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Hose Dragon",
    img: "Hose Dragon.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Mr. Esow",
    img: "Mr Esow.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Key",
    img: "Key.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "NavyJ",
    img: "NavyJ.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Mildew",
    img: "Mildew.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Moe",
    img: "Moe.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Cindi",
    img: "Cindi.png",
    opts: {
      games: ["DTL", "TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Shadow Bat",
    img: "Shadow Bat.png",
    opts: {
      games: ["DTL", "Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Butler",
    img: "Butler.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Shadow Ghoul",
    img: "Shadow Ghoul.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "S.P.U.D.",
    img: "SPUD.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Bonobo",
    img: "Bonobo.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Samuel",
    img: "Samuel.png",
    opts: {
      games: ["DTL", "TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Eastern Winds Baki",
    img: "EW Baki.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Arrogance",
    img: "Arrogance.png",
    opts: {
      games: ["TR"],
      rel: ["boss"]
    }
  },
  {
    name: "Desperate",
    img: "Desperate.png",
    opts: {
      games: ["TR"],
      rel: ["boss"]
    }
  },
  {
    name: "Red Fish",
    img: "Red Fish.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Furious",
    img: "Furious.png",
    opts: {
      games: ["TR"],
      rel: ["boss"]
    }
  },
  {
    name: "Large Shadow Bat",
    img: "Large Shadow bat.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Maximus",
    img: "Maximus.png",
    opts: {
      games: ["TR"],
      rel: ["boss"]
    }
  },
  {
    name: "Giant Shadow Walker",
    img: "Giant Shadow Walker.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Minimus",
    img: "Minimus.png",
    opts: {
      games: ["TR"],
      rel: ["boss"]
    }
  },
  {
    name: "Icy Wastes Baki",
    img: "IW Baki.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Ranger Marxx / SPUD Recruit",
    img: "Marxx.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["story", "minor"]
    }
  },
  {
    name: "Jangala Baki",
    img: "Jangala Baki.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Lightning Bug",
    img: "Lightning Bug.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Teo",
    img: "Teo.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Masked Bonobo",
    img: "Masked Bonobo.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Tony",
    img: "Tony.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Masked Warrior",
    img: "Masked Warrior.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Platform Fish",
    img: "Platform Fish.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Unagi",
    img: "Unagi.png",
    opts: {
      games: ["DTL", "TNC", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Shadow City Baki",
    img: "Shadow City Baki.png",
    opts: {
      games: ["Wii"],
      rel: ["enemy"]
    }
  },
  {
    name: "Mya",
    img: "Mya.png",
    opts: {
      games: ["DTL", "TR"],
      rel: ["story", "minor"]
    }
  }
];
