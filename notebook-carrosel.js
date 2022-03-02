 
   let note = document.querySelectorAll(".notebook-inner figure")
    let next = document.querySelectorAll(".notebook-inner .next")[0]
    let prev = document.querySelectorAll(".notebook-inner .prev")[0]

    let show = 0
    next.onclick = e =>{
        show = show === 3? 0: show + 1 
        note.forEach(e=>{
            e.classList.remove("show")
        })
        note[show].classList.add("show")
    }

    prev.onclick = e =>{
        show = show === 0? 3: show - 1

        note.forEach(e=>{
            e.classList.remove("show")
        })
        note[show].classList.add("show")
    }

    let img = document.querySelectorAll(".notebook-inner figure")[0]
    let inner = document.querySelectorAll(".notebook-inner")[0]
    

    let figure = document.querySelectorAll(".quote-inner figure")
    let innerq = document.querySelectorAll(".quote-inner")[0]

    let currentQuote = document.querySelectorAll(".quote-inner .show")[0]

    window.addEventListener("resize", ()=>{
        inner.style.height = `${img.clientHeight + 40}px`

        currentQuote = document.querySelectorAll(".quote-inner .show")[0]
        let height = currentQuote.clientHeight

        innerq.style.height = `${height}px`


    })

    window.onload = e=>{
        inner.style.height = `${img.clientHeight + 40}px`

        let height = currentQuote.clientHeight
       
        
        innerq.style.height = `${height}px`

    }


    

   