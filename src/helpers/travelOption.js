export const travel = () => {
    console.log("Hi!")
    const travel = document.getElementsByClassName("options-travel")
    const opacity = document.getElementsByClassName("opacity")
    travel[0].style.display = "inline"
    opacity[0].style.opacity = "0.5"
    
}

export const travelBlur = () => {
    const travel = document.getElementsByClassName("options-travel")
    const opacity = document.getElementsByClassName("opacity")
    travel[0].style.display = "none"
    opacity[0].style.opacity = "1"
}