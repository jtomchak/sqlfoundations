db.restaurants.aggregate([
  { $match: { "address.zipcode": "10462", cuisine: "Bakery" } },
  {
    $group: {
      _id: "$name",
      inspection_score_average: { $addToSet: { $avg: "$grades.score" } }
    }
  },
  { $sort: { inspection_score_average: -1 } }
]);

db.restaurants.aggregate([
  { $match: { cuisine: "Bakery", "address.zipcode": "10462" } },
  //{ $group : {_id: "name", "averageScore" : {$avg : 'grades.score'} }
  {
    $project: {
      "restaurant name": "$name",
      "grade average": { $avg: "$grades.score" }
    }
  }
]);
