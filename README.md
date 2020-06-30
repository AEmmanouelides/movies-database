## The Movies Database

It's a **React** single page application, integrated with **GraphQL**, **Apollo**, **Express** and **MongoDB**.

- It demonstrates a **Movies Database** including **Cast**.  
- It provides **User Authentication** with Sign Up, Log In and Log Out functionalities. 

Once the user launch the application, he will reach the Main page.

From there, the user can `Sign Up` or `Log In` through the Header menu. 

After a successful Sign Up/Log In, the user is `Authenticated` and thus able to see the Movies List page and all the rest functionalities, such as:
- Create New Movie
- Delete Movie
- View Movie Details - Cast
- Add an Actor/Actress
- Like an Actor/Actress

[****NOTES****] 
- The application is responsive.
- <a href="https://materializecss.com/" rel="nofollow" target='_blank'>Materialize CSS</a> framework was used for material design. 
- <a href="https://www.npmjs.com/package/babel-plugin-transform-class-properties" rel="nofollow" target='_blank'>babel-plugin-transform-class-properties</a> was installed in order to use Arrow Functions.
- For `MongoDB` connection, replace **MONGO_URI** in /server/server.js with a valid one.

## Running the App

From the root folder, install all the needed packages with:

```bash
`npm i`
```

Run the application on its own with the command:

```bash
`npm run dev`
```

The application will run on port 4000.

`Screenshots` of the running App can be found at `/screenshots`
