'use strict';

var somafmChannels = {
    "7\" soul"   : {
        "id"            : "7soul",
        "title"         : "Seven Inch Soul",
        "description"   : "Vintage soul tracks from the original 45 RPM vinyl.",
        "dj"            : "Dion Watts Garcia",
        "genre"         : "oldies",
        "image"         : "https://api.somafm.com/logos/512/7soul512.png",
        "url"           : "https://somafm.com/7soul.pls"
    },
    "bagel radio"       : {
        "id"            : "bagel",
        "title"         : "BAGeL Radio",
        "description"   : "What alternative rock radio should sound like.",
        "dj"            : "Bagel Ted",
        "genre"         : "alternative|rock",
        "image"         : "https://api.somafm.com/logos/512/bagel512.jpg",
        "url"           : "https://somafm.com/bagel.pls"
    },
    "beat blender"      : {
        "id"            : "beatblender",
        "title"         : "Beat Blender",
        "description"   : "A late night blend of deep-house and downtempo chill.",
        "dj"            : "DJ Shawn",
        "genre"         : "electronica",
        "image"         : "https://api.somafm.com/logos/512/beatblender512.png",
        "url"           : "https://somafm.com/beatblender.pls"
    },
    "boot liquor"       : {
        "id"            : "bootliquor",
        "title"         : "Boot Liquor",
        "description"   : "Americana Roots music for Cowhands, Cowpokes and Cowtippers.",
        "dj"            : "Roy",
        "genre"         : "americana",
        "image"         : "https://api.somafm.com/logos/512/bootliquor512.png",
        "url"           : "https://somafm.com/bootliquor.pls"
    },
    "black rock fm"     : {
        "id"            : "brfm",
        "title"         : "Black Rock FM",
        "description"   : "From the Playa to the world, for the annual Burning Man festival.",
        "dj"            : "Rusty Hodge",
        "genre"         : "eclectic",
        "image"         : "https://api.somafm.com/logos/512/brfm512.jpg",
        "url"           : "https://somafm.com/brfm.pls"
    },
    "christmas lounge"  : {
        "id"            : "christmas",
        "title"         : "Christmas Lounge",
        "description"   : "Chilled holiday grooves and classic winter lounge tracks. (Kid and Parent safe!) ",
        "dj"            : "Rusty Hodge",
        "genre"         : "holiday",
        "image"         : "https://api.somafm.com/logos/512/christmas512.png",
        "url"           : "https://somafm.com/christmas.pls"
    },
    "cliqhop idm"       : {
        "id"            : "cliqhop",
        "title"         : "cliq hop idm",
        "description"   : "Blips'n'beeps backed mostly w/beats. Intelligent Dance Music.",
        "dj"            : "Rusty Hodge",
        "genre"         : "electronica",
        "image"         : "https://api.somafm.com/logos/512/cliqhop512.jpg",
        "url"           : "https://somafm.com/cliqhop.pls"
    },
    "covers"            : {
        "id"            : "covers",
        "title"         : "Covers",
        "description"   : "Just covers. Songs you know by artists you don't. We've got you covered.",
        "dj"            : "",
        "genre"         : "eclectic",
        "image"         : "https://api.somafm.com/logos/512/covers512.png",
        "url"           : "https://somafm.com/covers.pls"
    },
    "deep space 1"    : {
        "id"            : "deepspaceone",
        "title"         : "Deep Space One",
        "description"   : "Deep ambient electronic, experimental and space music. For inner and outer space exploration.",
        "dj"            : "Rusty Hodge",
        "genre"         : "ambient",
        "image"         : "https://api.somafm.com/logos/512/deepspaceone512.png",
        "url"           : "https://somafm.com/deepspaceone.pls"
    },
    "def con radio"     : {
        "id"            : "defcon",
        "title"         : "DEF CON Radio",
        "description"   : "Music for Hacking. The DEF CON Year-Round Channel.",
        "dj"            : "Rusty Hodge",
        "genre"         : "electronica|specials",
        "image"         : "https://api.somafm.com/logos/512/defcon512.png",
        "url"           : "https://somafm.com/defcon.pls"
    },
    "digitalis"         : {
        "id"            : "digitalis",
        "title"         : "Digitalis",
        "description"   : "Digitally affected analog rock to calm the agitated heart.",
        "dj"            : "Rusty Hodge",
        "genre"         : "electronica|alternative",
        "image"         : "https://api.somafm.com/logos/512/digitalis512.png",
        "url"           : "https://somafm.com/digitalis.pls"
    },
    "doomed"            : {
        "id"            : "doomed",
        "title"         : "Doomed",
        "description"   : "Dark industrial/ambient music for tortured souls. ",
        "dj"            : "Lucretia",
        "genre"         : "ambient|industrial",
        "image"         : "https://api.somafm.com/logos/512/doomed512.png",
        "url"           : "https://somafm.com/doomed.pls"
    },
    "drone zone"        : {
        "id"            : "dronezone",
        "title"         : "Drone Zone",
        "description"   : "Served best chilled, safe with most medications. Atmospheric textures with minimal beats.",
        "dj"            : "Rusty Hodge",
        "genre"         : "ambient",
        "image"         : "https://api.somafm.com/logos/512/dronezone512.png",
        "url"           : "https://somafm.com/dronezone.pls"
    },
    "dub step beyond"   : {
        "id"            : "dubstep",
        "title"         : "Dub Step Beyond",
        "description"   : "Dubstep, Dub and Deep Bass. May damage speakers at high volume.",
        "dj"            : "Rusty Hodge",
        "genre"         : "electronica",
        "image"         : "https://api.somafm.com/logos/512/dubstep512.png",
        "url"           : "https://somafm.com/dubstep.pls"
    },
    "earwaves"          : {
        "id"            : "earwaves",
        "title"         : "Earwaves",
        "description"   : "Spanning the history of electronic and experimental music from the early pioneers to the latest innovators. ",
        "dj"            : "Dwight Loop",
        "genre"         : "experimental",
        "image"         : "https://api.somafm.com/logos/512/earwaves512.jpg",
        "url"           : "https://somafm.com/earwaves.pls"
    },
    "fluid"             : {
        "id"            : "fluid",
        "title"         : "Fluid",
        "description"   : "NEW! Drown in the electronic sound of instrumental hiphop, future soul and liquid trap.",
        "dj"            : "kampf",
        "genre"         : "electronica|hiphop",
        "image"         : "https://api.somafm.com/logos/512/fluid512.jpg",
        "url"           : "https://somafm.com/fluid.pls"
    },
    "folk forward"      : {
        "id"            : "folkfwd",
        "title"         : "Folk Forward",
        "description"   : "Indie Folk, Alt-folk and the occasional folk classics. ",
        "dj"            : "Elise",
        "genre"         : "folk|alternative",
        "image"         : "https://api.somafm.com/logos/512/folkfwd512.png",
        "url"           : "https://somafm.com/folkfwd.pls"
    },
    "groove salad"      : {
        "id"            : "groovesalad",
        "title"         : "Groove Salad",
        "description"   : "A nicely chilled plate of ambient/downtempo beats and grooves.",
        "dj"            : "Rusty Hodge",
        "genre"         : "ambient|electronica",
        "image"         : "https://api.somafm.com/logos/512/groovesalad512.png",
        "url"           : "https://somafm.com/groovesalad.pls"
    },
    "illinois street lounge" : {
        "id"            : "illstreet",
        "title"         : "Illinois Street Lounge",
        "description"   : "Classic bachelor pad, playful exotica and vintage music of tomorrow.",
        "dj"            : "Rusty Hodge",
        "genre"         : "lounge",
        "image"         : "https://api.somafm.com/logos/512/illstreet512.png",
        "url"           : "https://somafm.com/illstreet.pls"
    },
    "indie pop rocks"   : {
        "id"            : "indiepop",
        "title"         : "Indie Pop Rocks!",
        "description"   : "New and classic favorite indie pop tracks.",
        "dj"            : "Elise",
        "genre"         : "alternative|rock",
        "image"         : "https://api.somafm.com/logos/512/indiepop512.png",
        "url"           : "https://somafm.com/indiepop.pls"
    },
    "jolly ol soul"     : {
        "id"            : "jollysoul",
        "title"         : "Jolly Ol' Soul",
        "description"   : "Where we cut right to the soul of the season.",
        "dj"            : "Dion Watts Garcia",
        "genre"         : "holiday",
        "image"         : "https://api.somafm.com/logos/512/jollysoul512.png",
        "url"           : "https://somafm.com/jollysoul.pls"
    },
    "lush"   : {
        "id"            : "lush",
        "title"         : "Lush",
        "description"   : "Sensuous and mellow vocals, mostly female, with an electronic influence.",
        "dj"            : "Rusty Hodge",
        "genre"         : "electronica",
        "image"         : "https://api.somafm.com/logos/512/lush512.png",
        "url"           : "https://somafm.com/lush.pls"
    },
    "mission control"   : {
        "id"            : "missioncontrol",
        "title"         : "Mission Control",
        "description"   : "Celebrating NASA and Space Explorers everywhere.",
        "dj"            : "Rusty Hodge",
        "genre"         : "ambient|electronica",
        "image"         : "https://api.somafm.com/logos/512/missioncontrol512.jpg",
        "url"           : "https://somafm.com/missioncontrol.pls"
    },
    "poptron"           : {
        "id"            : "poptron",
        "title"         : "PopTron",
        "description"   : "Electropop and indie dance rock with sparkle and pop.",
        "dj"            : "Rusty Hodge",
        "genre"         : "alternative",
        "image"         : "https://api.somafm.com/logos/512/poptron512.png",
        "url"           : "https://somafm.com/poptron.pls"
    },
    "secret agent"      : {
        "id"            : "secretagent",
        "title"         : "Secret Agent",
        "description"   : "The soundtrack for your stylish, mysterious, dangerous life. For Spies and PIs too!",
        "dj"            : "Rusty Hodge",
        "genre"         : "lounge",
        "image"         : "https://api.somafm.com/logos/512/secretagent512.png",
        "url"           : "https://somafm.com/secretagent.pls"
    },
    "left coast 70s"    : {
        "id"            : "seventies",
        "title"         : "Left Coast 70s",
        "description"   : "NEW! Mellow album rock from the Seventies. Yacht friendly.",
        "dj"            : "Rusty Hodge",
        "genre"         : "70s|rock",
        "image"         : "https://api.somafm.com/logos/512/seventies512.jpg",
        "url"           : "https://somafm.com/seventies.pls"
    },
    "sf 1033"          : {
        "id"            : "sf1033",
        "title"         : "SF 10 33",
        "description"   : "Ambient music mixed with the sounds of San Francisco public safety radio traffic.",
        "dj"            : "Rusty Hodge",
        "genre"         : "ambient|news",
        "image"         : "https://api.somafm.com/logos/512/sf1033512.png",
        "url"           : "https://somafm.com/sf1033.pls"
    },
    "sf 10 33"          : {
        "id"            : "sf1033",
        "title"         : "SF 10 33",
        "description"   : "Ambient music mixed with the sounds of San Francisco public safety radio traffic.",
        "dj"            : "Rusty Hodge",
        "genre"         : "ambient|news",
        "image"         : "https://api.somafm.com/logos/512/sf1033512.png",
        "url"           : "https://somafm.com/sf1033.pls"
    },
    "the silent channel" : {
        "id"            : "silent",
        "title"         : "The Silent Channel",
        "description"   : "Light and dark ambient electronic music for exploring inner worlds from Silent Records.",
        "dj"            : "",
        "genre"         : "ambient",
        "image"         : "https://api.somafm.com/logos/512/silent512.jpg",
        "url"           : "https://somafm.com/silent.pls"
    },
    "sonic universe"    : {
        "id"            : "sonicuniverse",
        "title"         : "Sonic Universe",
        "description"   : "Transcending the world of jazz with eclectic, avant-garde takes on tradition.",
        "dj"            : "Nitya",
        "genre"         : "jazz",
        "image"         : "https://api.somafm.com/logos/512/sonicuniverse512.png",
        "url"           : "https://somafm.com/sonicuniverse.pls"
    },
    "space station soma" : {
        "id"            : "spacestation",
        "title"         : "Space Station Soma",
        "description"   : "Tune in, turn on, space out. Spaced-out ambient and mid-tempo electronica.",
        "dj"            : "Rusty Hodge",
        "genre"         : "electronica",
        "image"         : "https://api.somafm.com/logos/512/spacestation512.png",
        "url"           : "https://somafm.com/spacestation.pls"
    },
    "suburbs of goa"    : {
        "id"            : "suburbsofgoa",
        "title"         : "Suburbs of Goa",
        "description"   : "Desi-influenced Asian world beats and beyond.",
        "dj"            : "Rusty Hodge",
        "genre"         : "world",
        "image"         : "https://api.somafm.com/logos/512/suburbsofgoa512.png",
        "url"           : "https://somafm.com/suburbsofgoa.pls"
    },
    "the trip"          : {
        "id"            : "thetrip",
        "title"         : "The Trip",
        "description"   : "Progressive house / trance. Tip top tunes.",
        "dj"            : "Milkman",
        "genre"         : "electronica",
        "image"         : "https://api.somafm.com/logos/512/thetrip512.jpg",
        "url"           : "https://somafm.com/thetrip.pls"
    },
    "thistle radio"     : {
        "id"            : "thistle",
        "title"         : "ThistleRadio",
        "description"   : "Exploring music from Celtic roots and branches",
        "dj"            : "Fiona Ritchie",
        "genre"         : "celtic|world",
        "image"         : "https://api.somafm.com/logos/512/thistle512.jpg",
        "url"           : "https://somafm.com/thistle.pls"
    },
    "underground 80s"   : {
        "id"            : "u80s",
        "title"         : "Underground 80s",
        "description"   : "Early 80s UK Synthpop and a bit of New Wave.",
        "dj"            : "Rusty Hodge",
        "genre"         : "alternative|electronica",
        "image"         : "https://api.somafm.com/logos/512/u80s512.png",
        "url"           : "https://somafm.com/u80s.pls"
    },
    "christmas in frisco"    : {
        "id"            : "xmasinfrisko",
        "title"         : "Xmas in Frisko",
        "description"   : "SomaFM's wacky and eclectic holiday mix. Not for the easily offended. ",
        "dj"            : "Rusty Hodge",
        "genre"         : "holiday",
        "image"         : "https://api.somafm.com/logos/512/xmasinfrisko512.jpg",
        "url"           : "https://somafm.com/xmasinfrisko.pls"
    },
    "xmas in frisko"    : {
        "id"            : "xmasinfrisko",
        "title"         : "Xmas in Frisko",
        "description"   : "SomaFM's wacky and eclectic holiday mix. Not for the easily offended. ",
        "dj"            : "Rusty Hodge",
        "genre"         : "holiday",
        "image"         : "https://api.somafm.com/logos/512/xmasinfrisko512.jpg",
        "url"           : "https://somafm.com/xmasinfrisko.pls"
    },
    "christmas in frisko"    : {
        "id"            : "xmasinfrisko",
        "title"         : "Xmas in Frisko",
        "description"   : "SomaFM's wacky and eclectic holiday mix. Not for the easily offended. ",
        "dj"            : "Rusty Hodge",
        "genre"         : "holiday",
        "image"         : "https://api.somafm.com/logos/512/xmasinfrisko512.jpg",
        "url"           : "https://somafm.com/xmasinfrisko.pls"
    },
    "christmas rocks"   : {
        "id"            : "xmasrocks",
        "title"         : "Christmas Rocks!",
        "description"   : "Have your self an indie/alternative holiday season!",
        "dj"            : "Elise",
        "genre"         : "holiday",
        "image"         : "https://api.somafm.com/logos/512/xmasrocks512.png",
        "url"           : "https://somafm.com/xmasrocks.pls"
    },
    "metal detector"    : {
        "id"            : "metal",
        "title"         : "Metal Detector",
        "description"   : "NEW! From black to doom, prog to sludge, thrash to post, stoner to crossover, punk to industrial.",
        "dj"            : "Mark Luntzel",
        "genre"         : "metal",
        "image"         : "https://api.somafm.com/logos/512/metal512.png",
        "url"           : "https://somafm.com/metal.pls"
    },
};

module.exports = somafmChannels;