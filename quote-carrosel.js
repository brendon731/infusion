
    let nextq = document.querySelectorAll(".quote-out .next")[0]
    let prevq = document.querySelectorAll(".quote-out .prev")[0]

    let showQuote = 0
    let quoteCount = figure.length - 1
    nextq.onclick = e =>{
    
        showQuote = showQuote === quoteCount? 0: showQuote + 1 
        figure.forEach(e=>{
            e.classList.remove("show")
        })

        figure[showQuote].classList.add("show")


        let height = figure[showQuote].clientHeight
        innerq.style.height = `${height}px`
    }

    prevq.onclick = e =>{
        showQuote = showQuote === 0? quoteCount: showQuote - 1

        figure.forEach(e=>{
            e.classList.remove("show")
        })
        figure[showQuote].classList.add("show")

        let height = figure[showQuote].clientHeight
        innerq.style.height = `${height}px`
    }

    let btn = document.querySelectorAll("header button")[0]
    let menu = document.querySelectorAll("header nav")[0]
    btn.onclick = e =>{
        menu.classList.toggle("menu-closed")
        
    }



