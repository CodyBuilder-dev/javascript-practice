(function(){
    let count = 0;
    const button = document.createElement('button');
    button.innerText = 'click';
    
    let clickHandler = function() {
        console.log(++count, 'times clicked');
        if(count >= 10) {
            button.removeEventListener('click',clickHandler);
            clickHandler = null;
        }
    }
    button.addEventListener('click',clickHandler);
    document.body.appendChild(button);
})();