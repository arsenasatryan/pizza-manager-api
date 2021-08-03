# PizzaManager API

This project was developed with [JSON-Server](https://www.npmjs.com/package/json-server). Node.js version 12.16.2

## Development server

Run `npm run start` for a dev server.
command runs 2 servers 
API endpoints - http://localhost:3000
SOCKET - http://localhost:3001

Socket server used for updating orders in the Dashboard and Status pages if someone orders pizza. 
Dashboard also will be update with the socket events when admin updates ordes status from the list

## db data set changes

if you want manually update or add data in the orders or prices dataset, 
you need to open and edit accorindgly orders.json or pizza-prices.json files. 

pizza-prices defines price for each pizza size and pizza size toppings. for example


```JSON5
// for each topping:
"bacon": {
      "large": 0.99,
      "medium": 0.79,
      "small": 0.59
    },```
 
// for sizes:
"sizes": {
    "large": 10.99,
    "medium": 9.99,
    "small": 8.99
  }
```
here also order json object example

```JSON5
{
    "name": "Arsen Asatryan",
    "email": "asatryanarsen4@gmail.com",
    "address": "Babajanyan 18",
    "phone": "+37495387007",
    "pizzas": [
      {
        "size": "large", // valid values are 'large'  | 'medium' | 'small', 
        "toppings": []
      },
      {
        "size": "large",
        "toppings": [ // each topping via comma seperated list 
          "sweetcorn",
          "mushroom"
        ]
      }
    ],
    "status": "pending", // for valid status see below enum
    "createdTime": "2021-08-03T14:21:21.666Z", // time of order creation,    
    "completedTime": "2021-08-03T15:21:21.666Z", // time of order delivery
    "itemId": "A86NWZ89AA", // random id generated
    "price": 23.71, // total price for size plus toppings
    "id": 10 // id in the internal system
  }
```
valid topping values can be find in the pizza-prices.json <br />
valid status fields

```tsx
export enum OrderStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  IN_TRANSIT = 'inTransit',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}
```

## Further help
https://www.npmjs.com/package/json-server

