( () => {
    const btn = document.querySelector('[data-form-btn]'); //seleccionamos el elemento html con el data

    const createTask = (e)=>{
        e.preventDefault();
        //capturamos el elemento
        const input = document.querySelector('[data-form-input]'); 
        // del elemento queremos el valor de lo que escribe
        const value = input.value;
        const list = document.querySelector('[data-list]');
        //creramos un elemento li
        const task=document.createElement('li'); 
        // le pusismos nombre de clase al elemento
        task.classList.add('card'); 
        //el valor lo ponemos en vacio
        input.value = "" 
        //creamos el div y el span
        const taskContent = document.createElement('div');
        const titleTask = document.createElement('span')
        // al span le colocamos de clase task
        titleTask.classList.add('task');
        // al span le colocamos el valor de lo que escribimos en el input
        titleTask.innerText=value;
        // al div le agregamos elemento hijo i con sus nombres de clase
        taskContent.appendChild(checkComplete());
        // al div le agregamos elemento span con su valor
        taskContent.appendChild(titleTask);
        // al li de clase card le agregamos el contenido de taskContent
        task.appendChild(taskContent);
        //al ul le agregamos la lista li 
        list.appendChild(task)
    }


    btn.addEventListener("click",createTask);

    const checkComplete = () => {
        const i = document.createElement('i');
        i.classList.add("far","fa-check-square","icon")
        i.addEventListener("click",completeTask)
        return i
    }

    const completeTask = (e) =>{

        const element = e.target
        element.classList.toggle("fas")
        element.classList.toggle("comlpeteIcon")
        element.classList.toggle("far")
    }
//toogle verifica si existe o no y asi cambia los nombres

})();