CSS :-

 - CSS Stands for "cascadding style sheet".
 - basically css works for the designing & styling our web pages.
 - css is not a programming language, it's a styling language..


 - syntax:-
  
  selector{
    propoties: values;
 }
  
  ex:-

  h1{
    color:red;

  }

  - in the above example h1 is the selector, color is the properties & red is the value of the properties.
  - there are 3 types of css present. likr...
   1. inline css:-
        - we used inline css inside the tag name.
        - inline css ave highest priority by compare with other types of css.
        - we can put our styling by creating a "style" attribute inside the tag.

   2. Internal CSS:-
   - we used internal css inside <head> tag, by creating a <style> tag iside it.
   - internal css used many cases for small codebase.

   3. External CSS:-    
   - we used external css by creating  a sparate css file and link that file in our HTML page.
   - we can link the external css file by <link> tag.
   - it is most popularly used because everyone wants to see the clean code so all files have to be separated.
   

- selector in css:-


  - we used css selectors for selecting an htlm elements for the shake of designing.
  - there are basically 5 types of selector are there...

1. ID selector

  - is selector is a type of selector that used for unique design.
  - it is denoted by "#".

2. class selector

  - class selector  is a type of selector that used for similar design in multiple element.
  - it is denoted by "." .


3. Group selector
 
  - group selector is a type of selector that used for design more than one element by creating a group.

4. universal selector
  - Universal selector is a type of selector that used for design whole HTML element in single design.

  - it is denoted by "*".

5.  element selector
  
   - element selector is a type of selector that used for design single single element separately.
   <!-- - It is select by indivisual all element one by on design. -->

TASK ::-
 
  1. Create a simple div with an id "box".add some text content inside the div.set it's background color to "blue".

  2. create 3 heading with h1,h2 & h3. give them all a class "heading"& set color of heading to "red".


properties in css :-

  1. color : red/bule//green etc...
  2. background-color : red/ green/blue etc....
  3. text-align : left/right/center....
  4. text-decoration : underline/ overline/ line-through...
  5. font-weight : normal/bold/bolder/100/300/etc....
  6. font-family : italic/ san-sarif/ roboto/ cursive...
  7. line-height : 1/2/3/4/5/ etc....
  8. text transform : uppercase/lowercase/capitalize...
  etc.......

Box Model in css....

  - Box model is used for properly placed the element in the right direction.
  - it majors all the size of that particular element and place them.
  - there are 5 types of box model are there...

  1. hight
  2. width
  3. padding (left,right,top,buttom)
  4. margin (left,right,top,buttom)
  5. bodder (border-radius)

Display properties in css:-

  - We used display properties to showcase oue element in a proper from to diplay.
  - basically there are 4 types of display properties like...

  1. display-inline
    -> takes only the space required by the element.

  2. display-block
    -> takes full space available in width.

  3. display-inline-block
    -> similar to display inline but difference is that when we apply padding over here.

  4. display-none
    -> To remove element from the document flow. (none-nothing)

Flext-Box in CSS:-

  - we can use CSS flex-box to create one dimentional design in a single page.
  - flex-box have som properties like......

  1. display: flex;
  2. flex-direction:row/row-reverse/column/column-reverse
  3. justify-content: center/space-between/space-evenly/space-around'
  4. align-item:center/top/buttom
  5. flex-wrap: wrap/no-wrap

Grid-Layout in css:-

 - css grid layout is a two dimentional layout system for the webside.
 - A Grid is collection of horizontal & vertical lines creating a pattern against which we can line up our design element.
 - some importand properties of Grid-layout...
  1. display : Grid;
  2. Grid-template-Column : repeat(4,1fr)/100 200 300;
  3. grid-gap : 20px/30px etc...
  4. grid-auto-rows : 100px / 200px etc...

CSS units :-

 - besically there are multipule units in css but we will discuss some importand units.

 1. px (pixel) - fixed
 2. %(percentage) - percentage fully depends upon their perent element

 EX.

 Rakesh - 100 -> 20% ->20
 Bikash - 1000 ->20% ->200

 3. vh (viewport height) & vw (viewport width)-> it will increase or decrease their size as per the screen size.

 4. vmax (viewport maximum) -> if the screen size can be squized to a phone screen so our content can be small so it break that and create a new line of content.

 5. em & rem (root units of css ) -> we can handle all the tag by a root element/tag so that it would be feasible for our content.  <!-- it depens on ur parents font-size -->

<!-- html - semantic tags
css - animantion (scale,skew,rotate,etc....) & keyfreames,position property.
 -->


Position Property in CSS:-


- the position property specify the type of positioning method used for an elements.

- there are 5 Types of position property are there :-

1. static :- Default values, it's not change their Position.
2. relative :- the element is positioned relative to it's normal position.
3. absolute :- the element is positioned relative to it's ancestors.
4. Fixed :- the element is positioned relative to the browser Window.
5. Sticky :- the element is positioned based on the user scroll Position.


Animation in css:-

Animation(transition):- to change th state of an object

- tranistion enables you to define the tranistion between two states of an element.
- some importand transition properties are...

1. transition-property: property you want to transition(font-size,color,bg color)
2. transition-duration:2s/3s/4s etc...
3. transition-timing-function: ease-in/ease-out/ease-in-out/linear/step(4) etc...
 step(4)=it execution in delay time 4 sec.
 ease-in = means it start slow then fast.(slow fast)
 ease-out= means start fast the slow in duretion time.(fast slow)
 ease-in-out= slow fast slow

4. transition-delay:2s/3s/4s etc...


- transition shorthand (property names/duration/timing-function/delay)
  transition:font-size 2s ease-in 5s;



Animation (transfrom):-

- it is used to apply 2D & 3D transformation to an element.

1. Tranform (Rotate)->
    - transfrom : rotate(45deg/90/deg etc...)
    - rotate    : 45deg;
    - rotateX   : 45deg;
    - rotateY   : 45deg;
    - rotateZ   : 45deg;

2. Tranfrom (scale ) ->

    - transfrom : scale(2/3 ect...)
    - transfrom : scale(1,2)
    - transfrom : scaleX(0.5)
    - transfrom : scaleY(0.5)
3. transfrom(skew) ->
    - transfrom : skew(45deg);
    - transfrom : skewX(45deg);
    - transfrom : skewY(45deg);
    - transfrom : skewZ(45deg);

Animation (keyframe) ->

- it is  a spacial css rule that define the different stages of an animation over the time.

- Syntax :-
@keyframe spinScale{
  0%{
      transfrom: rotate(0deg) scale(1);
  }
  50%{
      transfrom: rotate(180deg) scale(1.5);
  }
  100%{
        transfrom: rotate(360deg) scale(2);
  }
}

in keyframes the properties are ->

- animation-duration
- animation-timing-funtion
- animation-delay
- animation-iteration count
- animation-direction

note- @keyframe is the  heart of css animation.
 
