# Quote Game

## Description
A fun side project built in my spare time. A quote game where the user is presented with randomly generated quotes and asked to quess where each came from. This a UI project utilizing a variety of 3rd party API's, each generating quotes from various pop culture media and celebrities. Featuring a user friendly UI and audio feedback.

## [Demo](https://karstenjep.github.io/quote-generator-api/)


## EDA Project
This application uses React, Material-UI, External API's, Audio & Image Files (a full list of dependencies can be found in `package.json`)

## Development Setup Instructions
- Run `npm install`
- Run `npm start` command will open up a browser tab for you at `localhost:3000`

## Lay of the Land
Directory Structure:
- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` contains the transpiled code from `src/` and `public/` that will be viewed on the production site

## Usage
 1. User choose a category of quote
 2. User views the generated quote and chooses where it originated
 3. User is presented visual and audio feedback based on where the the selection correct/incorrect
 4. The users record of correct guesses is tracked in a counter tally 

 ## Built With
 - JavaScript
 - React
 - CSS
 - Material-UI
 - External API's