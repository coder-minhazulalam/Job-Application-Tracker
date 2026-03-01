1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
Answer : 
            getElementById() = Selects one element using id
            getElementsByClassName() = Selects many elements using class
            querySelector() = Selects only the first matching element 
            querySelectorAll() = Selects all matching elements

2. How do you create and insert a new element into the DOM? 

   let Ulist =  document.createElement('ul')
   let list = document.createElement('li')
   list.innerText = "Hello Programmer!"
   Ulist.appendChild(list);
   
3. What is Event Bubbling? How does it work?

Answer : When I click a child element, the event also goes to its parent, then grandparent, then body.  That means I can handle Parent Div using Child Div .

4. What is Event Delegation? Why is it useful?

Answer : Instead of adding event to many children, we add one event to parent.
        We can Handle every Child element by adding EventListener to its Parent Div. its more fast and easy to handle .

5. Difference between preventDefault() and stopPropagation()
   
    preventDefault()  = It stops the page reloading .
    stopPropagation() = It stops the page bubbling .
