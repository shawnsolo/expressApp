(function () {
    'use strict';

    var express = require('express');
    var adminRouter = express.Router();
    var mongodb = require('mongodb').MongoClient;

    var books = [
        {
            title: 'Les Miserables',
            bookId: 24280,
            genre: 'Fiction',
            author: 'Victor Hugo',
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

    var router = function (nav) {
        adminRouter.route('/addBooks')
            .get(function (req, res) {
                var url = 'mongodb://localhost:27017/libraryApp';
                mongodb.connect(url, function (err, db) {
                    var collection = db.collection('books');
                    collection.insertMany(books, function (err, results) {
                        res.send(results);
                        db.close();
                    });
                });
            });

        return adminRouter;
    };
    module.exports = router;
}());