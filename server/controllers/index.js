/*COMP229-MIDTERM-822281549
Author: Sheila Donnelly
StudentID: 822281549
WebApp Name: Favourite Book List
*/

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}