## Data Model
Owner
- carIds

User
- userId

CarTable
- carId
- ownerId
- longitude
- latitude 
- pricePerHour
- pricePerDay

BookingsTable
- carId
- timestart
- timeend


## Api Model
### Owner
PUT /cars/booking
```
{}
```

### User
List cars available to rent for a given lat, long for a requested time window
Sort cars by price of the trip and distance
GET /cars


### App
How to render the dashboard?
GET /cars
PUT /cars/booking
