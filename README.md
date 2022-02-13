# Social Network Backend ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

## NoSQL

A back-end application from scratch to manage a users, thoughts friends and reactions ina NoSQL database, using Node, Express, a MongoDB database, and the Mongoose ODM.

![portfolio demo](./img/et-demo.gif)

## Summary

An application that creates, updates and deletes users, and their thoughts which also contain embedded documents. Embedded documents are documents with schemas of their own that are part of other documents.

This application is a backend server for a social network, which allows users to become friends, post thoughts, where other users including themselves are able to react to thoughts.

#### A walk-though video for the app can be viewed [here.](https://drive.google.com/drive/folders/1DLdF3_-PX2UVMxI8HHDnODS5KMSh4j8a?usp=sharing)

![portfolio demo](./img/employeeTracker.png)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation Instructions:

You are able to clone this repository, by clicking [here](https://github.com/fudge88/social-network-backend) and then clicking on the `code` button. Select how you would like to clone the repository.

If you have your SSH keys set up, you are able to copy the link from the drop down and paste the following into your terminal application:

```
git clone git@github.com:fudge88/social-network-backend.git
```

Then change your directory so you are now in your newly cloned project and then open the code in your chosen source-code editor.

You need to install all dependencies that are listed in the `package.json` file:

```
npm install --save
```

Check to see that the following code is in the `package.json`, this will ensure npm to 'start' the application from your entry file

```
"start": node src/index.js
```

## How to run the application:

To run the start script, use the following code in the terminal.

```
npm run start
```

This should start the application, and you will be be able to create requests on `Postman`.

![portfolio demo](./img/employeeTracker1.png)

## Tools Used:

- node.js
- Express
- Mongoose
- date-fns
- MongoDB Compass
- Postman

#### Languages:

- JavaScript

#### MongoDB:

MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.

#### Mongoose:

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

In simple words, Mongoose acts as an intermediate between mongodb and server side language(like NodeJs), providing you with a simple validation and query API to help you interact with your MongoDB database.

### References

[MongoDB](https://www.mongodb.com/)

[StackOverflow](https://stackoverflow.com/questions/)

[Mongoose](https://mongoosejs.com/docs/api/array.html)

[Date-fns](https://date-fns.org/)

## License

![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=<COLOR>)

This project is licensed under the terms of the MIT license.

## Questions

- If you have any questions about this project
- would like further information
- would like to report and issue

please contact me through the links below:

[GitHub](https://github.com/fudge88) Profile

Email: akhlaq.fahra@gmail.com
