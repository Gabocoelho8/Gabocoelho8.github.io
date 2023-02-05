var i = 0;
var images = [];
var time = 3000;

images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';
images[3] = '4.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

let tableFromJson = () => {
const myBooks = [
    {'Skill ID': '1', 'Skill': 'Aprendo Rapido',
       'Categoria': 'Estudios', 'Valor': 'Excelente'
    },
    {'Skill ID': '2', 'Skill': 'Organizado',
       'Categoria': 'Vida', 'Valor': 'Bueno'
    },
    {'Skill ID': '3', 'Skill': 'Templado',
       'Categoria': 'Vida', 'Valor': 'Bueno'
    }
]
    
let col = [];
for (let i = 0; i < myBooks.length; i++) {
    for (let key in myBooks[i]) {
    if (col.indexOf(key) === -1) {
        col.push(key);
    }
    }
}
const table1 = document.createElement("table");
    
let tr = table1.insertRow(-1);
    
for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
}
    
for (let i = 0; i < myBooks.length; i++) {
    
    tr = table1.insertRow(-1);
    
    for (let j = 0; j < col.length; j++) {
    let tabCell = tr.insertCell(-1);
    tabCell.innerHTML = myBooks[i][col[j]];
    }
}
    
const divShowData = document.getElementById('showData');
divShowData.innerHTML = "";
divShowData.appendChild(table1);
  }