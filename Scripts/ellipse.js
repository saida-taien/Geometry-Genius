// function ellipseAreaCalculate()
// {
//     const ellipseBaseInput = document.getElementById('ellipse-base');
//     const ellipseBase = parseFloat(ellipseBaseInput.value);


//     const ellipseHeightInput = document.getElementById('ellipse-height');
//     const ellipseHeight = parseFloat(ellipseHeightInput.value);

//     const area = 3.1416 * ellipseBase * ellipseHeight;

//     console.log(area)


//     //display ellipse area

//     const ellipseAreaSpan = document.getElementById('ellipse-area')
//     ellipseAreaSpan.innerText = area;

//     const areaCal = document.getElementById('area-cal');
//     areaCal.innerText = area;


//     ellipseBaseInput.value = '';
//     ellipseHeightInput.value = '';



    
// }

function ellipseAreaCalculate()
{
    const base = gteInputValueById('ellipse-base');
    const height = gteInputValueById('ellipse-height');

    const area = 3.1416*base*height;

    setInnerTextById('ellipse-area' , area);


    const areaCal = document.getElementById('area-cal');
    areaCal.innerText = area;
}


function gteInputValueById(inputFieldId)
{
    const inputField = document.getElementById(inputFieldId);
    const  inputValueText  = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}


function setInnerTextById(elementId , area)
{
    const element =document.getElementById(elementId);
    element.innerText = area;
}

