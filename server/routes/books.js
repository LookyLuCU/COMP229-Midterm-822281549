/*COMP229-MIDTERM-822281549
Author: Sheila Donnelly
StudentID: 822281549
WebApp Name: Favourite Book List
*/

// modules required for routing
import { Router } from "express";

import { displayAddPage, 
    displayBookList, 
    displayEditPage, 
    processAddPage, 
    processDelete, 
    processEditPage } from "../controllers/books.js";

const router = Router();

/* GET books List page. READ */
router.get('/books/list', displayBookList);

//  GET the Book Details page to add a new Book
router.get('/books/add', displayAddPage);

// POST process the Book Details page and create a new Book
router.post('/books/add', processAddPage);

// GET the Book Details page to edit an existing Book
router.get('/books/edit/:id', displayEditPage);

// POST - process the information passed from the edit form and update the database
router.post('/books/edit/:id', processEditPage);

// GET - process the delete by bookid
router.get('/books/delete/:id', processDelete);


export default router;