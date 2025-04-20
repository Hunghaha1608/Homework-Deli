const pressingthing = document.querySelector('button')
console.log(pressingthing);
const ele = document.querySelector('element')
let ChangeText = 'this text will be changed'

pressingthing.onclick = ()=> {
    ele.innerText = ChangeText;
}