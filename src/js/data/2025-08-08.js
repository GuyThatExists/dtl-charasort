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
    img: "SC Baki.png",
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
  },
  {
    name: "Alphonse",
    img: "Alphonse.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Antionette",
    img: "Antionette.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Constance",
    img: "Constance.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Desiree",
    img: "Desiree.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Ferdinand",
    img: "Ferdinand.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Florence",
    img: "Florence.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Francois",
    img: "Francois.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Gabriel",
    img: "Gabriel.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Genevieve",
    img: "Genevieve.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Jacques",
    img: "Jacques.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Josephine",
    img: "Josephine.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Leopold",
    img: "Leopold.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Madeliene",
    img: "Madeliene.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Maximilien",
    img: "Maximilien.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Penelope",
    img: "Penelope.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Robespierre",
    img: "Robespierre.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Sebastien",
    img: "Sebastien.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Valentine",
    img: "Valentine.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Veronique",
    img: "Veronique.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Yvonne",
    img: "Yvonne.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Police Officer",
    img: "Police Officer.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Bernard",
    img: "Bernard.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Chandice",
    img: "Chandice.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Cherry",
    img: "Cherry.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Crazy Diggz",
    img: "Crazy Diggz.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Ellen",
    img: "Ellen.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Flint",
    img: "Flint.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Gertrude",
    img: "Gertrude.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Levi",
    img: "Levi.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Melon",
    img: "Melon.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Mick",
    img: "Mick.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Nanci",
    img: "Nanci.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Rocko",
    img: "Rocko.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Russet",
    img: "Russet.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Spike",
    img: "Spike.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Sprocket",
    img: "Sprocket.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Akamu",
    img: "Akamu.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Iolani",
    img: "Iolani.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Kaihe",
    img: "Kaihe.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Kamalah",
    img: "Kamalah.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Moani",
    img: "Moani.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Hoaka",
    img: "Hoaka.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "The Council",
    img: "The Council.png",
    opts: {
      games: ["TNC"],
      rel: ["story"]
    }
  },
  {
    name: "Council Room Dolls",
    img: "Council Dolls.png",
    opts: {
      games: ["TNC"],
      rel: ["fringe"]
    }
  },
  {
    name: "Amy",
    img: "Amy.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Kyren",
    img: "Kyren.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Nima",
    img: "Nima.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Oma",
    img: "Oma.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Pouches",
    img: "Pouches.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Baki Thief",
    img: "Baki Thief.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Carrier Robot",
    img: "Carrier Robot.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Dandyshroom",
    img: "Dandyshroom.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Kuragekko",
    img: "Kuragekko.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Shork",
    img: "Shork.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Stumps",
    img: "Stumps.png",
    opts: {
      games: ["DTL", "TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Anita",
    img: "Anita.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Benedict",
    img: "Benedict.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Billy Yonder",
    img: "Billy Yonder.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Bo",
    img: "Bo.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Bobby Tweeth",
    img: "Bobby Tweeth.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Franco Key",
    img: "Franco Key.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Frank",
    img: "Frank.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Gary",
    img: "Gary.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Helen",
    img: "Helen.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Jeff",
    img: "Jeff.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Kate",
    img: "Kate.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Kone",
    img: "Kone.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Luke",
    img: "Luke.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Matt Swipe",
    img: "Matt Swipe.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Mo",
    img: "Mo.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Mr. Bonkles",
    img: "Mr Bonkles.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Mr. Celek",
    img: "Mr Celek.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Mr. Ford",
    img: "Mr Ford.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Mrs. Esow",
    img: "Mrs Esow.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Ole Man Zachary",
    img: "Old Man Zachary.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Professor Chuck",
    img: "Prof Chuck.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Reginald Freeman",
    img: "Reginald Freeman.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Tiffany",
    img: "Tiffany.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Willy Martinez",
    img: "Willy Martinez.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Yeti",
    img: "Yeti DS.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Snow Hider",
    img: "Snow Hider.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Shadow Walker",
    img: "Shadow Walker.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Timber Baki",
    img: "Timber Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Star Baki",
    img: "Star Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Clockwork Baki",
    img: "Clockwork Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Dandelion Flyer",
    img: "Dendelion Flyer.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Flyin' Rabbit",
    img: "Flyin Rabbit.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Biggs",
    img: "Biggs.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Shadow Crawler",
    img: "Shadow Crawler.png",
    opts: {
      games: ["DTL"],
      rel: ["boss"]
    }
  },
  {
    name: "Shadow Grabber",
    img: "Shadow Grabber.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Sand Baki",
    img: "Sand Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Aquatic Baki",
    img: "Aquatic Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Sea Slug",
    img: "Sea Slug.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Anemone",
    img: "Anemone.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Anchorpus",
    img: "Anchorpus.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Shadow Fish",
    img: "Shadow Fish.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Golden Baki",
    img: "Golden Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Giant Golden Baki",
    img: "Giant Golden Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Shadow Golem",
    img: "Shadow Golem.png",
    opts: {
      games: ["DTL"],
      rel: ["enemy"]
    }
  },
  {
    name: "Shadow Cluster",
    img: "Shadow Cluster.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Farmer Brown's Family",
    img: "Farmer Brown Family.png",
    opts: {
      games: ["DTL"],
      rel: ["story"]
    }
  },
  {
    name: "Cookie's Assistants",
    img: "Cookie Assistants.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Tubba and Bubba's Parents",
    img: "Tubba Family.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Elder Raposa rescued with Zsasha",
    img: "Zsasha Elder.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Zsasha's Adopted Daughter",
    img: "Zsasha Daughter.png",
    opts: {
      games: ["DTL"],
      rel: ["story"]
    }
  },
  {
    name: "Cricket's Deputies",
    img: "Cricket Deputies.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "NavyJ's Groupies",
    img: "NavyJ Groupies.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Galileo's Family",
    img: "Galileo Family.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Crazy Barks' Crew",
    img: "Crazy Barks Crew.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Bubba's Caretakers",
    img: "Bubba Caretakers.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Indee's Family",
    img: "Indee Family.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Pirate Beard's Crew",
    img: "Pirate Beard Crew.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Rapokids rescued with Mike",
    img: "Mike Raposa.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Unagi's Assistants",
    img: "Unagi Assistants.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Dr. Cure's Assistant",
    img: "Cure Assistant.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Dr. Cure's Husband",
    img: "Cure Husband.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Creator",
    img: "Creator.png",
    opts: {
      games: ["DTL", "TNC", "Wii", "TR"],
      rel: ["story"]
    }
  },
  {
    name: "Cumulus",
    img: "Cumulus.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Hermit Crab",
    img: "Hermit Crab.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Manic Baki",
    img: "Manic Baki.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Molemite",
    img: "Molemite.png",
    opts: {
      games: ["TNC", "TR"],
      rel: ["enemy", "minor"]
    }
  },
  {
    name: "Rocky Baki",
    img: "Rocky Baki.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Seedlee",
    img: "Seedlee.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Taz",
    img: "Taz.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Dodo",
    img: "Dodo.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Pirates",
    img: "Baki Pirates.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Sub",
    img: "Baki Sub.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Ghost Captain",
    img: "Baki Ghost Captain.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Ghost Swabby",
    img: "Baki Ghost Swabby.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Pilot Bird",
    img: "Pilot Bird.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Starfish",
    img: "Starfish.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Accordion Fish",
    img: "Accordion Fish.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Tentacle Monster",
    img: "Tentacle Monster.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Raposa Statue",
    img: "Raposa Statues.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Sheepdog",
    img: "Sheepdog.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Jazz Fish",
    img: "Jazz Fish.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Sea Harp",
    img: "Sea Harp.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Spike Ball Bubblers",
    img: "Spike Ball Bubblers.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Anglerfish",
    img: "Anglerfish.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Burnas",
    img: "Baki Burnas.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Firefly",
    img: "Firefly.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki U.F.O.",
    img: "Baki UFO.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Duck Sentry",
    img: "Duck Sentry.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Vine Beetle",
    img: "Vine Beetle.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Lancer",
    img: "Baki Lancers.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Space Chomper",
    img: "Space Chomper.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Baki Space Bus",
    img: "Baki Space Bus.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Sad Storm Cloud",
    img: "Sad Storm Cloud.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Flea",
    img: "Flea.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Angry Sun",
    img: "Angry Sun.png",
    opts: {
      games: ["TNC"],
      rel: ["enemy"]
    }
  },
  {
    name: "Chris Richards",
    img: "Chris Richards.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Zachariah",
    img: "Zachariah.png",
    opts: {
      games: ["TR"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "ENM7",
    img: "ENM7.png",
    opts: {
      games: ["TR"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Teeter",
    img: "Teeter.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Hoop",
    img: "Hoop.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Seeker",
    img: "Seeker.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Leapling",
    img: "Leapling.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Dodger",
    img: "Dodger.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Ice Doot",
    img: "Ice Doot.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Inflatable Hero",
    img: "Inflatable Hero.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Decoy",
    img: "Decoy.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Haunt",
    img: "Haunt.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "SuperRapo",
    img: "SuperRapo.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "HoverHearth",
    img: "HoverHearth.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Chimera",
    img: "Chimera.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Golem",
    img: "Golem.png",
    opts: {
      games: ["TR"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Alana",
    img: "Alana.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Nolan",
    img: "Nolan.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Two Realms Humans",
    img: "Cut TR Humans.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Two Realms Raposa",
    img: "Cut TR Raposa.png",
    opts: {
      games: ["TR"],
      rel: ["cut"]
    }
  },
  {
    name: "Belleview Park Statue Woman",
    img: "Park Statue Woman.png",
    opts: {
      games: ["TR"],
      rel: ["fringe"]
    }
  },
  {
    name: "Fiora",
    img: "Fiora.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Lambert",
    img: "Lambert.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Beta Sock Designs",
    img: "Socks.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Brown-Furred Lavasteam Raposa",
    img: "Brown Lavasteam Raposa.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Grey-Furred Lavasteam Raposa",
    img: "Grey Lavasteam Raposa.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Shadow Mari",
    img: "Shadow Mari.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Concept Galactic Jungle Enemies",
    img: "Concept Galactic Jungle Enemies.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Rocket Vulture",
    img: "Rocket Vulture.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Dinofrog",
    img: "Dinofrog.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Concept Wilfre's Wasteland Raposa",
    img: "Concept Wilfres Wasteland Raposa.png",
    opts: {
      games: ["TNC"],
      rel: ["cut"]
    }
  },
  {
    name: "Repair Guy",
    img: "Repair Guy.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Fortune Cookie",
    img: "Fortune Cookie.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Miah + Kaori",
    img: "Miah + Kaori.png",
    opts: {
      games: ["DTL"],
      rel: ["fringe"]
    }
  },
  {
    name: "Miner Raposa",
    img: "Miner Raposa.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Mike O'Angelo",
    img: "Mike OAngelo.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Fujikoda",
    img: "Fujikoda.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Fire Bill",
    img: "Fire Bill.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "El Chipo",
    img: "El Chippo.png",
    opts: {
      games: ["DTL"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Orange-Furred / Grey Shadow Wilfre",
    img: "Orange Wilfre.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Cecil",
    img: "Cecil.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Drakon",
    img: "Drakon.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Red Dragon",
    img: "Red Dragon.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "2005 Title Screen Humans",
    img: "Original Title Screen Humans.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Beta Title Screen Raposa",
    img: "Original Title Screen Raposa.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Medieval Droogles",
    img: "Medieval Droogles.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Miltary Droogles",
    img: "Military Droogles.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Skate Droogles",
    img: "Skate Droogles.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Ninja Droogles",
    img: "Ninja Droogles.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Rata, Tat & Tat",
    img: "Rata Tat TaT.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Blue Droogles",
    img: "Blue Droogles.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Beta Timber Baki",
    img: "Beta Timber Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Shadow Enemies",
    img: "Cut Shadow Enemies.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Snow Gate Enemies",
    img: "Cut Snow Gate Enemies.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Forest Gate Enemies",
    img: "Cut Forest Gate Enemies.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Beach Gate Enemies",
    img: "Cut Beach Gate Enemies.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut City Gate Enemeis",
    img: "Cut City Gate Enemies.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Meadow Gate Enemies",
    img: "Meadow Gate Enemies.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Miscellaneous Concept Enemies",
    img: "Misc Concept Enemies.png",
    opts: {
      games: ["DTL"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Pet",
    img: "Pet.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Beta Crazy Barks Design",
    img: "Beta Crazy Barks.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "Jungle Raposa",
    img: "Jungle Raposa.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Tree King",
    img: "Tree King.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Hero (Two Realms)",
    img: "Hero TR.png",
    opts: {
      games: ["TR"],
      rel: ["story"]
    }
  },
  {
    name: "Cutscene-Exclusive Watersong Raposa",
    img: "Cutscene Watersong Raposa.png",
    opts: {
      games: ["TNC"],
      rel: ["fringe"]
    }
  },
  {
    name: "Wilfre's Wasteland Villagers",
    img: "Wasteland Raposa.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Nude Raposa Sports Spectators",
    img: "Nude Raposa.png",
    opts: {
      games: ["Wii"],
      rel: ["fringe"]
    }
  },
  {
    name: "Ancient Baki",
    img: "Ancient Baki.png",
    opts: {
      games: ["DTL"],
      rel: ["fringe"]
    }
  },
  {
    name: "Shadow Lair",
    img: "Shadow Lair.png",
    opts: {
      games: ["DTL"],
      rel: ["fringe"]
    }
  },
  {
    name: "The Family that left Jowee's House",
    img: "Family from Jowee House.png",
    opts: {
      games: ["DTL"],
      rel: ["fringe"]
    }
  },
  {
    name: "Beta Monkey King",
    img: "Wise Monkey King.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Snow People",
    img: "Snow People.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Jinxy",
    img: "Jinxy.png",
    opts: {
      games: ["Wii"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Hans, Doug, Zak, and Mac",
    img: "Hans Doug Zak Mac.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Shopkeeper",
    img: "Beta Wii Shopkeeper.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Oneeye",
    img: "Oneeye.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Jangala Enemies",
    img: "Cut Jangala Enemies.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Eric Kozlowsky's Unused Enemies",
    img: "Eric Kozlowsky Enemies.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Shadow City Enemies",
    img: "Cut Shadow City Enemies.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Icy Wastes Enemies",
    img: "Cut Icy Wastes Enemies.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Great Sea Enemies",
    img: "Great Sea Enemies.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Unused Baki Designs",
    img: "Beta Wii Bakis.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "boss_zed",
    img: "boss_zed.png",
    opts: {
      games: ["Wii"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Yeti",
    img: "Yeti Boss.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Squid",
    img: "Squid.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Cut Sentient Vehicles",
    img: "Cut Sentient Vehicles.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Cutscene Template Figures",
    img: "Cutscene Template Figures.png",
    opts: {
      games: ["Wii"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Beta Monkey",
    img: "Beta Monkey.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Beta Title Screen Characters",
    img: "Beta Wii Title Screen Characters.png",
    opts: {
      games: ["Wii"],
      rel: ["cut", "fringe"]
    }
  },
  {
    name: "Wilfre's Raposa/Shadow Hybrid",
    img: "Hybrid.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Concept Boxart Heroes",
    img: "Beta Boxart Heroes.png",
    opts: {
      games: ["DTL"],
      rel: ["cut"]
    }
  },
  {
    name: "YoYaYa",
    img: "YoYaYa.png",
    opts: {
      games: ["TR"],
      rel: ["minor"]
    }
  },
  {
    name: "Mari and Jowee Dolls",
    img: "Mari and Jowee Dolls.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Mr. and Mrs. Row",
    img: "Row Parents.png",
    opts: {
      games: ["TNC"],
      rel: ["minor"]
    }
  },
  {
    name: "Noncanon Row Family",
    img: "Row Family NC.png",
    opts: {
      games: ["Wii"],
      rel: ["cut"]
    }
  },
  {
    name: "Rapoville Lighthouse",
    img: "Rapoville Lighthouse.png",
    opts: {
      games: ["DTL"],
      rel: ["fringe"]
    }
  },
  {
    name: "Samuel's Wise Elder",
    img: "Samuels Wise Elder.png",
    opts: {
      games: ["TNC"],
      rel: ["mentioned"]
    }
  },
  {
    name: "Brian Firfer",
    img: "Brian Firfer.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "David J. Franco",
    img: "David J Franco.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Ian Hall",
    img: "Ian Hall.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "James Youngman",
    img: "James Youngman.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Jeff Luke",
    img: "Jeff Luke.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Joseph Tringali",
    img: "Joseph Tringali.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Karina Lye See Mun",
    img: "Karina Lye See Mun.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Paul Robertson",
    img: "Paul Robertson.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Sherman Chin",
    img: "Sherman Chin.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Steve Chiavelli",
    img: "Steve Chiavelli.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Zachary Brown",
    img: "Zachary Brown.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Brett Caird",
    img: "Brett Caird.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Chow Chern Fai",
    img: "Chow Chern Fai.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Chuck Skoda",
    img: "Chuck Skoda.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Jeremiah Slaczka",
    img: "Jeremiah Slazcka.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Luke Thompson",
    img: "Luke Thompson.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "Marius Fahlbusch",
    img: "Marius Fahlbusch.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  },
  {
    name: "O'wes Beck",
    img: "Owes Beck.png",
    opts: {
      games: ["DTL"],
      rel: ["minor"]
    }
  }
];
