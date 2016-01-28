(function () {
    'use strict';

    var express = require('express');
    var bookRouter = express.Router();

    var router = function (nav) {

        var books = [
            {
                title: 'Book 1',
                genre: 'Fiction',
                author: 'Shawn',
                read: false
            },
            {
                title: 'Book 2',
                genre: 'Fiction',
                author: 'John',
                read: false
            },
            {
                title: 'Book 3',
                genre: 'Fiction',
                author: 'Guy',
                read: false
            },
            {
                title: 'Book 4',
                genre: 'Fiction',
                author: 'Peter',
                read: false
            },
            {
                title: 'Book 5',
                genre: 'Fiction',
                author: 'Lisa',
                read: false
            },
        ];

        bookRouter.route('/')
            .get(function (req, res) {
                res.render('bookListView', {
                    title: 'Hello from render',
                    nav: nav,
                    books: books
                });
            });

        bookRouter.route('/:id')
            .get(function (req, res) {
                var id = req.params.id;
                res.render('bookView', {
                    title: 'Books',
                    nav: nav,
                    book: books[id]
                });
            });

        return bookRouter;
    };

    module.exports = router;
}());