
const  point = document.querySelectorAll('.btn');


document.querySelector('.btn-container').addEventListener('click', ()=>{
    document.querySelector('.thanku-container').classList.add('thanku-container-active');
    document.querySelector('.container').classList.add('container-noactive');
 });

point.forEach(function(btnValue){
const storeValue = btnValue.addEventListener('click', function(btn){
          const newValue =  btnValue.innerText;
          document.querySelector('.userRating').innerText = `You have given ${newValue} out of 5`;          
    })
});
    

