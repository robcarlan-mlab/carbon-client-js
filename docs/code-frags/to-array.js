// require the client
var CarbonClient = require('@carbon-io/carbon-client')

var client = new CarbonClient("http://localhost:8888")

// find all users
var usersCollection = client.getCollection("users")
usersCollection.find().toArray(function(e, data) {
  console.log("All users")
  console.log(data)
})

