# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

**Your Answer:**

1. What is the error (be specific)?
   The error is it cannot read properties of null (reading `style`)
2. Why does this error occur?
   The `<script>` tag is in the `<head>`, so the JavaScript runs before the browser has parsed the `<body>`. When the script runs, `#my-button` doesn't exist in the `DOM` yet, so `document.querySelector('#my-button')` returns null and you can't access `.style` on `null`.
3. What can be done to fix it?
   how we would fix this is to move the `<script>` tag to the bottom of `<body>`, just before the closing tag.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id="button-container">
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**

`event.target` is the element that was actually clicked, and `event.currentTarget` is the element that has the event listener attached to it. They can be different because when you click the button the click event travels up through its parent elements causing the div's event listener to run even though the div itself was not directly clicked.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png',
};

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**
The child elements got created but never added to productCard so they just float around doing nothing. You have to append them first:

```js
productCard.append(productImage, productName, productPrice);
document.body.append(productCard);
```

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class="description">Walk the dog</p>
    <p class="is-complete">✅</p>
  </li>
  <li id="todo-2">
    <p class="description">Take out the trash</p>
    <p class="is-complete">❌</p>
  </li>
  <li id="todo-3">
    <p class="description">Wash the dishes</p>
    <p class="is-complete">❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = '✅';
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

1. It's called event delegation instead of adding a listener to every single `<li>` you just put one on the parent it's better because it's less code and it still works if you add new items later.

2. `closest('li')` checks the clicked element first, then its parent, then its parent's parent, and so on until it finds a `<li>`. This is needed because the user could click the inner `<p>` instead of the `<li>` itself.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

1. `querySelector()` returns only the first matching element while `querySelectorAll()` returns all matching elements as a NodeList for example use `querySelectorAll('p')` to grab every `<p>` tag on a page.

2. A NodeList looks like an array but is missing methods like `.map()` and `.filter()` this matters because calling those methods on a NodeList will throw an error convert it first using `Array.from(nodeList)` to use them.
