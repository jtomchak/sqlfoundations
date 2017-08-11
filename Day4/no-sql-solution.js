db.restaurants.aggregate(
   [
     { $match: { borough: "Queens", cuisine: "Brazilian" } },
     { $group: { _id: "$address.zipcode" , count: { $sum: 1 }, name: {$addToSet: "$name"} }},
      { $sort : { count : -1 }}
   ]
);


/* 1 */
{
    "_id" : "11106",
    "count" : 3.0,
    "name" : [ 
        "Carioca Grill", 
        "Malagueta  Restaurant", 
        "Copacabana Pizza & Grill"
    ]
}

/* 2 */
{
    "_id" : "11101",
    "count" : 2.0,
    "name" : [ 
        "Beija-Flor", 
        "Villa Brazil Cafe Grill"
    ]
}

/* 3 */
{
    "_id" : "11377",
    "count" : 1.0,
    "name" : [ 
        "Buffet 58"
    ]
}

/* 4 */
{
    "_id" : "11368",
    "count" : 1.0,
    "name" : [ 
        "Rainhas"
    ]
}

/* 5 */
{
    "_id" : "11103",
    "count" : 1.0,
    "name" : [ 
        "Point Brazil"
    ]
}