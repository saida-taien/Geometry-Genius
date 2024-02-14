function rhombusAreaCalculate()
{
    const rhombusBaseInput = document.getElementById('rhombus-base');
    const rhombusBase = parseFloat(rhombusBaseInput.value);


    const rhombusHeightInput = document.getElementById('rhombus-height');
    const rhombusHeight = parseFloat(rhombusHeightInput.value);

    const area = 0.5 * rhombusBase * rhombusHeight;

    console.log(area)


    //display rhombus area

    const rhombusAreaSpan = document.getElementById('rhombus-area')
    rhombusAreaSpan.innerText = area;


    rhombusBaseInput.value = '';
    rhombusHeightInput.value = '';
}
