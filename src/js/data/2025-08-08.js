dataSetVersion = "2023-05-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Homestuck", tooltip: "Only the original webcomic, Acts 1 to 7.", key: "HS" }
    ]
  },
  {
    name: "Filter by race",
    key: "race",
    tooltip: "Check this to restrict to characters that are of a particular race.",
    checked: false,
    sub: [
      { name: "Human", key: "human" },
      { name: "Troll", key: "troll" },
      { name: "Cherub", key: "cherub" },
      { name: "Sprite", key: "sprite" },
      { name: "First Guardian", key: "guard" },
      { name: "Leprechaun", key: "felt" },
      { name: "Carapacian", key: "carap" },
      { name: "Denizen", key: "deniz" },
      { name: "God Tier", key: "god" },
      { name: "Other (animals, robots…)", key: "other" }
    ]
  },
  {
    name: "Remove paradox adults",
    key: "adult",
    tooltip: "Check this to keep only the kid version of the Alpha and Beta kids. Also removes the adult Dancestors.",
    checked: false
  },
  {
    name: "Remove meta Characters",
    key: "meta",
    tooltip: "Check this to remove all characters outside of the fourth wall: Andrew Hussie, MSPA Reader and Ms. Paint.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  // "A"
  {
    name: "Abraxas",
    img: "abraxas.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  },
  {
    name: "Aimless Renegade",
    img: "ar.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Alternate Calliope",
    img: "altcalliope.webp",
    opts: {
      series: ["HS"],
      race: ["cherub", "god"],
      adult: true
    }
  },
  {
    name: "Andrew Hussie",
    img: "hussie.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      meta: true
    }
  },
  {
    name: "Aradia Megido",
    img: "aradia.webp",
    opts: {
      series: ["HS"],
      race: ["troll", "god"]
    }
  },
  {
    name: "Aranea Serket",
    img: "aranea.webp",
    opts: {
      series: ["HS"],
      race: ["troll", "god"]
    }
  },
  {
    name: "Marquise Spinneret Mindfang",
    img: "aranea2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Arquiusprite",
    img: "arquiusprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite", "troll"]
    }
  },
  // "B"
  {
    name: "Becquerel",
    img: "becquerel.webp",
    opts: {
      series: ["HS"],
      race: ["guard"]
    }
  },
  {
    name: "Biscuits",
    img: "biscuits.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Black King",
    img: "bk.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Black Queen",
    img: "bq.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  // "C"
  {
    name: "Caliborn",
    img: "caliborn.webp",
    opts: {
      series: ["HS"],
      race: ["cherub", "god"]
    }
  },
  {
    name: "Calliope",
    img: "calliope.webp",
    opts: {
      series: ["HS"],
      race: ["cherub"]
    }
  },
  {
    name: "Calsprite",
    img: "calsprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite"]
    }
  },
  {
    name: "Cans",
    img: "cans.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Casey",
    img: "casey.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Cetus",
    img: "cetus.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  },
  {
    name: "Clover",
    img: "clover.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Club Deuce",
    img: "cd.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Colonel Sassacre",
    img: "sassacre.webp",
    opts: {
      series: ["HS"],
      race: ["human"]
    }
  },
  {
    name: "The Condesce",
    img: "condesce.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Courtyard Droll",
    img: "cd2.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Cronus Ampora",
    img: "cronus.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Orphaner Dualscar",
    img: "cronus2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Crowbar",
    img: "crowbar.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  // "D"
  {
    name: "Dad",
    img: "dad.webp",
    opts: {
      series: ["HS"],
      race: ["human"]
    }
  },
  {
    name: "Damara Megido",
    img: "damara.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "The Handmaid",
    img: "damara2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Dave Strider",
    img: "dave.webp",
    opts: {
      series: ["HS"],
      race: ["human", "god"]
    }
  },
  {
    name: "Dave Strider (post-scratch)",
    img: "dave2.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      adult: true
    }
  },
  {
    name: "Davepetasprite^2",
    img: "davepetasprite2.webp",
    opts: {
      series: ["HS"],
      race: ["sprite", "troll", "human"]
    }
  },
  {
    name: "Davesprite",
    img: "davesprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite", "human"]
    }
  },
  {
    name: "Diamonds Droog",
    img: "dd.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Die",
    img: "die.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Dirk Strider",
    img: "dirk.webp",
    opts: {
      series: ["HS"],
      race: ["human", "god"]
    }
  },
  {
    name: "Bro Strider",
    img: "bro.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      adult: true
    }
  },
  {
    name: "Brobot",
    img: "brobot.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Bunny (Liv Tyler/Lil Sebastian, etc.)",
    img: "bunny.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Doc Scratch",
    img: "docscratch.webp",
    opts: {
      series: ["HS"],
      race: ["guard"]
    }
  },
  {
    name: "Doze",
    img: "doze.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Draconian Dignitary",
    img: "dd2.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  // "E"
  {
    name: "Echidna",
    img: "echidna.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  },
  {
    name: "Eggs",
    img: "eggs.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Equius Zahhak",
    img: "equius.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Eridan Ampora",
    img: "eridan.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Erisolsprite",
    img: "erisolsprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite", "troll"]
    }
  },
  // "F"
  {
    name: "Feferi Peixes",
    img: "feferi.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Fefetasprite",
    img: "fefetasprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite", "troll"]
    }
  },
  {
    name: "Fin",
    img: "fin.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  // "G"
  {
    name: "Gamzee Makara",
    img: "gamzee.webp",
    opts: {
      series: ["HS"],
      race: ["troll", "god"]
    }
  },
  {
    name: "Gcatavrosprite",
    img: "gcatavrosprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite", "guard", "troll"]
    }
  },
  {
    name: "Genesis Frog (Bilious Slick)",
    img: "genesisfrog.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "God Cat",
    img: "godcat.webp",
    opts: {
      series: ["HS"],
      race: ["guard"]
    }
  },
  // "H"
  {
    name: "Hearts Boxcars",
    img: "hb.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Hegemonic Brute",
    img: "hb2.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Hemera",
    img: "hemera.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  },
  {
    name: "Hephaestus",
    img: "hephaestus.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  },
  {
    name: "Horuss Zahhak",
    img: "horuss.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Darkleer",
    img: "horuss2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  // "I"
  {
    name: "Itchy",
    img: "itchy.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  // "J"
  {
    name: "Jack Noir",
    img: "jack.webp",
    opts: {
      series: ["HS"],
      race: ["carap", "guard"]
    }
  },
  {
    name: "Jack Noir (B2)",
    img: "jack2.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Jade English",
    img: "jade2.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      adult: true
    }
  },
  {
    name: "Jade Harley",
    img: "jade.webp",
    opts: {
      series: ["HS"],
      race: ["human", "guard", "god"]
    }
  },
  {
    name: "Jadesprite",
    img: "jadesprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite", "human", "guard"]
    }
  },
  {
    name: "Jake English",
    img: "jake.webp",
    opts: {
      series: ["HS"],
      race: ["human", "god"]
    }
  },
  {
    name: "Grandpa Harley",
    img: "grandpa.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      adult: true
    }
  },
  {
    name: "Jane Crocker",
    img: "jane.webp",
    opts: {
      series: ["HS"],
      race: ["human", "god"]
    }
  },
  {
    name: "Nannasprite (Jane Egbert)",
    img: "nannasprite.webp",
    opts: {
      series: ["HS"],
      race: ["human", "sprite"],
      adult: true
    }
  },
  {
    name: "Jaspersprite",
    img: "jaspersprite.webp",
    opts: {
      series: ["HS"],
      race: ["sprite"]
    }
  },
  {
    name: "Jasprosesprite^2",
    img: "jasprosesprite2.webp",
    opts: {
      series: ["HS"],
      race: ["human", "sprite", "god"]
    }
  },
  {
    name: "John Crocker",
    img: "john2.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      adult: true
    }
  },
  {
    name: "John Egbert",
    img: "john.webp",
    opts: {
      series: ["HS"],
      race: ["human", "god"]
    }
  },
  // "K"
  {
    name: "Kanaya Maryam",
    img: "kanaya.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Kankri Vantas",
    img: "kankri.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "The Signless",
    img: "kankri2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Karkat Vantas",
    img: "karkat.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Kurloz Makara",
    img: "kurloz.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "The Grand Highblood",
    img: "kurloz2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Latula Pyrope",
    img: "latula.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Neophyte Redglare",
    img: "latula2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Lil Cal",
    img: "lilcal.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Lil Hal",
    img: "lilhal.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Lord English",
    img: "lordenglish.webp",
    opts: {
      series: ["HS"],
      race: ["cherub", "guard"]
    }
  },
  // "M"
  {
    name: "Maplehoof",
    img: "maplehoof.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Matchsticks",
    img: "matchsticks.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Meenah Peixes",
    img: "meenah.webp",
    opts: {
      series: ["HS"],
      race: ["troll", "god"]
    }
  },
  {
    name: "Meulin Leijon",
    img: "meulin.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "The Disciple",
    img: "meulin2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Mituna Captor",
    img: "mituna.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "The Psiioniic",
    img: "mituna2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  {
    name: "Ms. Paint",
    img: "mspaint.webp",
    opts: {
      series: ["HS"],
      race: ["carap"],
      meta: true
    }
  },
  {
    name: "MSPA Reader",
    img: "mspareader.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      meta: true
    }
  },
  // "N"
  {
    name: "Nepeta Leijon",
    img: "nepeta.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Nix",
    img: "nix.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  },
  // "P"
  {
    name: "Peregrine Mendicant",
    img: "pm.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Porrim Maryam",
    img: "porrim.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "The Dolorosa",
    img: "porrim2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  // "Q"
  {
    name: "Quarters",
    img: "quarters.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  // "R"
  {
    name: "Rose Lalonde",
    img: "rose.webp",
    opts: {
      series: ["HS"],
      race: ["human", "god"]
    }
  },
  {
    name: "Rose Lalonde (post-scratch)",
    img: "rose2.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      adult: true
    }
  },
  {
    name: "Roxy Lalonde",
    img: "roxy.webp",
    opts: {
      series: ["HS"],
      race: ["human", "god"]
    }
  },
  {
    name: "Mom Lalonde",
    img: "mom.webp",
    opts: {
      series: ["HS"],
      race: ["human"],
      adult: true
    }
  },
  {
    name: "Rufioh Nitram",
    img: "rufioh.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "The Summoner",
    img: "rufioh2.webp",
    opts: {
      series: ["HS"],
      race: ["troll"],
      adult: true
    }
  },
  // "S"
  {
    name: "Sawbuck",
    img: "sawbuck.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Sawtooth",
    img: "sawtooth.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Serenity",
    img: "serenity.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Snowman",
    img: "snowman.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Sollux Captor",
    img: "sollux.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Spades Slick",
    img: "ss.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "Squarewave",
    img: "squarewave.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Stitch",
    img: "stitch.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  // "T"
  {
    name: "Tavrisprite",
    img: "tavrisprite.webp",
    opts: {
      series: ["HS"],
      race: ["troll", "sprite"]
    }
  },
  {
    name: "Tavros Nitram",
    img: "tavros.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Terezi Pyrope",
    img: "terezi.webp",
    opts: {
      series: ["HS"],
      race: ["troll"]
    }
  },
  {
    name: "Trace",
    img: "trace.webp",
    opts: {
      series: ["HS"],
      race: ["felt"]
    }
  },
  {
    name: "Typheus",
    img: "typheus.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  },
  // "V"
  {
    name: "Vodka Mutini",
    img: "vodka.webp",
    opts: {
      series: ["HS"],
      race: ["other"]
    }
  },
  {
    name: "Vriska Serket",
    img: "vriska.webp",
    opts: {
      series: ["HS"],
      race: ["troll", "god"]
    }
  },
  // "W"
  {
    name: "Wayward Vagabond",
    img: "wv.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "White King",
    img: "wk.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  {
    name: "White Queen",
    img: "wq.webp",
    opts: {
      series: ["HS"],
      race: ["carap"]
    }
  },
  // "Y"
  {
    name: "Yaldabaoth",
    img: "yaldabaoth.webp",
    opts: {
      series: ["HS"],
      race: ["deniz"]
    }
  }
];
