const addbutton = document.querySelector('#addbtn');
const removebutton = document.querySelector('#revbtn');
const list = document.querySelector('#list');
var item = document.querySelector("#todo").value;
addbutton.onclick = function(){
    var item = document.querySelector("#todo").value;
    var text = document.createTextNode(item);
    var listitem = document.createElement('li');
    listitem.appendChild(text);
    list.appendChild(listitem); 
    savlist();
    document.forms.myform.reset();
}
removebutton.onclick = function(){
    
    var list = document.querySelector('#list');

    
    list.removeChild(list.childNodes[0]);
    savlist();


}
function savlist(){
    var html = list.innerHTML;
    localStorage.setItem("listHTML",html);
}

