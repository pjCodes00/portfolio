 
    const listenBtn= document.querySelector('.js-listen-btn')
    const playIcon=  document.querySelector('.fa-pause')
    const errMsg= document.querySelector('.err-msg')

    let speech= new SpeechSynthesisUtterance()
    let voices= []

    let voiceSelect= document.querySelector('select')

    window.speechSynthesis.onvoiceschanged= () => {
      voices= window.speechSynthesis.getVoices()
      speech.voice= voices[0]

      voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i)
      })
    }

    voiceSelect.addEventListener('change', () =>{
      speech.voice= voices[voiceSelect.value]
    })


    listenBtn.addEventListener('click', () => {
       speech.text= document.querySelector('.js-textarea').value
       
       if(!speech.text) {
        errMsg.style.display= 'block'
        setTimeout(() => {
          errMsg.style.display= 'none'
        }, 2000)
       }

       if(speech.text) {
         errMsg.style.display= 'none'
        window.speechSynthesis.speak(speech)

        if(playIcon.classList.contains('fa-pause')) {
        playIcon.classList.replace('fa-pause', 'fa-play')
       }

       speech.onend= () => {
        if (playIcon.classList.contains('fa-play')) {
        playIcon.classList.replace('fa-play', 'fa-pause');
      }
       }
       }
      
    })
    
    