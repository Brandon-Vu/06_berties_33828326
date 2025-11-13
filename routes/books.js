// Create a new router
const express = require("express")
const router = express.Router()

router.get('/search',function(req, res, next){
    res.render("search.ejs")
});

router.get('/search_result', function (req, res, next) {
  const keyword = req.query.search_text;

  // Perform the database query to find books matching the keyword
  let sqlquery = "SELECT * FROM books WHERE name LIKE ?";
  let searchTerm = '%' + keyword + '%';

  db.query(sqlquery, [searchTerm], (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('searchresult.ejs', {
        keyword: keyword,
        results: result
      });
    }
  });
});

// Export the router object so index.js can access it
module.exports = router

router.get('/list', function (req, res, next) {
  let sqlquery = "SELECT * FROM books";

  db.query(sqlquery, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('list.ejs', { availableBooks: result });
    }
  });
});

// Show the add book form
router.get('/addbook', function (req, res) {
  res.render('addbook.ejs');
});

// Handle the add book form submission
router.post('/bookadded', function (req, res, next) {
  let sqlquery = "INSERT INTO books (name, price) VALUES (?, ?)";
  let newrecord = [req.body.name, req.body.price];

  db.query(sqlquery, newrecord, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(
        'Book added: ' +
        req.body.name +
        ' (£' +
        req.body.price +
        ')'
      );
    }
  });
});

// List books that are bargains (price < 20)
router.get('/bargains', function(req, res, next) {
  let sqlquery = "SELECT * FROM books WHERE price < 20";

  db.query(sqlquery, (err, result) => {
    if (err) next(err);
    else res.render('list.ejs', { availableBooks: result });
  });
});

// Export the router object so index.js can access it
module.exports = router;