const divGenerator = document.querySelector('.divGenerator');
divGenerator.addEventListener('click', () => {
    createGrid()
})
let buttonPressCounter = 0
let gridContent = 0
let grid = document.querySelector('.container')

function createGrid() {
      let dimensions = prompt("jaki bok wariacie (max 100)")
    if (dimensions>100 || dimensions<0){
    for (let i =dimensions; i>100 || i<0; i=dimensions ) {
      let newDimensions = prompt("Podaj poprawną wartość (max 100)");
        dimensions=newDimensions;
    }}

    if (buttonPressCounter > 0) {
        const elements = document.getElementsByClassName('sketch');
        while(elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        grid.style.height = +dimensions * 7 +"px"
        grid.style.width = +dimensions * 7 +"px"
        for (let i=0; i<(dimensions*dimensions); i++) {
            gridContent = document.createElement('div')
            gridContent.classList.add('sketch')
            grid.appendChild(gridContent)
        }
        buttonPressCounter +=1
    } else {
    grid.style.height = +dimensions * 7 +"px"
    grid.style.width = +dimensions * 7 +"px"
    for (let i=0; i<(dimensions*dimensions); i++) {
        gridContent = document.createElement('div')
        gridContent.classList.add('sketch')
        grid.appendChild(gridContent)
    }
        buttonPressCounter +=1
    }
}
const drawButton = document.querySelector('.draw')
drawButton.addEventListener('click', () => {paint()})


  function paint () {
    const draw = document.getElementsByClassName('.sketch');
    while (draw.length>0) {
        draw[0].addEventListener('click', () => {
            draw[0].classList.add('trail')
        } )
    }


    console.log('kurwa cos')

}


