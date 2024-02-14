function rectangleAreaCalculate()
{
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = parseFloat(rectangleWidthInput.value);


    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeight = parseFloat(rectangleHeightInput.value);

    const area = rectangleWidth * rectangleHeight;

    console.log(area)


    //display triangle area

    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area;


    rectangleWidthInput.value = '';
    rectangleHeightInput.value = '';


}