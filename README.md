# Sonder
A web app for refugee mothers which connects them with resources and donors to support future generations.

## Tech Stack
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [React](https://reactjs.org/) create interactive UIs.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Bootstrap](https://getbootstrap.com/) for template rendering of HTML and CSS.
- [JWT](https://jwt.io/) JSON authentication.
- [Moment]() date formatter.
- [Axios](https://axios-http.com/) handles HTTP requests.
- [Cors](https://momentjs.com/) provides a solution for double port deployment
- [Multer](https://github.com/expressjs/multer/) importing photos to mongodb
- [Bcrypt](https://www.npmjs.com/package/bcryptjs) hashing passwords.
- [Dotenv](https://www.npmjs.com/package/dotenv/) environment variables.

## MVP
- Refugee: Sign up
- Refugee: Sign in
- Refugee Sign out
- Refugee: Requests

## MVP User Stories

<details><summary>List MVP User Stories</summary>

~~~~~~
As a refugee mother
In order to have access to the application
I would like to be able to sign up

As a refugee mother
So that I could access my account
I would like to be able to sign in

As a refugee mother
So that I could keep my account secure
I would like to be able to sign out

As a refugee mother
So that I could request resources
I would like to be able to post my requested items
~~~~~~

</details>

## Extra User Stories

<details><summary>List Extra User Stories - First Round </summary>

~~~~~~
As a User
So that I can specify who I am
I want to be able to select either 'Refugee' or 'Donor'

As a Refugee
So that I can connect with donor in my area
I want to sign up with my city and bio

As a Donor
In order to have access to the application
I would like to be able to sign up 

As a Donor
So that I could access my account
I would like to be able to sign in

As a User
So that I can display my details
I would like to create a profile and view this
~~~~~~

</details>

## Extra User Stories

<details><summary>List Extra User Stories - Second Round</summary>

~~~~~~~

As a Refugee Mother
So that I can manage my requests
I would like to see my requests and their status

As a Refugee Mother
So that I can manage my requests
I would like to accept donations

As a Refugee Mother
So that I can manage my requests
I would like to replicate my fulfiled requests

As a Refugee Mother
So I know when a Donor has offered to fulfil my request
I would like to see the requests as fulfiled

As a Refugee Mother
So I know when a Donor has offered to fulfil my request
I would like to get an email notification of a fulfiled request

As a user
So I could provide feedback to the website's creators
I would like to be able to contact them by email

As a Donor
So that I know what requests are outstanding
I would like to be able to see the outstanding requests

As a user
So that I could interact with the website
I would like the text, fields, and buttons to be in my native language

As a Refugee Mother
So that I could interact with the website
I would like to have visual representations to aid me in the use of the website's functions

As a Donor
So that I have additional information about the Refugee Mother I am interested in helping
I would like to see her profile page with bio

~~~~~~~

</details>


### Set up your project

1. Fork this repository
2. Clone your forked repository to your local machine
3. Install Node.js:  please visit nodejs.org for the latest version
4. Navigate to server directory and run:
```
npm install
```
5. Navigate to client directory and run:
```
npm install
``` 
6. Connect to a new MongoDB Atlas database.  Any MongoDB database would be suffice although MongoDB Atlas is recommended.
   Please go to the MongoDB Atlas website and create an account for easy installation.  
   Establish the connection in the 'App.js' file in the server directory.
7. Navigate to the server directory and run:
```
npm start
```
8. At the same time in a seperate terminal navigate to the client directory and run:
```
npm start
``` 

*  Alternatively please visit the live website on Heroku: https://sonder-techforgood.herokuapp.com/


## Diagram of the Application's Framework


![](./client/src/images/Screenshot_diagram_app_framework.png)



## Screen Shots of the Live Website


![](./client/src/images/Screenshot_homepage.png)

![](./client/src/images/Screenshot_requestpage.png)
