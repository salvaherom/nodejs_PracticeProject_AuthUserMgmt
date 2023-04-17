const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req, res) => {
    res.send(JSON.stringify(frinds, null, 4));
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req, res) => {
    res.send(friends[req.params.email]);
});

// POST request: Add a new friend
router.post("/",(req, res)=>{
    if(req.body.email) {
        friends[req.body.email] = {
            "firstName" : req.body.firstName,
            "lastName" : req.body.lastName,
            "DOB" : req.body.DOB, 
        }
    }

    res.send(`The user ${req.body.firstName} has been added!`);
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
    let friend = friend[req.params.email];
    if(friend) {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let DOB = req.body.DOB;

        if(firstName) {
            friend["firstName"] = firstName;
        }
        if(lastName) {
            friend["lastName"] = lastName;
        }
        if(DOB) {
            friend["DOB"] = DOB;
        }

        friends[req.params.email] = friend;
        res.send(`Friend with the email ${req.params.email} updated.`);
    }
    else {
        res.send("Unable to find friend!");
    }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  if(email) {
      delete friends[req.params.email];
  }

  res.send(`Friend with email ${req.params.email} deleted.`);
});

module.exports = router;
