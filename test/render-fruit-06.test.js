import { renderFruit } from '../products/render-fruit.js';

const test = QUnit.test;

QUnit.module('Render Fruit');

test('renders a fruit', assert => {
    // arrange
    const apple = {
        code: 'apple',
        name: 'Red Apple',
        image: 'assets/apple.png',
        description: 'A sweet, delicious, forbidden-to-some treat',
        category: 'tree-fruit',
        price: 1.00,
        cost: 0.25
    };
    
    const expected = '<li class="tree-fruit" title="A sweet, delicious, forbidden-to-some treat"><h3>Red Apple</h3><img src="assets/apple.png" alt="Red Apple image"><p class="price">$1.00<button value="apple">Add</button></p></li>';

    // act
    const dom = renderFruit(apple);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('renders an orange', assert => {
    // arrange
    const apple = {
        code: 'orange',
        name: 'Orange',
        image: 'assets/orange.png',
        description: 'Which came first, the color or the fruit?',
        category: 'tree-fruit',
        price: 1.00,
        cost: 0.25
    };
    
    const expected = '<li class="tree-fruit" title="Which came first, the color or the fruit?"><h3>Orange</h3><img src="assets/orange.png" alt="Orange image"><p class="price">$1.00<button value="apple">Add</button></p></li>';

    // act
    const dom = renderFruit(apple);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});