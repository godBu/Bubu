let body = document.getElementsByTagName('body')[0];

let wrapper = document.createElement('div');
wrapper.id = "wrapper";
body.appendChild(wrapper);

let form = document.createElement('form');
form.id ='form';
body.appendChild(form);

//creating input//
let input = document.createElement('input');
input.type = "text";
input.id = "input";
form.appendChild(input);

//creating choose button//
let button1 = document.createElement('button');
let text1 = document.createTextNode('Choose');
button1.id = "choose";
button1.type = "button"
button1.appendChild(text1);
form.appendChild(button1);

//creating clear button//
let button2 = document.createElement('button');
let text2 = document.createTextNode('Clear');
button2.id = "clear";
button2.type = "button";
button2.appendChild(text2);
form.appendChild(button2);

const reset = () => {
	input.value = null;
}

//on button click//
button1.addEventListener("click", () => {
    boxes = input.value;
    for (let i = 0; i < boxes; i++ ) {
        const box = document.createElement('div');
        box.id = "box";
        box.className = "box"
        let img = document.createElement('img');
        img.src = "https://source.unsplash.com/random/500x500//?bunny";
        img.setAttribute ("height", "100vw / 3.5");
        img.setAttribute ("width", "100vw / 3.5");
        box.appendChild(img);
        wrapper.appendChild(box);
        wrapper.prepend(box);
        reset();
    }
  })

button2.addEventListener("click", () => {
   while (wrapper.firstChild) {
       wrapper.removeChild(wrapper.firstChild);
   }
})

//body.prepend(wrapper);
//document.body.appendChild(form);//

/*button2.addEventListener("click", () => {
  //const myBox = document.getElementById('box');
   //myBox.remove();
   }
})*/

//wrapper.appendChild(input);
//wrapper.appendChild(button1);
//wrapper.appendChild(button2);

// let text = document.createTextNode('JS'); //
//div.appendChild(text);
//div.id = "box";
//div.classList.add('box');


/*const wrapper = document.getElementById('wrapper');
const div = document.getElementById('box')
const button1 = document.getElementsById('choose');
const button2 = document.getElementById('clear');

wrapper.appendChild(div);
wrapper.appendChild(input);
wrapper.appendChild(button1);
wrapper.appendChild(button2);*/


/*button.addEventListener("click", () => {
    const box = document.createElement('div');
    div.id = "box";
    div.classList.add('box');
    wrapper.appendChild(box);
})
*/

















//div.classList.remove();//
//div.classList.toggle();//