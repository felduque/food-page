import express from 'express';
import recipe from './routes/recipe.routes.js';
import typediet from './routes/typediet.routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

// Cors
let allowedOrigins = ['*'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
// mideleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
// routes
app.use(recipe)
app.use(typediet)
export default app;
