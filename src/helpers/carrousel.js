export const btn1 = () => {
    const grande    = document.querySelector('.grande')
    const punto     = document.querySelectorAll('.punto')
    grande.style.transform = `translateX(90%)`
    punto.forEach( ( cadaPunto , i )=>{
      punto[i].classList.remove('activo')
    })
    punto[0].classList.add('activo')
}

export const btn2 = () => {
    const grande    = document.querySelector('.grande')
    const punto     = document.querySelectorAll('.punto')
    grande.style.transform = `translateX(0%)`
    punto.forEach( ( cadaPunto , i )=>{
      punto[i].classList.remove('activo')
    })
    punto[1].classList.add('activo')
}

export const btn3 = () => {
    const grande    = document.querySelector('.grande')
    const punto     = document.querySelectorAll('.punto')
    grande.style.transform = `translateX(-90%)`
    punto.forEach( ( cadaPunto , i )=>{
      punto[i].classList.remove('activo')
    })
    punto[2].classList.add('activo')
}