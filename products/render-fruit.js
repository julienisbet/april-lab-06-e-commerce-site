export function renderFruit(){
    const li = document.createElement('li');
    li.classList.add('tree-fruit');
    li.title = 'A sweet, delicious, forbidden-to-some treat';
    
    const h3 = document.createElement('h3');
    h3.textContent = 'Red Apple';
    
    const img = document.createElement('img');
    img.src = 'assets/apple.png';
    img.alt = 'Red Apple image';
    
    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = '$1.00';
    
    const button = document.createElement('button');
    button.value = 'apple';
    button.textContent = 'Add';
  
    li.append(h3, img, p);
    p.append(button);
  
    return li;
}