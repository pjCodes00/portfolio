 

    const projectBtn= document.querySelectorAll('.btn-cont')
    const  mainConts= document.querySelectorAll('.main-container-1, .main-container-2, .main-container-3')
    const arrows= document.querySelectorAll('.fa-arrow-down')
    const modeBtn= document.querySelector('.fa-sun')
    const allProjConts= document.querySelectorAll('.all-proj-cont')

    modeBtn.addEventListener('click', () => {
      const body= document.body

      body.classList.toggle('white-mode')

      if(modeBtn.classList.contains('fa-sun')) {
        modeBtn.classList.replace('fa-sun', 'fa-moon')
      } else if(modeBtn.classList.contains('fa-moon')) {
        modeBtn.classList.replace('fa-moon', 'fa-sun')
      }

    })

    

    projectBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const mainCont= mainConts[index]
        const arrow= arrows[index]
        const allProjCont= allProjConts[index] 

        const isHidden= mainCont.style.display === 'none'

       // arrow.classList.add('rotate')

        if(isHidden) {
          mainCont.style.display= 'grid'
          allProjCont.style.height= allProjCont.scrollHeight + 'px'
          arrow.classList.remove('rotate')

        } else{
          mainCont.style.display= 'none'
          allProjCont.style.height= '80px'
          arrow.classList.add('rotate')
        }
       
      })
    })

    async function fetchOriginalProj() {
      const response= await fetch('/api/v1/original')

      const data= await response.json()
      console.log(data)

      const projects= data.projects

      let html;
      projects.forEach((project) => {
         html= `
          <div class="image-cont-1">
            <img class="original-image" src="${project.image}">
          </div>
          <div class="description-cont-1">
            <p class="proj-title">${project.title}</p>
            <p class="proj-des">${project.description}</p>
            <div class="original-proj-btns">
              <a href="${project.link}" target="_blank" class="proj-git-btn view-project">View project</a>
              <a href="${project.github}" target="_blank" class="proj-git-btn">Github</a>
            </div>
          </div>
      `
      })

      document.querySelector('.main-container-1').innerHTML= html
    }
    fetchOriginalProj()

    async function fetchBackendProj() {
      const response= await fetch('/api/v1/backend')

      const data= await response.json()
      console.log(data)

      const projects= data.projects

      let html=''
      projects.forEach((project) => {
        html += `
         <div class="grid-box">
            <div class="grid-image">
              <img class="backend-image" src="${project.image}">
            </div>
            <div class="grid-description">
              <p class="project-title">${project.title}</p>
              <p>${project.description}</p>
            </div>
            <div class="grid-btn">
              <a href="${project.link}" target="_blank" class="proj-git-btn view-project">View project</a>
              <a href="${project.github}" target="_blank" class="proj-git-btn">Github</a>
            </div>
          </div>
        `
      })

      document.querySelector('.main-container-2').innerHTML= html
    }

    fetchBackendProj()

    async function fetchFrontendProj() {
      const response= await fetch('/api/v1/frontend')

      const data= await response.json()
      console.log(data)

      const projects= data.projects

      let html=''
      projects.forEach((project) => {
        html+= `
          <div class="grid-box">
            <div class="grid-image">
              <img class="frontend-image" src="${project.image}">
            </div>
            <div class="grid-description">
              <p class="project-title">${project.title}</p>
              <p class="project-description">${project.description}</p>
            </div>
            <div class="grid-btn">
              <a href="${project.link}" target="_blank" class="proj-git-btn view-project">View project</a>
              <a href="${project.github}" target="_blank" class="proj-git-btn">Github</a>
            </div>
          </div>
        `
      })

      document.querySelector('.main-container-3').innerHTML= html

    

    }

    fetchFrontendProj()
  