import fruits from '../data/fruits.js';
import { renderFruit } from './render-fruit.js';

const ul = document.getElementById('fruits');
// console.log(fruits)

// loop through each fruit in fruits
// render the fruit using renderFruit function
// append the rendered fruit to the <ul> element

for (const fruit of fruits){
    const el = renderFruit(fruit);
    console.log(el);
    ul.appendChild(el);
}