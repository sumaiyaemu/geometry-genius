function calculateParallelogramArea(){
    const parallelogramBaseInput = document .getElementById('parallelogram-base')
    const parallelogramBaseText = parallelogramBaseInput. value;
    const base= parseFloat(parallelogramBaseText)
    console.log(base)

    const parallelogramHeightInput = document .getElementById('parallelogram-height')
    const parallelogramHeightText = parallelogramHeightInput. value;
    const height = parseFloat(parallelogramHeightText)
    console.log(height)
    const area = base * height;
    console.log('area of the triangle is:',area)

    const parallelogramAreaSpan = document .getElementById('parallelogram-area')
    parallelogramAreaSpan .innerText = area;
    console .log(parallelogramAreaSpan)
}