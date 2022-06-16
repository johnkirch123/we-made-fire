const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route   GET api/users
// @desc    Get User
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send('Error fetching all users...');
  }
});

// @route   Post api/users
// @desc    Register User check
// @access  Public
router.post('/', async (req, res) => {
  const { address } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({ address });

    // If user exists update visit count
    if (!user) {
      const newUser = new User({
        address
      });
      await newUser.save();
      return res.status(200).json(newUser);
    }

    console.log(user);
    await User.findOneAndUpdate({ address }, { $inc: { visits: 1 } });
    return res.json(user);
  } catch (err) {
    res.status(500).send('Error updating visits...');
  }
});

module.exports = router;
