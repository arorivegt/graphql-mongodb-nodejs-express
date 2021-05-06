# Proect with -> GraphQL MongoDb Node JS and Express

Others of my projects but in this case i will use GraphQL, MongoDB, Node JS and Express. I create this project to learn more about these programing languages, databases, technologies and more

This is my libraries, packages, framework, laguages that i used
- [GraphQL](https://graphql.org/)
- [Express](https://expressjs.com/)
- [Apollo server Express](https://www.apollographql.com/docs/apollo-server/)
- [How to install GraphQL for my project with Express](https://graphql.org/code/)
- [Mongoose](https://mongoosejs.com/)
- [How to install Node js](https://nodejs.org/en/download/package-manager/#arch-linux)
- [Babel](https://babeljs.io/docs/en/)

``` sh
#my comand to start my project and create a package.json
npm init --yes

#Installing packages to my project
npm install express graphql apollo-server-express graphql-tools mongoose

#And i have installed babel with other modules of babel and in the command i put -D to add my packages only in the development enviroment
npm install babel-cli babel-core babel-preset-env -D

#this comand is useful when i run my project and nothing happening because the port is already in use (this comand is unix comand)
killall node

# i add to my package.json this scripts to run my project with the comand npm run dev
"scripts": {
    "dev" : "babel-node src/index.js"
  },

```

this is page to view a difference between apollo-server-express version 1.0 to 2.0
- [Version 1.0 to 2.0 differences Apollo Server Express](https://dev.to/gloriamaris/apollo-server-express-10-to-20-fix-graphiqlexpress-and-graphiqlexpress-is-not-a-function-in-a-tutorial-by-xoor-41jn)


- **Express** => this is my framework to use node js.
- **graphql** => is a data query and manipulation language for API 
- **Apollo Server** => this is the express and connect integration of GraphQL Server
- **GraphQL Tools** => is a set of useful tools for development of GraphQL as schemas and documents loading
- **Babel** => is a toolchain that is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScripts in current and older browsers or enviroments

```sh
#Queries in GraphQL
mutation {
  createCar(name: "Tesla Model x"){
    _id
    name
  }
}

{
  allCars{
    _id
    name
  }
}
```