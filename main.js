let BOLDIMG = document.querySelector('.boldImg')
let BOLDIMG1 = document.querySelector('.boldImg1')
let TEXT = document.querySelector('.text')
let ITALICkIMG = document.querySelector('.italickImg')
let ITALICkIMG1 = document.querySelector('.italickImg1')
let UNDERLINeIMG = document.querySelector('.underlineImg')
let UNDERLINeIMG1 = document.querySelector('.underlineImg1')
let STRIKeIMG = document.querySelector('.strikeImg')
let STRIKeIMG1 = document.querySelector('.strikeImg1')
let LEFTALIGN = document.querySelector('.leftAlineImg')
let CENTRALIGN = document.querySelector('.centrAlineImg')
let RIGHTALIGN = document.querySelector('.rightAlineImg')
let FONT = document.querySelector('.font')
let SIZE = document.querySelector('.size')
let FONTCOLOR = document.querySelector('.fontColorImg')
let TEXTCOLOR = document.querySelector('.textColor')
let COLOR = document.querySelector('.color')
let CLOSE = document.querySelector('.close')
let CLOSE1 = document.querySelector('.close1')
let p = document.querySelectorAll('.color p')
let BACKIMG = document.querySelector('.backImg')
let BOXCOLOR = document.querySelector('.boxColor')
let BACKCOLOR = document.querySelector('.backColor')
let BACKGROUNDCOLOR = document.querySelector('.backgrondcolor')
let p1 = document.querySelectorAll('.backgrondcolor p')
let H3 = document.querySelector('.H3')
let H3_1 = document.querySelector('.H3_1')
let H3_2 = document.querySelector('.H3_2')
let BACKGROUNDIMAGE = document.querySelector('.backdroundImg')
let FILE = document.getElementById("file");
let LOGINIMG = document.querySelector('.loginImg')
let LOGIN = document.querySelector('.loginConteiner')
let SIGNINBTN = document.querySelector('.signinBtn')
let INPUTTEXT = document.querySelector('.inputText')
let INPUTPASSWORD = document.querySelector('.inputPassword')
let login_p = document.querySelector('.loginBox p')
let UNLOCKIMG = document.querySelector('.unlockImg')
let UNLOCKCONTEINER = document.querySelector('.unlockConteiner')
let CANCLEBTN = document.querySelector('.cancelBtn')
let SIGNOUTBTN = document.querySelector('.signoutBtn')
let EDITIMG = document.querySelector('.editImg')
let SIDEBAR = document.querySelector('.sidebar')
let SIDEBAR2 = document.querySelector('.sidebar2')
let TEXTAREA = document.querySelector('textarea')
let SAVEIMG = document.querySelector('.saveImg')
let TABLEIMG = document.querySelector('.tableImg')
let TABLECONTEINER = document.querySelector('.tableConteiner')
let TABLEBT = document.querySelector('.tableBT')
let TR = document.querySelector('.tr')
let TR1 = document.getElementById('tr')
let TD = document.querySelector('.td')
let width_of_TD = document.querySelector('.width_of_TD')
let height_of_TD = document.querySelector('.height_of_TD')
let width_of_border = document.querySelector('.width_of_border')
let color_of_border = document.querySelector('.color_of_border')
let type_of_border = document.querySelector('.type_of_border')
let box1P = document.querySelector('.box1 p')
let RESETBT = document.querySelector('.resetBT')
let CLOSE2 = document.querySelector('.close2')
let UlListImg = document.querySelector('.ulListImg')
let UlConteiner = document.querySelector('.ulConteiner')
let COUNTLI = document.querySelector('.countLi')
let LIMARKS = document.querySelector('.limarks')
let LISTBT = document.querySelector('.listBT')
let CLOSE3 = document.querySelector('.close3')
let RESETULBTN = document.querySelector('.resetUlBT')
let BOX3p = document.querySelector('.box3 p')
let OlListImg = document.querySelector('.olListImg')
let OlConteiner = document.querySelector('.olConteiner')
let COUNTOL = document.querySelector('.countOl')
let OLMARKS = document.querySelector('.olmarks')
let LISTOLBT = document.querySelector('.listOlBT')
let CLOSE4 = document.querySelector('.close4')
let RESETOLBTN = document.querySelector('.resetOlBT')
let BOX4p = document.querySelector('.box4 p')


