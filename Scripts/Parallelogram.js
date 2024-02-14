function parallelogramAreaCalculate()
{
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBase = parseFloat(parallelogramBaseInput.value);


    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeight = parseFloat(parallelogramHeightInput.value);

    const area = parallelogramBase * parallelogramHeight;

    console.log(area)


    //display parallelogram area

    const parallelogramAreaSpan = document.getElementById('parallelogram-area')
    parallelogramAreaSpan.innerText = area;


    parallelogramBaseInput.value = '';
    parallelogramHeightInput.value = '';
}