# Init-GraphQl-Express

Server.js is a graphql server without apollo and mongodb with dummy data in Data.js.

in folder src/index.js is a graphql with apollo and mongodb as a database.

## index.js

if want to try Server.js should be change package.json in:
```javascript
"scripts": {
    "devStart": "nodemon src/index.js"
}
```

to:
```javascript
"scripts": {
    "devStart": " nodemon Server.js"
}
```
## Server.js

if want to use Server.js should be change package.json in:
```javascript
"scripts": {
    "devStart": "nodemon Server.js"
}
```
to:
```javascript
"scripts": {
    "devStart": "nodemon src/index.js"
}
```
