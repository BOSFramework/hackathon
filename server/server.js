// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var server = express();                 // define our app using express
var bodyParser = require('body-parser');
var Request = require("request");
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

// configure app to use bodyParser()
// this will let us get the data from a POST
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//server.set('superSecret', config.secret); // secret variable

// middleware to use for all requests
//server.use(function (req, res, next) {
//    // do logging
//    console.log('Something is happening.');
//    next(); // make sure we go to the next routes and don't stop here
//});
//--------R ROUTES-------------------------------
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    
    console.log('/ route hit');
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here
router.route('/auth/verification').post(function (req, res) {
    var data = {
        "username": "string",
        "password": "string"
    }
    //Request.post({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //         //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "http://httpbin.org/post",
    //    "body": JSON.stringify(data)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //});
    res.json({Message:"Login"});
});

//Get Application Users
router.route('/users').get(function (req, res) {   
    //  Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //         //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Users?api-version=1.0",       
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //   }).pipe(res);
  
    res.json({ Message: "Get Application Users" });
});

//Register  or Create user
router.route('/user').post(function (req, res) {
    var user = {
    "username": "string",
        "password": "string",
            "email": "string"
    };//user = req.body;
    //Request.post({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/user?api-version=1.0",
    //    "body": JSON.stringify(user)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Register User" });
});




//Get Application roles
router.route('/roles').get(function (req, res) {
    //Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Roles?api-version=1.0",
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);  
    res.json({ Message: "Get Application roles" });
});

//Assign roles to user
router.route('/roles(:userid)').post(function (req, res) {
    //var role = {
    //    "roleId": "string"
    //};
    //Request.post({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Roles("+userid+")?api-version=1.0",
    //    "body": JSON.stringify(role)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Assign roles to user" });
});



//Retrieve Roles for a given user
router.route('/userrole(:userid)').get(function (req, res) {
    //Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //         //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/UserRoles(" + userid +")?api-version=1.0",
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);
    
    res.json({ Message: "Retrieve Roles for a given user" });
});


//Get People
router.route('/people').get(function (req, res) {
    //Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //         //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/People?api-version=1.0",
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);
      res.json({ Message: "Get People" });
});

//Add Person
router.route('/people').post(function (req, res) {
    var person = {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "middleName": "string",
        "gender": "string",
        "birthdate": {
            "month": 0,
            "day": 0,
            "year": 0,
            "extensions": [
                {
                    "key": "string",
                    "value": "string"
                }
            ]
        },
        "phoneNumbers": [
            {
                "number": "string",
                "type": "string",
                "extensions": [
                    {
                        "key": "string",
                        "value": "string"
                    }
                ]
            }
        ],
        "email": "string",
        "addresses": [
            {
                "street": "string",
                "city": "string",
                "state": "string",
                "country": "string",
                "zipCode": "string",
                "extensions": [
                    {
                        "key": "string",
                        "value": "string"
                    }
                ]
            }
        ],
        "extensions": [
            {
                "key": "string",
                "value": "string"
            }
        ],
        "relationshipStatus": 0
    }

    //Request.post({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/People?api-version=1.0",
    //    "body": JSON.stringify(person)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Add Person" });
});

//Update Person
router.route('/people(:personid)').put(function (req, res) {
    var person = {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "middleName": "string",
        "gender": "string",
        "birthdate": {
            "month": 0,
            "day": 0,
            "year": 0,
            "extensions": [
                {
                    "key": "string",
                    "value": "string"
                }
            ]
        },
        "phoneNumbers": [
            {
                "number": "string",
                "type": "string",
                "extensions": [
                    {
                        "key": "string",
                        "value": "string"
                    }
                ]
            }
        ],
        "email": "string",
        "addresses": [
            {
                "street": "string",
                "city": "string",
                "state": "string",
                "country": "string",
                "zipCode": "string",
                "extensions": [
                    {
                        "key": "string",
                        "value": "string"
                    }
                ]
            }
        ],
        "extensions": [
            {
                "key": "string",
                "value": "string"
            }
        ],
        "relationshipStatus": 0
    }
    //Request.put({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/People(" + personid +")?api-version=1.0",
    //    "body": JSON.stringify(person)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);
    res.json({ Message: "Update Person" });   
});


//Get People
router.route('/people(:personid)').get(function (req, res) {
    //  Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/People(" + personid+")?api-version=1.0",
    //    "body": JSON.stringify(person)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);
    
    res.json({ Message: "Get People" });   
});


//Get Assets API
router.route('/assets').get(function (req, res) {
    //Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Assets?api-version=1.0",       
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
     res.json({ Message: "Get Assets API" });   
});

//Get Asset by ID API
router.route('/assets(:assetid)').get(function (req, res) {
    //Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //      //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Assets(" + assetid+")?api-version=1.0",
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Get Asset by ID API" });   
});

