const BtnNext = document.querySelector('.question__buttonnext')
const BtnBack = document.querySelector('.question__buttonback')
const form = document.querySelector('.form')
const quizstep = document.querySelector('.quiz__step')
const slidesCount = form.querySelectorAll('.quiz__card').length

let activeSlideIndex = 0
BtnBackHide ()

function changeSlide(direction) {
    if (direction === 'next') {
        BtnBack.style.visibility = "visible"
        
        activeSlideIndex++
        if (activeSlideIndex === slidesCount-1)
        {
            BtnNext.style.visibility = "hidden"
            BtnBack.style.visibility = "hidden"
            quizstep.style.visibility = "hidden"
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
    const height = form.clientHeight
    form.style.transform = `translateY(${-activeSlideIndex*height}px)`
}

function BtnBackHide () {
  if (activeSlideIndex === 0) {
      BtnBack.style.visibility = "hidden"
  }
}

BtnNext.addEventListener('click', () => {
    changeSlide('next')
})
BtnBack.addEventListener('click', () => {
    changeSlide('back')
})
