let listOfPlayers = ["Lionel Messi","Cristiano Ronaldo","Xavi","Andres Iniesta","Zlatan Ibrahimovic","Radamel Falcao","Robin van Persie","Andrea Pirlo","Yaya Toure","Edinson Cavani","Sergio Aguero",
"Iker Casillas","Neymar","Sergio Busquets","Xabi Alonso","Thiago Silva","Mesut Ozil","David Silva","Bastian Schweinsteiger","Gianluigi Buffon","Luis Suarez","Sergio Ramos","Vincent Kompany",
"Gerard Pique","Philipp Lahm","Willian","Marco Reus","Franck Ribery","Manuel Neuer","Ashley Cole","Wayne Rooney","Juan Mata","Thomas Muller","Mario Götze","Karim Benzema","Cesc Fabregas",
"Oscar","Fernandinho","Javier Mascherano","Gareth Bale","Javier Zanetti","Daniele De Rossi","Dani Alves","Petr Cech","Mats Hummels","Carles Puyol","Angel Di Maria","Carlos Tevez","Didier Drogba",
"Giorgio Chiellini","Marcelo","Stephan El Shaarawy","Toni Kroos","Samuel Eto’o","Jordi Alba","Mario Gomez","Arturo Vidal","Eden Hazard","James Rodriguez","Marouane Fellaini","Ramires",
"David Villa","Klaas Jan Huntelaar","Nemanja Vidic","Joe Hart","Arjen Robben","Mario Balotelli","Mathieu Valbuena","Pierre-Emerick Aubameyang","Robert Lewandowski","Hernanes","Pedro",
"Santi Cazorla","Christian Eriksen","Ezequiel Lavezzi","Joao Moutinho","Mario Mandžukić","Patrice Evra","David Luiz","Luka Modric","Victor Wanyama","Mapou Yanga-M'Biwa","Hulk","Darijo Srna",
"Emmanuel Mayuka","John Terry","Kwadwo Asamoah","Leonardo Bonucci","Javier Pastore","Henrikh Mkhitaryan","Moussa Dembele","Hatem Ben Arfa","Samir Nasri","Shinji Kagawa","Wesley Sneijder",
"Pepe","Marek Hamsik","Javi Martinez","Diego Forlan","Paulinho"]

let listOfLeagues = ["Barclays Premier League","Spanish Primera Division","German Bundesliga",]

// "French Ligue 1","Portuguese Liga","Dutch Eredivisie","Brasileiro Série A",
// "Mexican Primera Division Torneo Clausura","Russian Premier Liga","English League Championship","Austrian T-Mobile Bundesliga","Belgian Jupiler League","Major League Soccer","Swiss Raiffeisen Super League",
// "Turkish Turkcell Super Lig","Danish SAS-Ligaen","Argentina Primera Division","Scottish Premiership","German 2. Bundesliga","Greek Super League","Japanese J League","Norwegian Tippeligaen",
// "Italy Serie B","Spanish Segunda Division","French Ligue 2","Swedish Allsvenskan","Chinese Super League","Australian A-League","English League One","United Soccer League","South African ABSA Premier League",
// "English League Two""Italy Serie A",

const randNumber = array => {
    return Math.floor(Math.random() * array.length)
}


const randPlayer = array => {
    let player = []
    for (let i = 0; i < 1; i++) {
        player.push(array[randNumber(listOfPlayers)])
    }  
    return player
}

const randLeague = array => {
    let league = []
    for (let i = 0; i < 1; i++) {
        league.push(array[randNumber(listOfLeagues)])
    }
    return league
}

const randGoals = () => {
    let goals = []
    for (let i = 0; i < 1; i++) {
        goals.push(Math.floor(Math.random() * 500))
    }
    return goals
}

// let sentence = () => {
//     document.write()
// }

// sentence()

function refresh(){
    window.location.reload("Refresh")
  }

let picture = () => {
    if (randLeague(listOfLeagues) == listOfLeagues[0]) {
        console.log('Premier League')
        document.write('In another time and place ' + randPlayer(listOfPlayers) + ' would have played in another league. Perhaps ' + listOfLeagues[0] + '. Would they have been as proficient in this league? I predict the number of goals they would have scored would be ' + randGoals())  
    } else if (listOfLeagues === listOfLeagues[1]) {
        console.log('Spain 1')
        document.write('In another time and place ' + randPlayer(listOfPlayers) + ' would have played in another league. Perhaps ' + listOfLeagues[1] + '. Would they have been as proficient in this league? I predict the number of goals they would have scored would be ' + randGoals())
    } else if (listOfLeagues === listOfLeagues[2]) {
        console.log('Germany 1')
        document.write('In another time and place ' + randPlayer(listOfPlayers) + ' would have played in another league. Perhaps ' + listOfLeagues[2] + '. Would they have been as proficient in this league? I predict the number of goals they would have scored would be ' + randGoals())
    // } else if (randLeague === "Spanish Primera Division") {
    //     console.log('Spain 1')
    // } else if (randLeague === "Spanish Primera Division") {
    //     console.log('Spain 1')
    // } else if (randLeague === "Spanish Primera Division") {
    //     console.log('Spain 1')
    }
}

picture()

