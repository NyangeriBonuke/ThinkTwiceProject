HOW TO CREATE AN ORDER

URL `http://localhost:8002/api/order`

METHOD: 'POST'
HEADERS: 
    Key: Content-Type
    Value: application/json

Input the json data like this

{
  "user": "60d9f9a8a4c2c72d9f9a8b4c", 
  "items": [
    {
      "product": "60d9f9b9a4c2c72d9f9a8b4d", 
      "quantity": 2, 
      "price": 25.00
    },
    {
      "product": "60d9f9c0a4c2c72d9f9a8b4e", 
      "quantity": 1, 
      "price": 15.00
    }
  ],
  "total": 65.00,
  "status": "pending"
}


HOW TO GET AN ORDER BY ID

URL: `http://localhost:8002/api/${id}`
EXAMPLE: `http://localhost:8002/api/order/669b86cf6a4bfdaf926205e3`

METHOD: 'GET'

This is the data you should get

{
  "_id": "669b86cf6a4bfdaf926205e3",
  "user": "60d9f9a8a4c2c72d9f9a8b4c",
  "items": [
    {
      "product": "60d9f9b9a4c2c72d9f9a8b4d",
      "quantity": 2,
      "price": 25,
      "_id": "669b86d06a4bfdaf926205e4"
    },
    {
      "product": "60d9f9c0a4c2c72d9f9a8b4e",
      "quantity": 1,
      "price": 15,
      "_id": "669b86d06a4bfdaf926205e5"
    }
  ],
  "total": 65,
  "status": "pending",
  "createdAt": "2024-07-20T09:43:44.857Z",
  "updatedAt": "2024-07-20T09:43:44.857Z",
  "__v": 0
}


HOW TO GET ALL ORDERS

URL: `http://localhost:8002/api/order`

METHOD: 'GET'

[
  {
    "_id": "669b86cf6a4bfdaf926205e3",
    "user": "60d9f9a8a4c2c72d9f9a8b4c",
    "items": [
      {
        "product": "60d9f9b9a4c2c72d9f9a8b4d",
        "quantity": 2,
        "price": 25,
        "_id": "669b86d06a4bfdaf926205e4"
      },
      {
        "product": "60d9f9c0a4c2c72d9f9a8b4e",
        "quantity": 1,
        "price": 15,
        "_id": "669b86d06a4bfdaf926205e5"
      }
    ],
    "total": 65,
    "status": "pending",
    "createdAt": "2024-07-20T09:43:44.857Z",
    "updatedAt": "2024-07-20T09:43:44.857Z",
    "__v": 0
  }
]


HOW TO UPDATE ORDERS

URL: `http://localhost:8002/api/${id}`
EXAMPLE: `http://localhost:8002/api/order/669b86cf6a4bfdaf926205e3`

METHOD: PUT

Input the json data you want to update

{
    "status": "shipped",
    "items": [
        {
            "product": "60c72b1f9b1d4c23d8a7d4f5",
            "quantity": 2,
            "price": 29.99
        },
        {
            "product": "60c72b1f9b1d4c23d8a7d4f6",
            "quantity": 1,
            "price": 49.99
        }
    ],
    "total": 109.97
}


HOW TO DELETE AN ORDER

URL: `http://localhost:8002/api/order/${id}`
EXAMPLE: 'http://localhost:8002/api/order/669b86cf6a4bfdaf926205e3'

METHOD: DELETE