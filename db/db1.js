const { v4:uuidv4} = require ('uuid');
const users = [
      {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@example.com",
        id: uuidv4()
      },
      {
        first_name: "Alice",
        last_name: "Smith",
        email: "alicesmith@example.com",
        id : uuidv4()
      },
      {
        first_name: "David",
        last_name: "Johnson",
        email: "davidjohnson@example.com",
        id : uuidv4()
      },
      {
        first_name: "Emily",
        last_name: "Brown",
        email: "emilybrown@example.com",
        id: uuidv4()
      }]
module.exports = {users};

    
  