BOLDIMG.addEventListener('click', function () {
    this.style.display = 'none'
    BOLDIMG1.style.display = 'block'
    TEXT.style.fontWeight = 'bold'
})
BOLDIMG1.addEventListener('click', function () {
    this.style.display = 'none'
    BOLDIMG.style.display = 'block'
    TEXT.style.fontWeight = ''
})
ITALICkIMG.addEventListener('click', function () {
    this.style.display = 'none'
    ITALICkIMG1.style.display = 'block'
    TEXT.style.fontStyle = 'italic'
})
ITALICkIMG1.addEventListener('click', function () {
    this.style.display = 'none'
    ITALICkIMG.style.display = 'block'
    TEXT.style.fontStyle = ''
})

UNDERLINeIMG.addEventListener('click', function () {
    this.style.display = 'none'
    UNDERLINeIMG1.style.display = 'block'
    TEXT.style.textDecoration = 'underline'
})
UNDERLINeIMG1.addEventListener('click', function () {
    this.style.display = 'none'
    UNDERLINeIMG.style.display = 'block'
    TEXT.style.textDecoration = ''
})

STRIKeIMG.addEventListener('click', function () {
    this.style.display = 'none'
    STRIKeIMG1.style.display = 'block'
    TEXT.style.textDecoration = 'line-through'
})
STRIKeIMG1.addEventListener('click', function () {
    this.style.display = 'none'
    STRIKeIMG.style.display = 'block'
    TEXT.style.textDecoration = ''
})

LEFTALIGN.addEventListener('click', function () {
    this.style.backgroundColor = 'gray'
    TEXT.style.textAlign = 'left'
    CENTRALIGN.style.backgroundColor = 'white'
    RIGHTALIGN.style.backgroundColor = 'white'
})
CENTRALIGN.addEventListener('click', function () {
    this.style.backgroundColor = 'gray'
    TEXT.style.textAlign = 'center'
    LEFTALIGN.style.backgroundColor = 'white'
    RIGHTALIGN.style.backgroundColor = 'white'

})
RIGHTALIGN.addEventListener('click', function () {
    this.style.backgroundColor = 'gray'
    TEXT.style.textAlign = 'right'
    LEFTALIGN.style.backgroundColor = 'white'
    CENTRALIGN.style.backgroundColor = 'white'

})
FONT.addEventListener('change', (event) => {
    TEXT.style.fontFamily = event.target.value;
    FONT.value = ""
})
SIZE.addEventListener('change', (event) => {
    TEXT.style.fontSize = event.target.value;
    SIZE.value = ""
})
FONTCOLOR.addEventListener('click', function () {
    TEXTCOLOR.style.display = 'block'
})
CLOSE.addEventListener('click', function () {
    TEXTCOLOR.style.display = 'none'
})
COLOR.addEventListener('click', function (event) {
    if (event.target.tagName = 'p') {
        TEXT.style.color = event.target.textContent;
    }
})
p.forEach(element => {
    element.style.backgroundColor = element.textContent
});

BACKIMG.addEventListener('click', function () {
    BACKCOLOR.style.display = 'block'
    BACKGROUNDCOLOR.style.display = 'flex'
    H3.id = 'color'
    BACKGROUNDIMAGE.style.display = 'none'
    H3_1.id = ''
    H3_2.id = ''
    FILE.style.display = 'none'
})

