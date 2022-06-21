# Catagram in React

Descripton: This is the culminating project of the Girl Develop It Intro to React Cohort. I was tasked with creating a mock-up of a few components of Instagram. I will document my progress in my commits and here in this README file.

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This cohort cleverly has taken us through a series of exercises which have directly lead to creating the culminating project. The goal of the project was to mock-up a few components of Instagram: a navigation bar, a URL input bar, images of cats, and a like counter/display for each image. I really liked the teaching style of having us experiment on our own, given the practiced exercises and a few additional challenges needing research. This was a great introduction to React!

### Screenshots
<!-- | <b>Mobile View</b>|  -->
<!-- |:--:| -->
<!-- | ![My Solution for Mobile]() | -->

| <b>Desktop View</b>| 
|:--:|
| ![My Solution for Desktop](https://github.com/Faraja17/catagram-in-react/blob/main/Screen%20Shot%202022-06-19%20at%203.22.27%20AM.png?raw=true) |


### Links

- Live Site URL: [Visit Catagram on Codesandbox!](https://z11j68.csb.app/)

## My process

After class four, I was assigned the challenge of creating a template using React in preparation for developing the Catagram webpage. At first, I was unsure about how to begin. Reviewing the class exercises really helped to guide me, and there was just enough mystery for me to have to figure out on my own to make the assignment an appropriate challenge. 

One major thing that I figured out was that the styling for all of the components can go in the CSS.js file. I had started out creating separate CSS files for each component. It was only by chance that I figured out the correction. I had accidentally placed some of my styling into the wrong CSS file and noticed that it still worked! So I deleted the extra CSS files and placed all of the styling in one central location, which is actually a great feature of React!

In addition to creating the template, I used what I had learned in the exercises to add an event handler for the URL bar and to console.log the like count.

6/20/22 - During class five, we learned how `useState` enables us to actually get the like count functioning, rather than just seeing it through `console.log`. This is the magical code: `const [count, setCount] = useState(0);`Today's challenge was to add the event handler and like count functions, which I had already completed, and to hide the like counter when the count equals 0. This took some research, I had forgotten how to use the display vs. visibility properties. I reviewed both, and decided to use `visibility: count == 0 ? 'hidden' : 'visible'` because the footprint of the element remains when it is hidden.


### Built with

- React
- JSX

### What I learned

- function vs. class components
- JSX
- ternary operator
- props
- one-way data flow
- event handling
- states
- review of display vs. visibility properties

### Continued development



### Useful resources

- [Avatar URL Generator](https://vinicius73.github.io/gravatar-url-generator/#/) - The site we used to generate our own cute cat avatars for class 3 exercises!
<!-- - []() - annotation -->

## Author

Faraja Thompson

- [My Personal Website](https://faraja17.github.io/my-website/)
- [My Blog: Teacher to Techie](https://faraja17.github.io/)
- [Faraja Thompson, M.Ed. on LinkedIn](https://www.linkedin.com/in/faraja-thompson-m-ed-70885b8/)

## Acknowledgments

I'd like to acknowledge my son and mentor [DeForestt Thompson](https://github.com/DeForestt).  His steadfast support and encouragement keep me motivated!  Thanks for forcing me to use the command-line, Son <3 <3 <3.
