let listOfPlayers = ["Lionel Messi","Cristiano Ronaldo",]

"Xavi","Andres Iniesta","Zlatan Ibrahimovic","Radamel Falcao","Robin van Persie","Andrea Pirlo","Yaya Toure","Edinson Cavani","Sergio Aguero",
"Iker Casillas","Neymar","Sergio Busquets","Xabi Alonso","Thiago Silva","Mesut Ozil","David Silva","Bastian Schweinsteiger","Gianluigi Buffon","Luis Suarez","Sergio Ramos","Vincent Kompany",
"Gerard Pique","Philipp Lahm","Willian","Marco Reus","Franck Ribery","Manuel Neuer","Ashley Cole","Wayne Rooney","Juan Mata","Thomas Muller","Mario Götze","Karim Benzema","Cesc Fabregas",
"Oscar","Fernandinho","Javier Mascherano","Gareth Bale","Javier Zanetti","Daniele De Rossi","Dani Alves","Petr Cech","Mats Hummels","Carles Puyol","Angel Di Maria","Carlos Tevez","Didier Drogba",
"Giorgio Chiellini","Marcelo","Stephan El Shaarawy","Toni Kroos","Samuel Eto’o","Jordi Alba","Mario Gomez","Arturo Vidal","Eden Hazard","James Rodriguez","Marouane Fellaini","Ramires",
"David Villa","Klaas Jan Huntelaar","Nemanja Vidic","Joe Hart","Arjen Robben","Mario Balotelli","Mathieu Valbuena","Pierre-Emerick Aubameyang","Robert Lewandowski","Hernanes","Pedro",
"Santi Cazorla","Christian Eriksen","Ezequiel Lavezzi","Joao Moutinho","Mario Mandžukić","Patrice Evra","David Luiz","Luka Modric","Victor Wanyama","Mapou Yanga-M'Biwa","Hulk","Darijo Srna",
"Emmanuel Mayuka","John Terry","Kwadwo Asamoah","Leonardo Bonucci","Javier Pastore","Henrikh Mkhitaryan","Moussa Dembele","Hatem Ben Arfa","Samir Nasri","Shinji Kagawa","Wesley Sneijder",
"Pepe","Marek Hamsik","Javi Martinez","Diego Forlan","Paulinho"

let listOfLeagues = ["Barclays Premier League","Spanish Primera Division","German Bundesliga","French Ligue 1","Portuguese Liga","Dutch Eredivisie","Brasileiro Série A",
"Mexican Primera Division Torneo Clausura","Russian Premier Liga","English League Championship","Austrian T-Mobile Bundesliga","Belgian Jupiler League","Major League Soccer",
"Swiss Raiffeisen Super League","Turkish Turkcell Super Lig","Danish SAS-Ligaen","Argentina Primera Division","Scottish Premiership","German 2. Bundesliga","Greek Super League",
"Japanese J League","Norwegian Tippeligaen","Italy Serie B","Spanish Segunda Division","French Ligue 2","Swedish Allsvenskan","Chinese Super League","Australian A-League",
"English League One","United Soccer League","South African ABSA Premier League","English League Two","Italy Serie A"]

function refresh(){
    window.location.reload("Refresh")
}
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
const player = randPlayer(listOfPlayers)
const league = randLeague(listOfLeagues)

let newEl = document.createElement('div');
let newSent = document.createTextNode('My prediction is that ' + player + ' would play in ' + league + ' and score this many goals: ' + randGoals())
newEl.setAttribute('class','sentence')
newEl.appendChild(newSent);

let position = document.getElementsByTagName('main')[0];
position.appendChild(newEl);

if (league == 'Spanish Primera Division') {
    document.getElementById('league').src='./leagues/spain 1.png';
} else if (league == 'German Bundesliga') {
    document.getElementById('league').src='./leagues/germany 1.png';
} else if (league == 'Barclays Premier League') {
    document.getElementById('league').src='./leagues/england 1.png';
} else if (league == 'French Ligue 1') {
    document.getElementById('league').src='./leagues/france 1.png';
} else if (league == 'Portuguese Liga') {
    document.getElementById('league').src='./leagues/portugal 1.png';
} else if (league == 'Dutch Eredivisie') {
    document.getElementById('league').src='./leagues/holland 1.png';
} else if (league == 'Brasileiro Série A') {
    document.getElementById('league').src='./leagues/brazil 1.png';
} else if (league == "Mexican Primera Division Torneo Clausura") {
    document.getElementById('league').src='./leagues/mexico 1.png'
} else if (league == "Russian Premier Liga") {
    document.getElementById('league').src='./leagues/russia 1.png'
} else if (league == "English League Championship") {
    document.getElementById('league').src='./leagues/england 2.png'
} else if (league == "Austrian T-Mobile Bundesliga") {
    document.getElementById('league').src='./leagues/austria 1.png'
} else if (league == "Belgian Jupiler League") {
    document.getElementById('league').src='./leagues/belgium 1.jpg'
} else if (league == "Major League Soccer") {
    document.getElementById('league').src='./leagues/usa 1.png'
} else if (league == "Swiss Raiffeisen Super League") {
    document.getElementById('league').src='./leagues/swiss 1.png';
} else if (league == "Turkish Turkcell Super Lig") {
    document.getElementById('league').src='./leagues/turkey 1.png';
} else if (league == "Danish SAS-Ligaen") {
    document.getElementById('league').src='./leagues/denmark 1.png';
} else if (league == "Argentina Primera Division") {
    document.getElementById('league').src='./leagues/argentina 1.png';
} else if (league == "Scottish Premiership") {
    document.getElementById('league').src='./leagues/scotland 1.png';
} else if (league == "German 2. Bundesliga") {
    document.getElementById('league').src='./leagues/germany 2.png';
} else if (league == "Greek Super League") {
    document.getElementById('league').src='./leagues/greece 1.png';
} else if (league == "Japanese J League") {
    document.getElementById('league').src='./leagues/japan 1.png';
} else if (league == "Norwegian Tippeligaen") {
    document.getElementById('league').src='./leagues/norway 1.png';
} else if (league == "Spanish Segunda Division") {
    document.getElementById('league').src='./leagues/spain 2.png';
} else if (league == "French Ligue 2") {
    document.getElementById('league').src='./leagues/france 2.png';
} else if (league == "Swedish Allsvenskan") {
    document.getElementById('league').src='./leagues/sweden 1.png';
} else if (league == "Chinese Super League") {
    document.getElementById('league').src='./leagues/china 1.png';
} else if (league == "Australian A-League") {
    document.getElementById('league').src='./leagues/australia 1.png';
} else if (league == "English League One") {
    document.getElementById('league').src='./leagues/england 3.png';
} else if (league == "United Soccer League") {
    document.getElementById('league').src='./leagues/usa 2.png';
} else if (league == "South African ABSA Premier League") {
    document.getElementById('league').src='./leagues/south africa 1.png';
} else if (league == "Italy Serie B") {
    document.getElementById('league').src='./leagues/italy 2.png';
} else if (league == "Italy Serie A") {
    document.getElementById('league').src='./leagues/italy 1.jpeg';
} else if (league == "English League Two") {
    document.getElementById('league').src='./leagues/england 4.png';}

if (player == 'Lionel Messi') {
    document.getElementById('player').src='./players/MESSI.jpg'
} else if (player == 'Cristiano Ronaldo') {
    document.getElementById('player').src='./players/ronaldo.jpg'
}