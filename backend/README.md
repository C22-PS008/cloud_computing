
# API Spec

## Authentication

All API must use this authentication

Request :
- Header :
    - `x-auth-token` : "jwt token"


## User Register

Request: 

- Method : `POST`
- Endpoint: `/api/user/register`
- Header :
    - `Content-Type`: `application/json`
    - `Accept`: `application/json`
- Body: 
```json
{
    "name": "string",
    "email": "string",
    "password": "string",
}
```

- Response:
```json
{
    "status": "success",
    "message": "User registered successfully",
    "data": {
        "id": "string, unique",
        "name": "string",
        "email": "string",
        "password": "string, hashed",
        "dateRegist": "date",
    }
}

```

## User Login

Request: 

- Method : `POST`
- Endpoint: `/api/user/login`
- Header :
    - `Content-Type`: `application/json`
    - `Accept`: `application/json`
- Body: 
```json
{
    "email": "string",
    "password": "string",
}
```

- Response:
```json
{
    "status": "success",
    "message": "User logged in successfully",
    "data": {
        "id": "string, unique",
        "name": "string",
        "email": "sting"
    }
    "accessToken": "token key, unique"
}

```

## GET All Product 

Request : 
- Method : `GET`
- Endpoint : `/api/products/`
- Header :
    - `Content-Type`: `application/json`
    - `Accept`: `application/json`
    - `x-auth-token` : "jwt token"
- Body :

```json 
{
    "page": "number",
    "limit": "number",
}
```

Response :

```json 

{
    "status": "success",
    "message": "Products retrieved successfully",
    "data": [
        {
            "id": 1,
            "title": "Product 1",
            "price": "100.00",
            "imageUrl":"LINK URL IMAGES",
            "timestamps": "date",
        },
        {
            "id": 2,
           "title": "Product 2",
            "price": "100.00",
            "imageUrl":"LINK URL IMAGES",
            "timestamps": "date",
        },
        {
            "id": 3,
           "title": "Product 3",
            "price": "100.00",
            "imageUrl":"LINK URL IMAGES",
            "timestamps": "date",
        }
    ]
}
```
## GET Product by ID

Request : 
- Method : `GET`
- Endpoint : `/api/products/{id}`
- Header :
    - `Content-Type`: `application/json`
    - `Accept`: `application/json`
    - `x-auth-token` : "jwt token"
- Body :

```json 
{
    "id": "number",
}
```

Response :

```json 

{
    "status": "success",
    "message": "Product retrieved successfully",
    "data": {
        "id": 1,
        "name": "Product 1",
        "price": "100.00",
        "imageUrl": "https://",
        "timestamps": "date",
    }
}
```
## GET All Article

Request : 
- Method : `GET`
- Endpoint : `/api/article/`
- Header :
    - `Content-Type`: `application/json`
    - `Accept`: `application/json`
    - `x-auth-token` : "jwt token"
- Body :

```json 
{
    "page": "number",
    "limit": "number",
}
```

Response :

```json 

{
    "status": "success",
    "message": "Articles retrieved successfully",
    "data": [
        {
            "id": 1,
            "title": "Article 1",
            "content": "Article 1 content",
            "author": "imbron",
            "imageUrl": "https://",
            "timestamps": "2020-01-01 00:00:00",
        },
        {
            "id": 2,
            "title": "Article 2",
            "content": "Article 2 content",
            "author": "imbron",
            "imageUrl": "https://",
            "timestamps": "2020-01-01 00:00:00",
        },
        {
            "id": 3,
            "title": "Article 3",
            "content": "Article 3 content",
            "author": "imbron",
            "imageUrl": "https://",
            "timestamps": "2020-01-01 00:00:00",
        }
    ]
}
```
## GET Article by ID

Request : 
- Method : `GET`
- Endpoint : `/api/article/{id}`
- Header :
    - `Content-Type`: `application/json`
    - `Accept`: `application/json`
    - `x-auth-token` : "jwt token"
- Body :

```json 
{
    "id": "number",
}
```

Response :

```json 

{
    "status": "success",
    "message": "Article retrieved successfully",
    "data": {
        "id": 1,
        "title": "Article 1",
        "content": "Article 1 content",
        "author": "imbron",
        "imageUrl": "https://",
        "timestamps": "2020-01-01 00:00:00",
    },
}
```
