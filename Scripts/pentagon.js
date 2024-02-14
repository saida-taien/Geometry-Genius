// function pentagonAreaCalculate()
// {
//     const pentagonBaseInput = document.getElementById('pentagon-base');
//     const pentagonBase = parseFloat(pentagonBaseInput.value);


//     const pentagonHeightInput = document.getElementById('pentagon-height');
//     const pentagonHeight = parseFloat(pentagonHeightInput.value);

//     const area = 0.5 * pentagonBase * pentagonHeight;

//     console.log(area)


//     //display pentagon area

//     const pentagonAreaSpan = document.getElementById('pentagon-area')
//     pentagonAreaSpan.innerText = area;


//     pentagonBaseInput.value = '';
//     pentagonHeightInput.value = '';
// }



function pentagonAreaCalculate()
{
    const base = gteInputValueById('pentagon-base');
    const height = gteInputValueById('pentagon-height');

    const area = 3.1416*base*height;

    setInnerTextById('pentagon-area' , area);


    const areaCal = document.getElementById('area-cal');
    areaCal.innerText = area;
}