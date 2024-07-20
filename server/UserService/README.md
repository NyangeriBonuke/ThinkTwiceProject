INSTALL THE FOLLOWING PACKAGES

"dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.4",
    "nodemon": "^3.1.4",
    "redis": "^4.6.15"
  }


CHANGE THE PORT AND MONGO_URI in the './app.js' and './db.js' file respectively

RUN "npm start" to start the server


SIGN UP USER

URL: http://localhost:8000/api/signup

METHOD: POST

Json data format

{
  "userName": "Brev",
  "email": "brev@gmail.com",
  "password": "123"
}


LOGIN USER

URL: http://localhost:8000/api/login

METHOD: POST

Json data format

{
  "email": "brev@gmail.com",
  "password": "123"
}


LOGOUT USER

logout a user in order to delete the refresh token stored in the database

URL: http://localhost:8000/api/logout/${id}

METHOD: POST

EXAMPLE: http://localhost:8000/api/logout/669bac1e5682970d90070a4c



GET ALL USERS

URL: http://localhost:8000/api/user

METHOD: GET

HEADERS

Authorization : Bearer ${token}



UPDATE USER DATA

URL: http://localhost:8000/api/user/${id}

EXAMPLE: http://localhost:8000/api/user/669bac1e5682970d90070a4c

METHOD: PUT

JSON data to be inputed in the body

{
  "userName": "Brevin"
}

HEADERS

Authorization : Bearer ${token}



DELETE USER DETAILS

URL: http://localhost:8000/api/user/${id}

EXAMPLE: http://localhost:8000/api/user/669bac1e5682970d90070a4c

METHOD: DELETE


HEADERS

Authorization : Bearer ${token}



GENERATE A NEW TOKEN USING THE REFRESH TOKEN

URL: http://localhost:8000/api/refresh-token

METHOD: POST


JSON data input

input refresh token on the token 
use refresh token

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OWJiMzMxMTU4NDQxNDA0ZmI2NjI5OCIsImVtYWlsIjoiYnJldkBnbWFpbC5jb20iLCJpYXQiOjE3MjE0Nzk5ODYsImV4cCI6MTcyMjA4NDc4Nn0.6mn12T-E11QLKlPO4jSNx6C8w2rweIkZGKjxGePlf30"
}