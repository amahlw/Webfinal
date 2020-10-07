const draw_input_container = document.getElementById('draw-input');

document.getElementById('btn').click(function() {
    var data = document.getElementById()
    document.getElementById('display').innerHTML = data
})

function draw_input() {
    let infoStr = '';
    let width_input = document.getElementById('data-input');
    // let height_input = document.getElementById('box-height');
    // let color_input = document.getElementById('box-color');
    infoStr += `<h1>Color</h1> <div style="width:${width_input.value}px; height:${height_input.value}px; background-color:${color_input.value}"></div>`;
    draw_info_container.innerHTML = infoStr;
}