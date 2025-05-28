 
      const draggables= document.querySelectorAll('.list-cont')
      const containers= document.querySelectorAll('.container1, .container2')

      draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging')
          setTimeout(() => {
            draggable.style.display= 'none'
          }, 0)
        })

        draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging')
          draggable.style.display='flex'
        })
      })


      containers.forEach((container) => {
        container.addEventListener('dragover', (e) => {
          e.preventDefault()
        })

        container.addEventListener('drop', (e) => {
          e.preventDefault()
          const draggable= document.querySelector('.dragging')
          container.appendChild(draggable)
        })
      })
    