<div align=center>

# Tap Room

#### React Independent Project Exercise for [Epicodus](https://www.epicodus.com/), 05.01.2020

#### By **Andrew Philpott**

[About](#About) | [Prompt](#Prompt) | [User Stories](#User-Stories) | [React Component Diagrams](#React-Component-Diagrams) | [Bugs](#Known-Bugs) | [Technologies](#Technologies-Used) | [Contact](#Support-and-Contact-Details)

</div>

## About

This is a web application to practice using Redux to handle state in React. The application keeps track of the different beers offered at Tap House, displaying beer price, number of pints, flavors, aromas, and other stats. Full CRUD operation is available to all users.

## Prompt

Independent Projects Review
Welcome to your second React independent project! Before you begin, take a moment to revisit and review the Independent Projects and Code Reviews lesson.

Tap Room
This is the second part of a two-week project. Last week, you built a tap room using local and shared state in React. This week, you will update your application to incorporate Redux.

Before getting started, clone or fork the repo of the project you completed last week. Do not make changes to the repository you submitted for last week's independent project. You will be asked to resubmit if you simply update last week's repository.

Here are the requirements for the refactor:

All state in your application should be handled by Redux (even if React can handle it locally).
All reducers should be tested thoroughly, and all tests must be passing.
Action creators and constants should be used.
If you finish early, continue building out your application as you see fit. This is a great opportunity to create a portfolio piece!

Objectives
This week's progress will be checked for the following objectives:

- [x] React application works as expected and follows best practices, including using JSX, props, and prop types.
- [x] Redux is used for all state.
- [x] Jest is used to test all reducers.
- [x] Actions and action constants are used.
- [x] Project is in a polished, portfolio-quality state.
- [x] Project is submitted by the deadline.
- [x] Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using the correct terminology.

## User Stories

As a user, I want to see a list/menu of all available beers. For each beer, I want to see its name, brand, price and alcoholContent.
As a user, I want to submit a form to add a new beer to a list.
As a user, I want to be able to click on a beer to see its detail page.
As a user, I want to see how many pints are left in a keg. Hint: A full keg has roughly 124 pints.
As a user, I want to be able to click a button next to a beer whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.
As a user, I want the option to edit a beer's properties after entering them just in case I make a mistake.
As a user, I want to be able to delete a beer.
As a user, I want a beer to update to say "Out of Stock" once it's empty.
As a user, I want beers with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!
As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!)
Objectives
As a user, I want to have beer prices to be color-coded for easy readability. This should be based on their price.

## Setup/Installation Requirements

_Clone this repository._
_Navigate to tap-room directory_
_\$npm install to download dependencies_
_\$npm run start to run the application_
_Application will run on localhost:3000_

## React Component Diagrams

<img style="width:600px" src="./public/TapRoomRedux.png">

<img style="width:600px" src="./public/TapRoomReduxWireFrame.png>

## Known Bugs

No known bugs at this time.

## Technologies Used

- HTML
- CSS
- JavaScript
- Material UI
- React
- Draw.io

## Support and Contact Details

Feel free to provide feedback via email: andrewphilpott92@gmail.com

### License

This application is licensed under the MIT license.

Copyright (c) 2020 **Andrew Philpott**
