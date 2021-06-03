const btnRandomOrder = document.querySelector('.btn-random');
const btnOrderCreator = document.querySelector('.btn-creator');
const btnFetch = document.querySelector('.btn-fetch');
const btnRandProd = document.querySelector('.btn-random-prod');
const randProd = document.querySelector('.rand-prod');
const btnAdd = document.querySelector('.btn-addToBill');
const btnClear = document.querySelector('.btn-clear');
const li = document.querySelector('.bill');
const ul = document.querySelector('.ul');



let maxOrderPrice;
let finalOrder = [];
let billDev = [];
let actualBill= 0; 
let moneyHolder; 

    fetch('./menu.json')
        .then((response) => { 
            return response.json()
        })
        .then((data) => {  
          let globalJson = data[0].menu
          btnRandProd.addEventListener('click', function() {
            clearData(); 
            addToList(globalJson,finalOrder);
            btnAdd.addEventListener('click', function(){
                   let newLi = document.createElement('li');
                   newLi.innerHTML = finalOrder[0].name
                    ul.appendChild(newLi)
                    

            })
          
            randProd.innerHTML = finalOrder[0].name
            console.log(billDev)
        })
        })    
 btnClear.addEventListener('click', function(){
     removeElements(ul);
 }) 

        function removeElements(parent){
            while (parent.firstChild){
          parent.removeChild(parent.firstChild);
        }
        }
function getRandPosition(array){
    return  Math.floor(Math.random()*array.length);
  }

function clearData(){
    finalOrder= [];
    actualBill = 0;
    moneyLeft = 0
}
function addToList(json,typeOfOrder,order,size){ 
    order = json[getRandPosition(json)]
    for(key in json){ 
        if(size && order.size === size){
            typeOfOrder.push(order)
            console.log(finalOrder)
            return finalOrder
            break  
        }else if(size === undefined){
            typeOfOrder.push(order)
            console.log(finalOrder)

            return finalOrder
            break
        }else if(typeOfOrder.length === 0){
            typeOfOrder.push(order)
            console.log(finalOrder)
            return finalOrder
        }else{console.error(`Specific s chosen but its not equal to ${size}`)}   
        }
    }  
  


 
    function scope(json){
        let holder = addToList(json,finalOrder);
        console.log(holder);
    } 

//zamień o takiej samej cenie 
//kreator zamówienia
//strefa dobrych cen
// gotowe mmenu, ale dodaj jakiś produkt
//popularne zestawy coś ala hot deals