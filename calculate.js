function calculatetringlearea(){
    const tringleinput = document.getElementById('tringle-base');
    const tringlebasetext = tringleinput.value;
    const base =parseFloat(tringlebasetext)
    console.log(base)

    // get change hight value
    const tringlehightinput = document.getElementById('tringle-hight');
    const tringlehightinputtext = tringlehightinput.value;
    const hight = parseFloat(tringlehightinputtext)
    console.log(hight)
    // calculate
    const area = 0.5 * base * hight;
    console.log('area of the tringle is', area)
    
    // display tringle
    const tringlearea = document.getElementById('tringle-area');
    tringlearea.innerText = area;
}

// rectangle area calculate
function calculaterectanglearea(){
const rectangleinput = document.getElementById('rectangle-w');
const rectangletext = rectangleinput.value;
const width =parseFloat(rectangletext)
console.log(width)

// length input
const rectanglelengthinput = document.getElementById('rectangle-length');
const rectanglelengthtext =rectanglelengthinput.value;
const length= parseFloat(rectanglelengthtext)
console.log(length)
// calculate
const area = width * length;
console.log('rectangle area is ', area)
// display result
const rectanglearea = document.getElementById('rectangle-area')
rectanglearea.innerText = area;
}

// Parallelogram calculate area
function Parallelogramcalculatearer(){
    const Parallelogrambaseinput = document.getElementById('Parallelogram-base');
    const Parallelogramtext = Parallelogrambaseinput.value;
    const base =parseFloat(Parallelogramtext)
    console.log(base);
    // length input
    const Parallelogramlengthinput = document.getElementById('Parallelogram-length');
    const Parallelogramlengthtext = Parallelogramlengthinput.value;
    const hight = parseFloat(Parallelogramlengthtext);
    console.log(hight);
    // calculate area
    const area = base * hight;
    console.log('parallelogram area is', area);
    // display result
    const parallelogramarea = document.getElementById('Parallelogram-area')
    parallelogramarea.innerText = area;
}

// Rhombus calculate area
function Rhombuscalculatearea(){
    const Rhombusbaseinput = document.getElementById('Rhombus-base');
    const Rhombusbasetext = Rhombusbaseinput.value;
    const b1 = parseFloat(Rhombusbasetext);
    console.log(b1);
    // length input 
    const Rhombuslengthinput = document.getElementById('Rhombus-length');
    const  Rhombuslengthtext = Rhombuslengthinput.value;
    const b2 =parseFloat(Rhombuslengthtext);
    console.log(b2);
    // calculate area 
    const area = 0.5 * b1 * b2 ;
    console.log('rhombus area is', area);
    // display result
    const rhombusarea = document.getElementById('Rhombus-area');
    rhombusarea.innerText = area;
}
// Pentagon calculatev area 
function Pentagoncalculatearea(){
    const Pentagonbaseinput = document.getElementById('Pentagon-base');
    const Pentagonbasetext =Pentagonbaseinput.value;
    const p = parseFloat(Pentagonbasetext);
    console.log(p);
    // input b part
    const Pentagonlengthinput = document.getElementById('Pentagon-length');
    const Pentagontext =Pentagonlengthinput.value;
    const b = parseFloat(Pentagontext)
    console.log(b);
    // calculate are 
    const area = 0.5 * p * b;
    console.log('pentagon area is', area);
    //  display result
    const pentagonararea = document.getElementById('Pentagon-area');
    pentagonararea.innerText = area;
}
// Ellipse calculation area 
function Ellipsecalculatearea(){
    const Ellipsebaseinput = document.getElementById('Ellipse-base');
    const Ellipsebasetext = Ellipsebaseinput.value;
    const base = parseFloat(Ellipsebasetext);
    console.log(base);
    // input length
    const Ellipselengthinput = document.getElementById('Ellipse-length');
    const Ellipselengthtext = Ellipselengthinput.value;
    const length = parseFloat(Ellipsebasetext);
    console.log(length);
    // calculate area 
    const area = 22/7 * base * length;
    console.log('ellipse area is', area);
    // display result
    const ellipsearea = document.getElementById('Ellipse-area');
    ellipsearea.innerText = area.toFixed(2);

}

// // shorcut option for long input, advance 
// function calculatemath(){
//     const base =getinputvaluebyid('parallelogram-base')
//     console.log(base);
//     const hight = getinputvaluebyid('Parallelogram-length')
//     console.log(hight)
//     setinnertextbyid('Parallelogram-area', area)
// }
// function getinputvaluebyid(inputFieldId){
//     const inputFieldId = document.getElementById(inputFieldId);
//     const inputvaluetext = inputFieldId.value;
//     const inputvalue = parseFloat(inputvaluetext)
//     // console.log(inputvalue)
//     return inputvalue;
// }
// function setinnertextbyid(elementid, area){
//     const element = document.getElementById(elementid)
//     element.innerText = area
// }