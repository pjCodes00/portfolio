
      
      const createButton= document.querySelector('.js-create')
      const inputContainer= document.querySelector('.js-input-container')

      const saveToStorage= () => {
       const notes=  Array.from(document.querySelectorAll('.js-input')).map((text) => text.value)
       localStorage.setItem('notes', JSON.stringify(notes))
      }

      const loadFromStorage= () => {
       const savedNotes= JSON.parse(localStorage.getItem('notes')) || []
       savedNotes.forEach((note) => createNote(note))

      }

      const createNote= (text= '') => {
        const inputDiv= document.createElement('div')
        inputDiv.classList.add('input-div')

         inputDiv.innerHTML = `
               <div>
                <textarea class="input js-input" type="text" >${text}</textarea>
              </div>
              <div class="button-div">
                <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
              </div>`

              inputContainer.appendChild(inputDiv)

              const deleteButton= inputDiv.querySelector('.delete-button')
              deleteButton.addEventListener('click', () => {
                 inputDiv.remove()
                 saveToStorage();
              })

              const inputText= inputDiv.querySelector('.js-input')
              inputText.addEventListener('input', () => {
                saveToStorage();
              })
      }


      createButton.addEventListener('click', () => {
       createNote();
       saveToStorage();

      })

      loadFromStorage();


     
    
  

  

      


      
  