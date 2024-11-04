const express = require ('express');
const { v4:uuidv4} = require ('uuid');
const {users} = require('../db/db1');
const router = express.Router();

let abc = users;

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    // console.log(users);
    res.send(abc);
})

// Adding users to our mock database

router.post('/', (req, res) => {
    const user = req.body;

    abc.push({...user, id: uuidv4() });

    res.send(`${user.first_name}  ${user.last_name} has been added to the Database`);
})  

// get a particular user
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = abc.find((user) => user.id === id)

    res.send(foundUser)
});

// delete the user from the database
router.delete('/:id', (req, res) => {
  const { id } = req.params;

    abc = abc.filter((user) => user.id !== id)

  res.send(`${id} deleted successfully from database`);
});

// Make a PATCH request to the database
router.patch('/:id', (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email, phone} = req.body;

  const user = abc.find((user) => user.id === id)

  if(first_name) user.first_name = first_name;
  if(last_name) user.last_name = last_name;
  if(email) user.email = email;
  if(phone) user.phone = phone;

  res.send(`User with the ${id} has been updated`)
  
});
module.exports = router