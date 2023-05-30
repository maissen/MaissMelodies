window.onload = function(){
    
}


function save_custom(){
    if(count != 0){
        var item = document.getElementById('custom_item').cloneNode(true);
        item.style.display = 'flex';
        var customized = document.getElementById('customized');
        do{
            x = prompt('What would you like as a name ?');
        }while(x == '');
        item.getElementsByClassName('name')[0].textContent = x;
        item.id = '';

        var items = document.querySelectorAll('.sounds-gallery .item');
        

        for(let o = 0; o < items.length; o++){
            if(items[o].children[0].classList.contains('activeSound')){
                item.children[2].classList += o + '-' + items[o].children[2].value + '/';
            }
        }

        customized.appendChild(item);
        var saved_items = document.getElementsByClassName('custom_item');
        for(let j = 0; j < saved_items.length; j++){
            saved_items[j].onclick = function(event){
                if(event.target != "<button type=\"button\"><i class=\"fa-solid fa-heart\"></i></button>"){
                    play_custom(saved_items[j].children[2].getAttribute('class'));
                }
            }
        }
        for(let j = 0; j < saved_items.length; j++){
            saved_items[j].children[1].children[1].onclick = function(){
                if(confirm("Are you sure you want to delete " + item.getElementsByClassName('name')[0].textContent)){
                    customized.removeChild(saved_items[j]);
                }
            }
        }
    }
}

function play_custom(ch){

    document.getElementById('toolbar').children[1].children[2].click();

    var items = document.querySelectorAll('.sounds-gallery .item');
    for(let o = 0; o < items.length; o++){
        if(items[o].children[0].classList.contains('activeSound')){
            items[o].children[0].click();
        }
    }
    
    var pairs = ch.split('/');

    for (let i = 0; i < pairs.length-1; i++) {
        var pair = pairs[i].split('-');
        var x = pair[0];
        var y = pair[1];
        items[x].children[0].click();
        items[x].children[3].volume = y;
        items[x].children[2].value = y;
    }
    
}