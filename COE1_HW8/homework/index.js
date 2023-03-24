/* eslint-disable no-magic-numbers */
/* START TASK 1: Your code goes here */

const table = document.querySelector('table');
const cells=document.querySelectorAll('td');

//Adding eventlistener to table
table.addEventListener('click',function(eve){
  const cell= eve.target;
  //when special cell is clicked
  if (cell.classList.contains('special')) {
    cell.classList.add('yellow')
      cells.forEach(c => {
        if ( !c.parentNode.classList.contains('blue') && !c.classList.contains('yellow')) {
          c.classList.add('green');
        }
      });
    }
   
   // adding yellow color to cell
    cell.classList.add('yellow')
    
    //when 1st column cell is clicked
    if(cell.cellIndex===0){
    
      //row index of clicked cell
      let rowIn=cell.parentNode.rowIndex;
      
      rowIn=rowIn*3;
      for(let i=rowIn;i<=rowIn+2;++i){
        cells[i].classList.remove('green');
      }
        const row = cell.parentNode;

        //adding blue color to row
        cell.classList.remove('yellow');
        row.classList.add('blue');
    } else{
      //overwrite green color with yellow color
      if(cell.classList.contains('green')){
        cell.classList.remove('green')
        cell.classList.add('yellow')
      }
    }
    
})




/* END TASK 1 */

/* START TASK 2: Your code goes here */

//selecting input field
const input = document.getElementById('validate');
const val = /^[+]{1}(380)[0-9]{9}$/


const btn = document.querySelector('button');
const p =document.createElement('p');
input.addEventListener('input',function(){
    if(val.test(input.value)){
        btn.disabled=false;
        p.classList.remove('para_i')
        p.classList.remove('inp')
        p.innerHTML='';
        input.style.borderColor='black';
        btn.addEventListener('click',function(){
        p.innerHTML='Data was succesfully sent';
        p.classList.add('para_c');
        input.insertAdjacentElement('beforebegin',p)
        })
    }else{
            input.style.borderColor='red';
            btn.disabled=true;
            p.innerHTML='Type number does not follow format +380*********';
            p.classList.remove('para_c');
            p.classList.add('para_i');
            p.classList.add('inp');
            input.insertAdjacentElement('beforebegin',p)
    
       
    }
})

/* END TASK 2 */

