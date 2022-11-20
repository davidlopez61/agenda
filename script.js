const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');

const createTask = (e)=>{
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}

console.log(btn)
//Listener
btn.addEventListener("click", (e) =>{
    
})