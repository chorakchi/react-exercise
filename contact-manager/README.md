# HelloFresh Dev Team - Front-end Developer Test

<br/>

<h1><p>
  <img alt="React.js" src="http://www.anamuser.com/wp-content/uploads/2017/03/logo-578x270.png" height="40" />
  <img alt="React-router" src="https://www.blog.plint-sites.nl/wordpress/wp-content/uploads/2016/07/react-router-624x279.png" height="40" />
    <img alt="redux.js" src="http://www.ematipico.com/assets/images/logo-redux.png" height="40" />
    <img alt="jest" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" height="40" />
    <img alt="docker" src="https://mblum.me/images/docker.svg" height="40" />
    <img alt="yarn" src="https://www.bram.us/wordpress/wp-content/uploads/2016/10/yarn-kitten-full.png" height="40" />
    <img alt="webpack" src="https://lc-mhke0kuv.cn-n1.lcfile.com/3c200b26af29751549ee.png" height="40" />
    <br/>
    <img src="https://images.milled.com/2018-02-06/uQF5M5wKezLSQYvc/UgF3n28TAAl4.png" width= 100>
</p></h1>
##  Usage

```shell
yarn install
yarn start
open http://localhost:3000

yarn test

yarn Build
```

Docker
```
docker build -t sample-app

docker run -it \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  --rm \
  sample-app

  docker-compose up -d --build
  ```


  Production
```
  docker build -f Dockerfile-prod -t sample-app-prod
  docker run -it -p 80:80 --rm sample-app-prod

  docker-compose -f docker-compose-prod.yml up -d --build
```

##  Live Demo
 http://4658e672.ngrok.io

## Swagger API Demo
 http://4658e672.ngrok.io
 

 ## ِ Features

* login page with Email validator for UserName
* recipe page review List of recipes change Cuisines abale
with favor and rate element.
* recepe page with most Features of API

## ِ Description

#### dependencies

    React 16.4
    Redux 4
    Webpack 3
    Babel 6
    Styled-components
    React Router 4
    react-router
    Redux
    Jest & Enzyme


added tests to reducers, action, and components with 'Jest' as the default  test tool of the framework
and for components use the 'Enzyme' as utility for React that makes it easier to assert, manipulate, and traverse React Components

>*  antergrated with hello-fresh APIs<br/>
>* also created Backend with loopBack the Node.js API Framwork but, I didn't use, i use hello-fresh APIs <br/>
>* I'm abale to do in compliecation of this test as React-Native Mobile App for IOS/Android, make common element as NPM moudule and make Server side rendering for this Application.
><br/> or serve as desktop App with electronjs and nodjs.
actualy i emploed and dident have full-time for doing this test i maked it in part-time 

##  files

These files the project

```shell
├── src
│   ├── actions
│   │   ├── cuisines.js ------------------------- exports constants and action creators for cuisines.
│   │   ├── cuisines.test.js -------------------- tests the actions for cuisines.
│   │   ├── getToken..js ------------------------ exports constants and action creators for this store.
│   │   ├── getToken.test.js -------------------- tests the actions for getToken.
│   │   ├── recipes.js -------------------------- exports constants and action creators for this store.
│   │   ├── recipes.test.js --------------------- tests the actions for recipes.
│   │   └── index.js ---------------------------- exports all action.
│   ├── assets
│   │   ├── icon
│   │   ├── image
│   │   └── logo
│   ├── components
│   │   ├── cuisines
│   │   │   ├── index.js ------------------------ component.
│   │   │   └── index.test.js ------------------- component specs.
│   │   ├── cuisinesSelector
│   │   │   ├── index.js ------------------------ component.
│   │   │   └── index.test.js ------------------- component specs.
│   │   ├── loader
│   │   │   ├── index.js ------------------------ component.
│   │   │   └── index.test.js ------------------- component specs.
│   │   ├── login
│   │   │   ├── index.js ------------------------ component.
│   │   │   └── index.test.js ------------------- component specs.
│   │   ├── popUp
│   │   │   ├── index.js
│   │   │   └── index.test.js ------------------- component specs.
│   │   ├── rate
│   │   │   ├── index.js ------------------------ component.
│   │   │   └── index.test.js ------------------- component specs.
│   │   ├── recipe
│   │   │   ├── index.js ------------------------ component.
│   │   │   └── index.test.js ------------------- component specs.
│   │   ├── recipeListElement
│   │   │   ├── index.js ------------------------ component
│   │   │   └── index.test.js ------------------- component specs
│   │   ├── recipes
│   │   │   ├── index.js ------------------------ component
│   │   │   └── index.test.js ------------------- component specs
│   │   ├── smalLoader
│   │   │   ├── index.js ------------------------ component
│   │   │   └── index.test.js ------------------- component specs
│   │   ├── templateOfRecipePage
│   │   │   ├── index.js ------------------------ component
│   │   │   └── index.test.js ------------------- component specs
│   │   └── validator
│   ├── constants
│   │   └── ActionTypes.js ---------------------- component
│   ├── containers
│   │   ├── app
│   │   │   └── index.js ------------------------ create store from combined reducers, enable hmr for reducers, apply middleware, etc.
│   │   ├── loginPage --------------------------- component
│   │   │   └── index.js
│   │   └── recepeReviewPage
│   │   │   └── index.js ------------------------ component
│   ├── reducers
│   │   ├── getToken.js ------------------------- exports the reducer for getToken.
│   │   ├── recipes.js -------------------------- exports the reducer for recipes.
│   │   ├── cuisines.js ------------------------- exports the reducer for cuisines.
│   │   └── index.js ---------------------------- exports all reducer
│   ├── store
│   │   └── index.js ---------------------------- redux store.
│   ├── index.js -------------------------------- exports the connected component.
│   └── index.css
├── .dockerignore
├── Dockerfile 
├── docker-compose.yml 
├── Dockerfile-prod ----------------------------- Docker for Production
├── docker-compose-prod.yml --------------------- Docker compose for Production
├── conf
│   └── conf.d
│       └── default.conf ------------------------ task config for React Router and Nginx

```

Components
----------

**src\components\cuisines\index.js**

### 1. Cuisines




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|array|no|Empty array|
-----
**src\components\cuisinesSelector\index.js**

### 2. CuisinesSelector




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|array|no|Empty array|
-----
**src\components\loader\index.js**

### 3. Loader




-----
**src\components\login\index.js**

### 4. loginPage




-----
**src\components\popUp\index.js**

### 5. PopUp




-----
**src\components\rate\index.js**

### 6. Rate




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
rate|number|no|0|
averageRating|number|no|0|
small|bool|no|false|
-----
**src\components\recipe\index.js**

### 7. recipe




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|object|no|Empty object|
-----
**src\components\recipeListElement\index.js**

### 8. RecipeListElement




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|object|no|Empty object|
-----
**src\components\recipes\index.js**

### 9. Recipes




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|array|no|Empty array|
-----
**src\components\smalLoader\index.js**

### 10. Loader




-----
**src\components\templateOfRecipePage\index.js**

### 11. TemplateOfRecipePage


##  Documentation & resource

```shell
https://reactjs.org/
https://facebook.github.io/jest/
https://github.com/airbnb/enzyme
https://redux.js.org/
https://github.com/zeta-o/react-redux-scaffold
https://reacttraining.com/react-router/
http://loopback.io/doc/en/lb3/
http://mherman.org/blog/2017/12/07/dockerizing-a-react-app/

```





