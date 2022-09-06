console.log('hello world');

function move() {
    width = 1;
    let id = setInterval(frame, 20);
    let element = document.getElementById('name');
    function frame() {
        // if (width == 100) {
        //     clearInterval(id);
        // }
        // else{
        //     width += 1;
        //     element.style.width = '100';
        //     // console.log(element.style.width)
        // }
        
    }
}
function clk() {
    let element = document.getElementById('name');
    let width = 1;
    let id = setInterval(frame, 20);
    function frame() {
        if (width==100) {
            clearInterval(id);
        }
        else{
            width +=1;
            element.style.width = String(width) +'%';
        }
    }
}