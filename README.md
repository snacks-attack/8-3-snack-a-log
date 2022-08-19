# Full Stack Application Pair Project

## Helpful Links

_You and your partner should include links or images of the following resources in this section:_

- [Trello Board](https://trello.com/b/5TPYM7jV/snacks-attack)

- [Deployed Front-end](https://snacks-attacks.netlify.app/)
- [Deployed Back-end](https://snack-a-log-server.herokuapp.com)

## Snack-a-log

Create an app that allows users to log their favorite snacks. Add functionality that allows users to see whether or not their snack is healthy based on a simple algorithm.

For this project there are 40 features or functionality to build. To pass this project a minimum of 28 features must be built. The project will be graded according to the rubric on Canvas.

## Overview

- Using a mono-repo template repository, create a full-stack web application
- Use express to build a full CRUD back-end application that adheres to RESTful routes
- Use create-react-app to build a full CRUD front-end application that interacts with the back-end
- Use unit tests to guide the building process
- Deploy the applications online, so anyone can see them online

## Expecatations

- Each partner should commit and push their work at least once per day (for days we have class)
- You should edit the _Helpful Links_ section of this readme to include links for your relevant project planning resources

## Submitting Your Work

Only one person on your team needs to fork this repo. They should add the other team member(s) as collaborators.

You and your partner should both submit a link to your team's fork of this repo immediately -- do not wait for the due date. That way, your instructors can use your README to access your trello board and other planning resources to check-in on your team's progress.

## Acceptance Criteria

### Back-end

1.  Basic root route that returns a string
1.  Snacks resource
    1. Get one (with correct id)
    1. Get one (non-matching id, sends 404)
    1. Delete (with valid id)
    1. Delete (handles invalid id)
    1. Get all snacks
    1. Create a snack with all fields completed
    1. Create a snack and set a default image, if no image is provided
    1. Correctly capitalize snack name - for snack names with 2 or more letters
    1. Correctly capitalize snack name with multiple words
    1. Correctly fix capitalization, regardless if input is lowercase or uppercase
1.  Snack Health Check logic
    1. Checks if snack has enough fiber
    1. Checks if snack has enough protein
    1. Checks if snack has enough fiber and protein
    1. Checks if snack has enough fiber but too much sugar
    1. Checks if snack has enough protein but too much sugar
    1. Checks if snack has enough fiber and protein, but too much sugar
    1. Checks if snack has not enough protein, nor fiber and has too much sugar
    1. Checks if snack has invalid or missing information

Total: 21 tests

### Front-end

1. Index page
   1. Can load index page and has navigation to the New page
   1. Has a list of snack cards that are coming from the back-end seed data
   1. Has a link to each snack's show page
   1. Has a solid heart, if the snack is healthy
   1. Has a heart outline, if the snack is unhealthy
   1. Has the CSS that is detailed in the tests
1. Show page
   1. Shows header text
   1. Can navigate to New page
   1. Snack has correct information displayed
   1. Contains action/navigation buttons
1. New page
   1. Shows the header text
   1. Has a form with the correct labels and fields
   1. Can create a snack and then redirects back to the index page
1. Edit page
   1. Has a form with the correct labels and fields
   1. Data is pre-filled into the form
   1. Can update a snack and then redirects back to the index page
1. Delete button
   1. Can delete a snack using the app

Total: 17 tests

Additional features:

Back-end hosted and accessible online: 1 feature

Front-end hosted and accessible online: 1 feature

Grand total: 40 features

## Getting Started

1. Fork and clone this repository.

### Back-end setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your back-end

- `cd back-end`
- `touch .env`

**.env**

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=snack_a_log
```

- `npm install` - install npm packages listed in `package.json`
- `npm run db:init` - initialize a new database and create tables
- `npm run db:seed` - seed the table(s) with some data
- `nodemon` - confirm that this is running on port 3333
- Visit http://localhost:3333/snacks/ and make sure you see some snack data in the form of an array of objects
- `npm run test` - to run the back-end tests

### Front-end setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your front-end

- `cd front-end`
- `touch .env`

**.env**

```
REACT_APP_API_URL=http://localhost:3333
```

- `npm install` - install npm packages listed in `package.json`
- `npm start` - make sure your React app can start

Keep the React app running, open a new tab and run

- `npm test` - to open Cypress and run front-end tests

## Screenshots

### Index page

![Index page](./assets/index-page.png)

### Show page

![Show page](./assets/show-page.png)

### New page

![New page](./assets/new-page.png)

### Edit page

![Edit Page](./assets/edit-page.png)

## Resources

This project uses [this template](https://github.com/joinpursuit/pern-final-project-template) - you can follow the readme to set up deployment.
