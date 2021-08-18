const display_pin=document.getElementById('display-pin')
const typed_numbers=document.getElementById("typed-numbers")
const blurs= document.getElementById('blur')
const notify_fail=document.getElementById('notify-fail')
const notify_success =document.getElementById('notify-success')
const generatePin=()=>{
    const pin = Math.floor(Math.random()*10000)+'';
    pin.length===3? generatePin():  display_pin.value=pin;
    document.getElementById('submit-btn').removeAttribute('disabled')
}
document.getElementById('key-pad').addEventListener('click',(event)=>{
       const num=event.target.innerText
       const preValue= typed_numbers.value
       num==='C'? typed_numbers.value="":
       num==="<"? typed_numbers.value=(typed_numbers.value).slice(0,-1):
       typed_numbers.value= preValue+num; 
})
const verifyPin=()=>{
      if(display_pin.value===typed_numbers.value){
        console.log(` ${display_pin.value} ${typed_numbers.value}`)
        blurs.style.zIndex='111'
        blurs.style.opacity="1"
        notify_success.style.opacity="1"
        notify_fail.style.opacity="0"
       setTimeout(()=>{
        blurs.style.zIndex='-111'
        blurs.style.opacity="0"
       },1000)
    }
    else if(display_pin.value!==typed_numbers.value){
        blurs.style.zIndex='111'
        blurs.style.opacity="1"
        notify_fail.style.opacity="1"
        notify_success.style.opacity="0"
       setTimeout(()=>{
        blurs.style.zIndex='-111'
        blurs.style.opacity="0"
       },1000)
    }
    display_pin.value=""
    typed_numbers.value=""
    document.getElementById('submit-btn').setAttribute('disabled' ,true)
}