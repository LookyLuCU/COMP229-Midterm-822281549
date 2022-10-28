/*COMP229-MIDTERM-822281549
Author: Sheila Donnelly
StudentID: 822281549
WebApp Name: Favourite Book List
*/

import { Router } from 'express';
import { displayBookList, DisplayHomePage, displayBookList, displayEditPage } from '../controllers/books.js';


let router = Router();

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

//Display Booklist
router.get('/books/list', displayBookList);

//Display Edit Page
router.get('books/edit', displayEditPage);


export default router;