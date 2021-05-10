// <li class="tree-fruit" title="A sweet, delicious, forbidden-to-some treat">
//     <h3>Red Apple</h3>
//     <img src="../assets/apple.png" alt="Red Apple image">
//     <p class="price">$1.00
//         <button value="apple">Add</button>
//     </p>
// </li>

// const apple = {
//     id: 'apple',
//     name: 'Red Apple',
//     image: 'apple.png',
//     description: 'A sweet, delicious, forbidden-to-some treat',
//     category: 'tree-fruit',
//     price: 1.00,
//     cost: 0.25
// };

export function renderFruit(fruit){
    const li = document.createElement('li');
    li.classList.add(fruit.category);
    li.title = fruit.description;
    
    const h3 = document.createElement('h3');
    h3.textContent = fruit.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${fruit.image}`;
    img.alt = `${fruit.name} image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${fruit.price.toFixed(2)}`;
    
    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.value = fruit.id;
    p.appendChild(btn);
    
    li.appendChild(p);
    return li;
}