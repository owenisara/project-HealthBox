const height_bmi = document.querySelector("#height"); 
const weight_bmi = document.querySelector("#weight"); 
const btn_cal = document.querySelector('.calculate')
const btn_clear_bmi = document.querySelector('.clear-bmi');
const avg = document.querySelector('.avg')
const info_bmi = document.querySelector('.info')
let sum = 0

avg.innerHTML=(0)
btn_clear_bmi.addEventListener('click',()=>{
   height_bmi.value=null
   weight_bmi.value=null
   avg.innerHTML=(0)
})
btn_cal.addEventListener('click',()=>{
    sum = weight_bmi.value/((height_bmi.value/100)**2);
       avg.innerHTML=(sum.toFixed(1));
       console.log(sum)
    
    })