function calculateRectangleArea(){
    const rectangleWidthInput = document .getElementById('rectangle-width')
    const rectangleWidrhText = rectangleWidthInput. value;
    const width= parseFloat(rectangleWidrhText)
    //console.log(width)

    const rectangleLenghtInput = document .getElementById('rectangle-length')
    const rectangleLengthText = rectangleLenghtInput. value;
    const length = parseFloat(rectangleLengthText)
    //console.log(length)
    const rectangleArea = width * length;
    //console.log('area of the rectangle is:',rectangleArea)

    const rectangleAreaSpan = document .getElementById('rectangle-area')
    rectangleAreaSpan .innerText = rectangleArea;
    //console .log(rectangleAreaSpan)
}