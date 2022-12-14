/*COMP229-MIDTERM-822281549
Author: Sheila Donnelly
StudentID: 822281549
WebApp Name: Favourite Book List
*/

//Third-Party Modules
import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

// Fix for __dirname using ESM
import path,{dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// import db package
import mongoose from 'mongoose';

// import the router data
import indexRouter from '../routes/index.js';
import booksRouter from '../routes/books.js';

//INstatntiate Express Application
const app = express();

// Complete the DB Configuration
import {MongoURI, Secret} from '../config/config.js';

//Complete the Database Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

// Listen for Connections or Errors
db.on('open', () => console.log(`Connected to MongoDB at Localhost`));
db.on('error', () => console.error('Connection Error'));

// view engine ejs setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// use routes
app.use('/', indexRouter);
app.use('/', booksRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {

     // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;