//Add Assets API
router.route('/assets').post(function (req, res) {
    //Get data passed through req.body  //below is an example of an asset object properties that can be passed to BOS API.
    var asset = {
        "url": "string",
        "mimeType": "string",
        "size": 0,
        "thumbnailURL": "string",
        "fileExtension": "string",
        "id": "string",
        "name": "string",
        "description": "string",
        "createdOn": "string",
        "createdBy": "string",
        "lastModifiedOn": "string",
        "modifiedBy": "string"
    }; //asset = req.body;
    //Request.post({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Assets?api-version=1.0",
    //    "body": JSON.stringify(person)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Add Assets API" });
});

//Delete Asset by ID API
router.route('/assets(:asstid)').delete(function (req, res) {
    //Request.delete({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Assets?key="+assetid+"&api-version=1.0",      
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Delete Asset by ID API" });
});

//Update Assets API
router.route('/assets(:asstid)').put(function (req, res) {
    //Get data passed through req.body  //below is an example of an asset object properties that can be passed to BOS API.
    var asset = {
        "url": "string",
        "mimeType": "string",
        "size": 0,
        "thumbnailURL": "string",
        "fileExtension": "string",
        "id": "string",
        "name": "string",
        "description": "string",
        "createdOn": "string",
        "createdBy": "string",
        "lastModifiedOn": "string",
        "modifiedBy": "string"
    }; //asset = req.body;
    //Request.put({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //      //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Assets("+asstid+")?api-version=1.0",
    //    "body": JSON.stringify(asset)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Update Assets API" });
});

//Update Assets API using patch
router.route('/assets(:asstid)').patch(function (req, res) {
    //Get data passed through req.body  //below is an example of an asset object properties that can be passed to BOS API.
    var asset = {
        "url": "string",
        "mimeType": "string",
        "size": 0,
        "thumbnailURL": "string",
        "fileExtension": "string",
        "id": "string",
        "name": "string",
        "description": "string",
        "createdOn": "string",
        "createdBy": "string",
        "lastModifiedOn": "string",
        "modifiedBy": "string"
    }; //asset = req.body;
    //Request.patch({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/Assets(" + asstid + ")?api-version=1.0",
    //    "body": JSON.stringify(asset)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);
  
    res.json({ Message: "Update Assets API using patch" });
});


//Get Collections API
router.route('/collections').get(function (req, res) {
    //Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/collections?api-version=1.0",
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Get Collections API" });
});

//Get collection by ID API
router.route('/collections(:collectionId)').get(function (req, res) {
    //Request.get({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/collections(" + collectionId + ")?api-version=1.0",
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Get collection by ID API" });
});

//Add collections API
router.route('/collections').post(function (req, res) {
    //Get data passed through req.body  //below is an example of an asset object properties that can be passed to BOS API.
    var collection = {
        "id": "string",
        "name": "string",
        "description": "string",
        "createdOn": "string",
        "createdBy": "string",
        "lastModifiedOn": "string",
        "modifiedBy": "string"
    }; //asset = req.body;
    //Request.post({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/collections?api-version=1.0",
    //    "body": JSON.stringify(collection)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Add collections API" });
});

//Delete collection by ID API
router.route('/collections(:collectionId)').delete(function (req, res) {
    //Request.delete({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/collectionId?key=" + collectionId + "&api-version=1.0",
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Delete collection by ID API" });
});

//Update collection API
router.route('/collections(:collectionId)').put(function (req, res) {
    //Get data passed through req.body  //below is an example of an collection object properties that is passed to BOS API.
    var collection = {
        "id": "string",
        "name": "string",
        "description": "string",
        "createdOn": "string",
        "createdBy": "string",
        "lastModifiedOn": "string",
        "modifiedBy": "string"
    }; //collection = req.body;

    //Request.put({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/collections(" + collectionId + ")?api-version=1.0",
    //    "body": JSON.stringify(collection)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Update collection API" });
});

//Update collection API using patch
router.route('/collections(:collectionId)').patch(function (req, res) {
    //Get data passed through req.body  //below is an example of an asset object properties that can be passed to BOS API.
    //var collection = {
    //    "id": "string",
    //    "name": "string",
    //    "description": "string",
    //    "createdOn": "string",
    //    "createdBy": "string",
    //    "lastModifiedOn": "string",
    //    "modifiedBy": "string"
    //}; //collection = req.body;
    //Request.patch({
    //    "headers": {
    //        "content-type": "application/json",
    //        "accept": "application/json;odata.metadata=minimal;odata.streaming=true",
    //        //"Authorization": "Bearer <Token>" // if authorization is required add Bearer token here
    //    },
    //    "url": "https://apis.dev.bosframework.com/odata/collections(" + collectionId + ")?api-version=1.0",
    //    "body": JSON.stringify(collection)
    //}, (error, response, body) => {
    //    if (error) {
    //        return console.dir(error);
    //    }
    //    console.dir(JSON.parse(body));
    //}).pipe(res);   
    res.json({ Message: "Update collection API using patch" });
});


// REGISTER OU// all of our routes will be prefixed with /api
server.use('/api', router);


module.exports = server;
// START THE SERVER
// =============================================================================

