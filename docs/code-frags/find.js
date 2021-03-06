// require the client
var CarbonClient = require('@carbon-io/carbon-client')

var client = new CarbonClient("http://localhost:8888")

// find all users
var usersCollection = client.getCollection("users")
usersCollection.find().toArray(function(e, data) {
  console.log("All users")
  console.log(data)
})

// find by query in options
usersCollection.find({
  parameters: {
    query: {
      name: "joe"
    }
  }
}).toArray(function(e, data) {
  console.log("All users matching name 'joe'")
  console.log(data)
})

/* underlying HTTP call
* GET http://localhost:8888/users?query={"name":"joe"}
*/