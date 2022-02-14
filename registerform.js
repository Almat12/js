//ex 2
const checkInput = (event) =>{
    const errorElement =Array.from(event.target.parentNode.querySelectorAll('span'));
    if (event.target.value === '' &&!errorElement.length){
        event.target.insertAdjacentHTML('afterEnd','<span class="text-danger">Required</span>')
    }
    if(errorElement && event.target.value!==''){
        errorElement.forEach(elem => elem.remove());
    }
};
document.getElementsById('name')
.addEventListener('blur,checkInput');
document.getElementsById('password')
.addEventListener('blur,checkInput');
document.getElementsById('confirPassword')
.addEventListener('blur,checkInput');
//ex3
document.getElementById('confirmPassword')
          .addEventListener('blur',(event)=>{
              if(event.target.value !== document.getElementById('password').value){
                  event.target.insertAdjacentHTML('afterEnd','<span class="text-danger">Passwords Should Match</span>');
              }
          });
//ex4

//ex5


//ex6

//ex7

