
      const selectBox= document.querySelector('.select-box')
      const selectList= document.querySelector('.select-list')
      const iconDivs= document.querySelectorAll('.icon-div')
      const arrow= document.querySelector('.image')
      const label= document.querySelector('.label')
      

      selectBox.addEventListener('click', () => {
         const onDisplay= selectList.style.display === 'block'

         if(onDisplay) {
          selectList.style.display= 'none'
          arrow.classList.remove('rotate')
         } else {
          selectList.style.display= 'block'
          arrow.classList.add('rotate')
         }
      })

     
      iconDivs.forEach((div) => {
        div.addEventListener('click', () => {
          const text= div.querySelector('.text').innerHTML
           
          label.innerHTML= text
          selectList.style.display= 'none'
          arrow.classList.remove('rotate')

        })
      })

    