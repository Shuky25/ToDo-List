const add = () => {
    if(document.querySelector('#input').value != "") {

        let text = document.querySelector('#input').value;
        document.querySelector('#input').value = "";
        let li = document.createElement('li');
        let btn = document.createElement('button');
    
        li.innerText = text;
    
        btn.id = "delete";
        btn.innerText = "X";
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        });
    
        li.appendChild(btn);
        document.querySelector('ul').appendChild(li);
    }
    else {
        alert("You must type your exam");
    }
}