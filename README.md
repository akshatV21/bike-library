# Bike Library API

## Overview

This project is a simple Bike Library REST API built using [Nest.js](https://nestjs.com/). It provides a set of CRUD operations to manage a list of bikes, with features such as data validation through DTOs and persistence using SQLite. Swagger documentation has been integrated to visualize and test the API endpoints.

## Features

- **Fetch all bikes**: Retrieve a list of all bikes in the library.
- **Add a new bike**: Add new bike details to the library.
- **Update existing bike**: Modify the details of a specific bike by ID.
- **Delete a bike**: Remove a bike from the library by ID.

## Tech Stack

- **Framework**: Nest.js
- **Database**: SQLite
- **API Documentation**: Swagger (auto-generated)

## API Endpoints

| Method | Endpoint      | Description                        |
| ------ | ------------- | ---------------------------------- |
| GET    | `/bikes`      | Fetch a list of all bikes          |
| POST   | `/bikes`      | Add a new bike to the library      |
| PUT    | `/bikes/{id}` | Update details of an existing bike |
| DELETE | `/bikes/{id}` | Delete a bike from the library     |

## Setup and Installation

# Without Docker

1. **Clone the repository**:

```bash
git clone https://github.com/akshatV21/bike-library.git bike-library-api
cd bike-library-api
```

2. **Add the neccassary env variables**:

```text
PORT=8080
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

3. **Start the server**:

```bash
npm run start:dev
```

# With Docker

1. **Run the docker compose up command**:

```bash
docker compose up
```

## Screenshots

1. POST /bikes
   ![POST /bikes](images/post-bikes.png)

2. GET /bikes
   ![GET /bikes](images/get-bikes.png)

3. PUT /bikes/:bikeId
   ![PUT /bikes/:bikeId](images/put-bikes.png)

4. DELETE /bikes/:bikeId
   ![DELETE /bikes/:bikeId](images/del-bikes.png)
