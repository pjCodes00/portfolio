
const errMsg= document.querySelector('.err-msg')

      const todoList= JSON.parse(localStorage.getItem('todoList')) || [
        {
       text: 'watch youtube',
       checked: false
      },{
       text:'make dinner',
       checked: false
      },{
        text:  'wash dishes',
        checked: false
      }
       ]

     renderTodo();
      function renderTodo () {
     
      let todoHTML= '';
      todoList.forEach((todo, index) => {
        
        todoHTML += ` 
        <div class="the-checkbox1">
          <input class="the-checkbox js-the-checkbox" type="checkbox" ${todo.checked ? 'checked' :''} data-index=${index}> 
        </div>
        <div class="button-text"> 
         <p class="text-button js-text-button ${todo.checked ? 'toggled': ''}">${todo.text}</p>
        </div>
        <div class="delete-div">
          <button class="delete-button js-delete-button">x</button>
         </div>
        `
          
      })
      console.log(todoHTML)

      document.querySelector('.js-checkbox-div').innerHTML= todoHTML;
      
      
      document.querySelectorAll('.js-delete-button')
       .forEach((button, index) => {
         button.addEventListener('click', () => {
          todoList.splice(index, 1)
          renderTodo();
          saveToStorage();
         })
      })

      document.querySelectorAll('.js-the-checkbox')
       .forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
          const index= checkbox.dataset.index
         todoList[index].checked= !todoList[index].checked

      
          renderTodo();
          saveToStorage();
        } )
       })

      
      
  
      saveToStorage();
    }


 
      const addButton= document.querySelector('.js-add-button')
        addButton.addEventListener('click', () => {
        const inputElement= document.querySelector('.js-input')
         const text= inputElement.value

         if(!text) {
         errMsg.style.display='block'

         setTimeout(() => {
            errMsg.style.display='none'
         }, 1500)
          return;
         }

         todoList.push({
          text: text,
          checked: false
         })

         console.log(todoList)
         inputElement.value= '';
         renderTodo();
         saveToStorage();


       
      })
    

    function saveToStorage() {
      localStorage.setItem('todoList', JSON.stringify(todoList))
    }

  
     
      