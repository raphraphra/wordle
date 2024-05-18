const htmlGrid = document.getElementById('grid');
const inputedWord = document.getElementById('input')
const hiddenWordInText = document.getElementById('hiddencard')
const card = document.getElementById('card')
const wrapper = document.getElementById('wrapper')

const words = [
    'rossa', 'jetty', 'wizzo', 'cuppa', 'cohoe', 'gurks', 'squad',
    'beisa', 'shrug', 'fossa', 'fluyt', 'camus', 'speed', 'mamil',
    'array', 'polio', 'barns', 'panes', 'souts', 'limas', 'fetch',
    'queck', 'twink', 'graze', 'crock', 'almud', 'oohed', 'colog',
    'wisht', 'beard', 'samel', 'ahind', 'brung', 'barca', 'mahal',
    'jambe', 'plush', 'bruja', 'howre', 'middy', 'kabab', 'zeals',
    'mazel', 'sputa', 'goory', 'pails', 'scogs', 'snool', 'poboy',
    'doest', 'orixa', 'quipo', 'burbs', 'goads', 'blaud', 'flocs',
    'harim', 'mamey', 'primp', 'lathy', 'lunes', 'staps', 'salad',
    'agony', 'gusli', 'damps', 'tocks', 'hoick', 'marry', 'amply',
    'glisk', 'pulis', 'apter', 'shell', 'capas', 'saunf', 'kutis',
    'teggs', 'halsh', 'gamma', 'tardy', 'tease', 'towts', 'abuts',
    'allee', 'chins', 'rolly', 'situs', 'bards', 'phyma', 'torrs',
    'chace', 'bikky', 'stoor', 'quink', 'wedgy', 'vises', 'swore',
    'upsee', 'gyves', 'orixa', 'quipo', 'burbs', 'goads', 'blaud',
    'mamey', 'primp', 'lathy', 'lunes', 'staps', 'salad', 'agony',
    'gusli', 'damps', 'tocks', 'hoick', 'marry', 'amply', 'glisk',
    'pulis', 'apter', 'shell', 'capas', 'saunf', 'kutis', 'teggs',
    'halsh', 'gamma', 'tardy', 'tease', 'towts', 'abuts', 'allee',
    'chins', 'rolly', 'situs', 'bards', 'phyma', 'torrs', 'chace',
    'bikky', 'stoor', 'quink', 'wedgy', 'vises', 'swore', 'upsee',
    'gyves', 'heapy', 'gilas', 'gairs', 'yonic', 'wagon', 'rance',
    'swail', 'laxed', 'panne', 'tabus', 'anomy', 'swarm', 'sword',
    'pharm', 'penes', 'snoek', 'razet', 'nahal', 'kapus', 'lokey',
    'gobos', 'jails', 'afars', 'nerka', 'cundy', 'snark', 'intra',
    'bundh', 'tanga', 'baaed', 'solus', 'senor', 'umami', 'wared',
    'sharp', 'pewed', 'tuktu', 'knowd', 'dawds', 'flurr', 'inert',
    'taxus', 'ruana', 'sulci', 'jaded', 'othyl', 'redig', 'manky',
    'ovism', 'matlo']

window.onkeydown = e => {
    const key = e.key;
    if (key == 'Enter'){
        render()
    }
}




let hidden;

function randomize(){
    hidden = words[Math.floor(Math.random() * words.length)]
}

randomize();


hiddenWordInText.innerHTML = hidden

let hiddenWord = hidden.toUpperCase().split('')

let occurences = createDict(hiddenWord);


let textGrid = [["","","","",""],
                ["","","","",""],
                ["","","","",""],
                ["","","","",""],
                ["","","","",""]]

let currentRow = 0;



function createDict(array){
    let dict = {};
    for (const letter in array){
        if (!Object.keys(dict).includes(array[letter])){
            dict[array[letter]] = 1;

        } else {
            dict[array[letter]] += 1;
        }
    }

    return dict;
}

function renderTextGrid(){
    const rows = htmlGrid.children;
    let grid = []
    let textRows = [];
    let i = 0;

    for (const row of rows){
        textRows.push(row)
    }
    for (const row of textRows){
        const elements = row.children
        let localRow = [];
        for (const letter of elements){
            localRow.push(letter)
        }
        grid.push(localRow)

    }

    let delay = 0;

    for (row = 0; row < 5; row++){
        occurences = createDict(hiddenWord)
        for (letter = 0; letter < 5; letter++){
            
            const text = textGrid[row][letter];
            const htmlLetter = grid[row][letter];
            console.log(text, hiddenWord[letter])
            htmlLetter.innerHTML = text;
            if (text == hiddenWord[letter]){
                htmlLetter.style.background = 'rgb(20,140,50)';
                occurences[text] -= 1;

            } else if (hiddenWord.includes(text) && occurences[text] > 0){
                htmlLetter.style.background = 'rgb(180, 170, 32)';
                occurences[text] -= 1;
            }
        
            
        }
    }

}

function clearGrid(){
    const rows = htmlGrid.children;
    let grid = []
    let textRows = [];
    let i = 0;

    for (const row of rows){
        textRows.push(row)
    }
    
    for (const row of textRows){
        const elements = row.children
        let localRow = [];
        for (const letter of elements){
            localRow.push(letter)
        }
        grid.push(localRow)

    }

    for (row = 0; row < 5; row++){
        for (letter = 0; letter < 5; letter++){
            
            const htmlLetter = grid[row][letter];
            htmlLetter.style.background = 'black'
            
        }
    }

}

function display(){
    card.style.display = 'block';
    card.animate({
        scale : 1,
        opacity : 1
    }, {duration : 300, fill : 'forwards'})
   
    document.body.style.background = 'linear-gradient(45deg, rgb(10,10,10), rgb(10,10,30))'
    window.addEventListener('mousedown', () => {
        card.animate({
            scale : 0,
            opacity : 1
        }, {duration : 300, fill : 'forwards'})
        setTimeout(() => {
            card.style.display = "none"
            window.removeEventListener('mousedown')
        }, 500)
        
    })
    
}

function render(){
    const word = inputedWord.value.toUpperCase();
    if (word.length != 5){return;}
    textGrid[currentRow] = word.split('');
    currentRow += 1;
    renderTextGrid()
    if (word.toLowerCase() == hidden){
        textGrid = [["","","","",""],
                    ["","","","",""],
                    ["","","","",""],
                    ["","","","",""],
                    ["","","","",""]],
        currentRow = 0;
        setTimeout(() => {
            renderTextGrid();
            clearGrid();
            randomize();
        }, 1500)
       
    }
    if (currentRow > 4){
        textGrid = [["","","","",""],
                    ["","","","",""],
                    ["","","","",""],
                    ["","","","",""],
                    ["","","","",""]],
        currentRow = 0;
        setTimeout(() => {
            renderTextGrid();
            clearGrid();
            display();
            randomize();
        }, 1500)

    }
}




