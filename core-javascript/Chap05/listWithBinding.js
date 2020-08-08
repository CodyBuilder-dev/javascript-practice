/* 
클로저 없이, 콜백함수를 밖에다 따로 정의해서 사용하는 코드
*/
let fruits = ['apple','banana','peach'];
let $ul = document.createElement('ul');

let alertFruit = function(fruit) {
    alert('당신의 선택은 '+ fruit);
    console.log('당신의 선택은 '+ fruit);
}

let alertFruitBuilder = function(fruit){
    return function() {
        alert('당신의 선택은 '+ fruit);
    };
};

fruits.forEach(function(fruit){
    let $li = document.createElement('li');
    $li.innerText = fruit;
    // 그냥 연결할 경우, Eventlistener가  alertFruit에 이벤트 객체를 인자로 전달함
    //$li.addEventListener('click',alertFruit);
    
    //bind를 통해 해결
    // this등의 제약사항이 걸리게 됨
    // $li.addEventListener('click',alertFruit.bind(null,fruit));
    

    // 고차함수(함수를 인자로 받거나, 함수를 반환하는 함수)이용 해결
    // functionBuilder 이용
    $li.addEventListener('click',alertFruitBuilder(fruit));

    $ul.appendChild($li);

});

document.body.appendChild($ul);
alertFruit(fruits[1]);