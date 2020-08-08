/* 이벤트 리스너를 사용함으로서 콜백이 생기고, 
콜백으로 인해 클로저가 생성되는 코드
*/
var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul');

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click',function(){
        alert("당신의 선택은"+fruit)
        //console.log("당신의 선택은"+fruit);
    });
    $ul.appendChild($li);
});

document.body.appendChild($ul);