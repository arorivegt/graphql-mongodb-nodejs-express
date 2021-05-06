import express from 'express';
const app = express();

import mongoose from 'mongoose';
import Car from './models/Car'

mongoose.connect('mongodb://localhost/graphql-test'
  ,{ 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
  .then(()=> console.log("mongodb connected"))
  .catch(err => console.log(err));


import {ApolloServer, gql} from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolver'

//settings
app.set('port', process.env.PORT || 4450);


//Routes
const schema = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        Car
    },
    playground:{
        endpoint: '/graphql',
        settings: {
            'editor.theme': 'light'
        }
    }
})

schema.applyMiddleware({
    app
})


app.listen(app.get('port'), () => {
    console.log("server on port 4450 ")
});