BACKGROUNDCOLOR.addEventListener('click', function (event) {
    if (event.target.tagName = 'p') {
        TEXT.style.backgroundColor = event.target.textContent;
    }
})
p1.forEach(element => {
    element.style.backgroundColor = element.textContent
});
CLOSE1.addEventListener('click', function () {
    BACKCOLOR.style.display = 'none'
})
H3.addEventListener('click', function () {
    BACKGROUNDCOLOR.style.display = 'flex'
    BACKGROUNDIMAGE.style.display = 'none'
    H3.id = 'color'
    H3_1.id = ''
    H3_2.id = ''
    FILE.style.display = 'none'
})
H3_1.addEventListener('click', function () {
    BACKGROUNDCOLOR.style.display = 'none'
    BACKGROUNDIMAGE.style.display = 'flex'
    H3.id = ''
    H3_1.id = 'color'
    H3_2.id = ''
    FILE.style.display = 'none'
})
H3_2.addEventListener('click', function () {
    BACKGROUNDCOLOR.style.display = 'none'
    BACKGROUNDIMAGE.style.display = 'none'
    FILE.style.display = 'block'
    H3.id = ''
    H3_1.id = ''
    H3_2.id = 'color'
})
BACKGROUNDIMAGE.addEventListener('click', function (event) {

    if (event.target.classList.contains('image')) {
        TEXT.style.background = event.target.textContent;
        TEXT.style.backgroundSize = '100%';

    }
})

FILE.addEventListener('change', function (event) {
    const file = event.target.files[0]
    TEXT.style.backgroundImage = `url("${URL.createObjectURL(file)}")`;
})

LOGINIMG.addEventListener('click', function () {
    LOGIN.style.display = 'block'
})
SIGNINBTN.addEventListener('click', function () {
    if (INPUTTEXT.value != 'admin' && INPUTPASSWORD.value != 'admin') {
        INPUTTEXT.style.border = '2px solid red'
        INPUTPASSWORD.style.border = '2px solid red'
        login_p.style.display = 'block'
    } else {
        LOGIN.style.display = 'none'
        INPUTTEXT.style.border = ''
        INPUTPASSWORD.style.border = ''
        login_p.style.display = 'none'
        INPUTTEXT.value = ''
        LOGINIMG.style.display = 'none'
        UNLOCKIMG.style.display = 'block'
    }

})

UNLOCKIMG.addEventListener('click', function () {
    UNLOCKCONTEINER.style.display = 'block'
})

CANCLEBTN.addEventListener('click', function () {
    UNLOCKCONTEINER.style.display = 'none'
})
SIGNOUTBTN.addEventListener('click', function () {
    LOGINIMG.style.display = 'block'
    UNLOCKIMG.style.display = 'none'
    UNLOCKCONTEINER.style.display = 'none'
    INPUTPASSWORD.value = ''
})
EDITIMG.addEventListener('click', function () {
    if (INPUTPASSWORD.value != '') {
        SIDEBAR.style.display = 'none'
        TEXT.style.display = 'none'
        SIDEBAR2.style.display = 'flex'
        TEXTAREA.style.display = 'block'
        TEXTAREA.value = TEXT.innerHTML

    }

})
SAVEIMG.addEventListener('click', function () {
    SIDEBAR.style.display = 'flex'
    SIDEBAR2.style.display = 'none'
    TEXT.style.display = 'block'
    TEXTAREA.style.display = 'none'
    TEXT.innerHTML = TEXTAREA.value
})

TABLEIMG.addEventListener('click', function () {
    TABLECONTEINER.style.display = 'block'

})

TABLEBT.addEventListener('click', function () {

    if (TR.value != '' && TD.value != '' && width_of_TD.value != '' && height_of_TD.value != '' && width_of_border.value != '' && type_of_border.value != '' && color_of_border.value != '') {

        TABLECONTEINER.style.display = 'none'

        let mytable = '';
        mytable += `<table>`;
        for (let i = 1; i <= TR.value; i++) {
            mytable += `<tr>`;
            for (let j = 1; j <= TD.value; j++) {
                mytable += `<td style="width: ${width_of_TD.value}px; height: ${height_of_TD.value}px; border:${width_of_border.value}px ${type_of_border.value}  ${color_of_border.value} ; ">` + `</td>`;
            }
            mytable += `</tr>`;
        }
        mytable += `</table>`;
        TEXTAREA.value += mytable;

        box1P.style.display = 'none'
        TD.style.border = ''
        TR.style.border = ''
        width_of_border.style.border = ''
        width_of_TD.style.border = ''
        height_of_TD.style.border = ''
        type_of_border.style.border = ''
        color_of_border.style.border = ''
    } else {
        TD.style.border = '1px solid red'
        TR.style.border = '1px solid red'
        width_of_border.style.border = '1px solid red'
        width_of_TD.style.border = '1px solid red'
        height_of_TD.style.border = '1px solid red'
        type_of_border.style.border = '1px solid red'
        color_of_border.style.border = '1px solid red'
        box1P.style.display = 'block'
    }

})

