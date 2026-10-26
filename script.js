const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const SCALE  = 36
const centerx =canvas.width / 2;
const centery= canvas.height /2;
const endx = canvas.width
const endy= canvas.height
let curentR = 1;
const length_marks = 4;
const arrow  = 3;
const height_letter = 3; //смещенеие от засечки вправо

const toMathX = (px) => (px - canvas.width  / 2) / SCALE;
const toMathY = (py) => (canvas.height / 2 - py) / SCALE;
const toPx = (mx) => canvas.width  / 2 + mx * SCALE;
const toPy = (my) => canvas.height / 2 - my * SCALE;


function render(){
    ctx.fillStyle = 'black';
    ctx.font = '6px sans-serif';
    
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle'; 

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //фиугры
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(centerx,centery,curentR/2,curentR);



    //Y
    ctx.beginPath();
    ctx.moveTo(centerx, endy);
    ctx.lineTo(centerx, 0);
    ctx.stroke();
    // -R
    ctx.beginPath();
    ctx.fillText(`${-curentR}`, centerx + length_marks/2 + height_letter, centery + curentR*SCALE);
    ctx.moveTo(centerx - length_marks/2, centery + curentR*SCALE);
    ctx.lineTo(centerx + length_marks/2, centery + curentR*SCALE);
    ctx.stroke();
    //-R/2
    ctx.beginPath();
    ctx.fillText(`${-curentR/2}`, centerx + length_marks/2 + height_letter, centery + curentR/2*SCALE);
    ctx.moveTo(centerx - length_marks/2, centery + curentR/2*SCALE);
    ctx.lineTo(centerx + length_marks/2, centery + curentR/2*SCALE);
    ctx.stroke();
    //R/2
    ctx.beginPath();
    ctx.fillText(`${curentR/2}`, centerx + length_marks/2 + height_letter, centery - curentR*SCALE/2);
    ctx.moveTo(centerx - length_marks/2, centery - curentR/2*SCALE);
    ctx.lineTo(centerx + length_marks/2, centery - curentR/2*SCALE);
    ctx.stroke();
    // R
    ctx.beginPath();
    ctx.fillText(`${curentR}`, centerx + length_marks/2 + height_letter, centery - curentR*SCALE);
    ctx.moveTo(centerx - length_marks/2, centery - curentR*SCALE);
    ctx.lineTo(centerx + length_marks/2, centery - curentR*SCALE);
    ctx.stroke();

    // буква Y
    ctx.beginPath();
    ctx.textBaseline = 'top';
    ctx.fillText('y', centerx + 5, 5); 
    ctx.moveTo(centerx, 0);
    ctx.lineTo(centerx - arrow, arrow);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerx, 0);
    ctx.lineTo(centerx + arrow, arrow);
    ctx.stroke();

    //  X 
    ctx.beginPath();
    ctx.moveTo(0, centery);
    ctx.lineTo(endx, centery);
    ctx.stroke();

    // 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top'; 

    //-R
    ctx.beginPath();
    ctx.fillText(`${-curentR}`, centerx - curentR*SCALE, centery + length_marks/2 + 2);
    ctx.moveTo(centerx - curentR*SCALE, centery - length_marks/2);
    ctx.lineTo(centerx - curentR*SCALE, centery + length_marks/2);
    ctx.stroke();
    //-R/2
    ctx.beginPath();
    ctx.fillText(`${-curentR/2}`, centerx - curentR*SCALE/2, centery + length_marks/2 + 2);
    ctx.moveTo(centerx - curentR*SCALE/2, centery - length_marks/2);
    ctx.lineTo(centerx - curentR*SCALE/2, centery + length_marks/2);
    ctx.stroke();
    //R/2
    ctx.beginPath();
    ctx.fillText(`${curentR/2}`, centerx + curentR*SCALE/2, centery + length_marks/2 + 2);
    ctx.moveTo(centerx + curentR*SCALE/2, centery - length_marks/2);
    ctx.lineTo(centerx + curentR*SCALE/2, centery + length_marks/2);
    ctx.stroke();

    //R
    ctx.beginPath();
    ctx.fillText(`${curentR}`, centerx + curentR*SCALE, centery + length_marks/2 + 2);
    ctx.moveTo(centerx + curentR*SCALE, centery - length_marks/2);
    ctx.lineTo(centerx + curentR*SCALE, centery + length_marks/2);
    ctx.stroke();

    // буква X
    ctx.beginPath();
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText('x', endx - 5, centery - 5);
    ctx.moveTo(endx, centery);
    ctx.lineTo(endx - arrow, centery - arrow);
    ctx.stroke(); 
    ctx.beginPath();
    ctx.moveTo(endx, centery);
    ctx.lineTo(endx - arrow, centery + arrow);
    ctx.stroke();
}
render();



//X
let selectedX = 0;
const x = document.querySelector('#div-x');
x.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        selectedX  = e.target.value;
}});


//Y
const y = document.querySelector('#Ytext');
y.addEventListener('beforeinput', (e) =>{
    if(!e.data) return;
    const value = y.value;
    const start = y.selectionStart;      
    const end   = y.selectionEnd;
    const left  = value.slice(0, start);   // нач до курсора
    const added = e.data;                  
    const right = value.slice(end);        // от конц выделения до конца
    const future = left + added + right;
    const isFinal = /^-?([0-2]([.]\d*)?|3([.]0*)?)$/.test(future);
    const isPartial = future === "-";
    if (!isFinal && !isPartial) {
        e.preventDefault();

    }

    }
)

//R
let selectedR = 0;
const r  = document.querySelector("#div-r")
r.addEventListener('change',(e)=>{
    selectedR = e.target.value;
    curentR = selectedR;
})