/***
 * step - 1 : 
 */

function triangleAreaCalculate()
{
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = parseFloat(triangleBaseInput.value);


    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeight = parseFloat(triangleHeightInput.value);

    const area = 0.5 * triangleBase * triangleHeight;

    console.log(area)


    //display triangle area

    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText = area;


    triangleBaseInput.value = '';
    triangleHeightInput.value = '';
   


}