TR.onblur = function(){
    if(this.value != ''){
        TR.style.border = '1px solid black'
    }
}
TD.onblur = function(){
    if(this.value != ''){
        TD.style.border = '1px solid black'
    }
}
width_of_border.onblur = function(){
    if(this.value != ''){
        width_of_border.style.border = '1px solid black'
    }
}
width_of_TD.onblur = function(){
    if(this.value != ''){
        width_of_TD.style.border = '1px solid black'
    }
}
height_of_TD.onblur = function(){
    if(this.value != ''){
        height_of_TD.style.border = '1px solid black'
    }
}
type_of_border.onblur = function(){
    if(this.value != ''){
        type_of_border.style.border = '1px solid black'
    }
}
color_of_border.onblur = function(){
    if(this.value != ''){
        color_of_border.style.border = '1px solid black'
    }
}





RESETBT.addEventListener('click', function reset() {
    TD.value = ''
    TR.value = ''
    width_of_border.value = ''
    width_of_TD.value = ''
    height_of_TD.value = ''
    type_of_border.value = ''
    color_of_border.value = ''
})
CLOSE2.addEventListener('click', function () {
    TABLECONTEINER.style.display = 'none'
    box1P.style.display = 'none'

})
UlListImg.addEventListener('click', function () {
    UlConteiner.style.display = 'block'
})

LISTBT.addEventListener('click', function () {
    if (COUNTLI.value != '' && LIMARKS.value != '') {
        UlConteiner.style.display = 'none'
        let myli = '';
        myli += `<ul style="list-style-type: ${LIMARKS.value}">`;
        for (let i = 0; i < COUNTLI.value; i++) {
            myli += `<li> List${i + 1} </li>`;
        }
        myli += `</ul>`;
        TEXTAREA.value += myli;
        COUNTLI.style.border = ''
        LIMARKS.style.border = ''
        BOX3p.style.display = 'none'
    } else if (COUNTLI.value != '') {
        COUNTLI.style.border = ''
    } else if (LIMARKS.value != '') {
        LIMARKS.style.border = ''
    } else {
        COUNTLI.style.border = '1px solid red'
        LIMARKS.style.border = '1px solid red'
        BOX3p.style.display = 'block'

    }

})
CLOSE3.addEventListener('click', function () {
    UlConteiner.style.display = 'none'
    COUNTLI.style.border = ''
    LIMARKS.style.border = ''
})
RESETULBTN.addEventListener('click', function () {
    COUNTLI.style.border = ''
    LIMARKS.style.border = ''
    COUNTLI.value = ''
    LIMARKS.value = ''
    BOX3p.style.display = 'none'
})


OlListImg.addEventListener('click', function () {
    OlConteiner.style.display = 'block'
})

LISTOLBT.addEventListener('click', function () {
    if (COUNTOL.value != '' && OLMARKS.value != '') {
        OlConteiner.style.display = 'none'
        let myli = '';
        myli += `<ol style="list-style-type: ${OLMARKS.value}">`;
        for (let i = 0; i < COUNTOL.value; i++) {
            myli += `<li> List ${i + 1} </li>`;
        }
        myli += `</ol>`;
        TEXTAREA.value += myli;
        COUNTOL.style.border = ''
        OLMARKS.style.border = ''
        BOX4p.style.display = 'none'
    } else if (COUNTOL.value != '') {
        COUNTOL.style.border = ''
    } else if (OLMARKS.value != '') {
        OLMARKS.style.border = ''
    } else {
        COUNTOL.style.border = '1px solid red'
        OLMARKS.style.border = '1px solid red'
        BOX4p.style.display = 'block'

    }

})
CLOSE4.addEventListener('click', function () {
    OlConteiner.style.display = 'none'
    COUNTOL.style.border = ''
    OLMARKS.style.border = ''
})
RESETOLBTN.addEventListener('click', function () {
    COUNTOL.style.border = ''
    OLMARKS.style.border = ''
    COUNTOL.value = ''
    OLMARKS.value = ''
    BOX4p.style.display = 'none'
})