/*COMP229-MIDTERM-822281549
Author: Sheila Donnelly
StudentID: 822281549
WebApp Name: Favourite Book List
*/

import { Router } from 'express';
import { DisplayHomePage } from '../controllers/index.js';

const router = Router();

/* Display home page. */
router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);

export default router;