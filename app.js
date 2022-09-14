const BtnNext = document.querySelector('.question__buttonnext')
const BtnBack = document.querySelector('.question__buttonback')
const quiz__formcard = document.querySelector('.quiz__formcard')
const slidesCount = quiz__formcard.querySelectorAll('div').length

let activeSlideIndex = 0

function changeSlide(direction) {
    if (direction === 'next') {
        BtnBack.style.visibility = "visible"
        activeSlideIndex++
        if (activeSlideIndex === slidesCount-1)
        {
            BtnNext.style.visibility = "hidden"
            BtnBack.style.visibility = "hidden"
        }
    } else if (direction === 'back') {
        BtnNext.style.visibility = "visible"
        if (activeSlideIndex === 1)
        {
            BtnBack.style.visibility = "hidden"
        }
        else (activeSlideIndex < 0) 
          activeSlideIndex--
    }

    const height = quiz__formcard.clientHeight

    quiz__formcard.style.transform = `translateY(${-activeSlideIndex*height}px)`
    
}

function BtnBackHide () {
  if (activeSlideIndex === 0) {
      BtnBack.style.visibility = "hidden"
  }
}

BtnBackHide ()

BtnNext.addEventListener('click', () => {
    changeSlide('next')
})
BtnBack.addEventListener('click', () => {
    changeSlide('back')
})