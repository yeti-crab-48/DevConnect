# Yeti-Crab

yeti-crab-scratch-project

Yeti-Crab is an job site geared toward software engineers. Users can post their own job listing or browse existing listings, looking for interesting projects to put their skills to use. 

After cloning the repo to your local machine, run `npm install` to download dependencies. 

## Login or Sign Up

New user? Make an account. Returning user? Welcome back. 

Upon authentication, users should be redirected to the home page of the app that displays job postings. 

JSON web token cookies will be sent back to the client with an life span of 6 hours. 

## If you are iterating on this project...

> create a `.env` file and add a few entries

```
JWT_SECRET=###########
JWT_REFRESH=###########

DB_CONNECTION_SECRET="sql connection string"
```


## React Components

### '/' Route Component Structure

```
Home
  TopNavbar
  VerticalNavbar
  PostCard
  PostPopup
  Footer
```

### '/register' Route Component Structure

```
Login 
```

### '/form' Route Component Structure

```
PostForm
```

### Styled Components
Yeti-Crab utilizes styled components, allowing developers to style React components within the component file itself. 

Take some time to consult the documentation on styled components at the [here](https://styled-components.com/)


## Redux
Yeti-crab utilizes Redux to update global state. In some cases, such as the useEffect in the Home.jsx component, it is necessary update global state with information that exists in our database. Because a GET request to the backend is asynchronous, Yeti-crab has implemented Redux Thunk to handle these async tasks. An example of this is the fetchPosts piece of middleware at the bottom of the `postReducer.js` file. 

For more information on asynchronous state updates using Redux Thunk, see the [docs](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware).


## Database
Yeti-Crab uses a PostgreSQL database. When creating your database, utilize the schema file in `server/models/table_ref.sql`.

If you choose to use ElephantSQL, you will want to create a `.env` file and add your connection string in that file. Be sure to add your `.env` file to the `.gitignore` file. 


## For those iterating on Yeti-Crab
Apply to a position.
Filter job posts on the home page in a number of ways. 
User who posted the position is able to see who has applied to their position. 
Search the site for postings that match keywords. 
Delete listings. 
Error checking when making new post -> don't allow users to make posts without filling out all fields. 