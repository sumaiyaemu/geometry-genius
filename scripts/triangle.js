function calculateTriangleArea(){
    const triangleBaseInput = document .getElementById('traiangle-base')
    const triangleBaseText = triangleBaseInput. value;
    const base= parseFloat(triangleBaseText)
    //console.log(base)

    const triangleHeightInput = document .getElementById('traiangle-height')
    const triangleHeightText = triangleHeightInput. value;
    const height = parseFloat(triangleHeightText)
    //console.log(height)
    const area = 0.5 * base * height;
    //console.log('area of the triangle is:',area)

    const triangleAreaSpan = document .getElementById('triangle-area')
    triangleAreaSpan .innerText = area;
    //console .log(triangleAreaSpan)
}