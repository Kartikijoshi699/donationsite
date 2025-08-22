const Restaurant = require('../models/restaurantSchema');
const jwt = require('jsonwebtoken');

const signupRestaurant = async (req, res) => {
  const {
 restaurantName,
      ownerName,
      email,
      password,
      registrationNumber,
      contactPerson,
      phoneNumber,
      address,
      cityStatePincode,
      foodType,
      termsAccepted
      } = req.body;

  try {
    const existingRestaurant = await Restaurant.findOne({ email });
    if (existingRestaurant) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newRestaurant = new Restaurant({
      restaurantName,
      ownerName,
      email,
      password,
      registrationNumber,
      contactPerson,
      phoneNumber,
      address,
      cityStatePincode,
      foodType,
      termsAccepted
    });

    await newRestaurant.save();
    res.status(201).json({ message: 'Restaurant registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginRestaurant = async (req, res) => {
  const { email, password } = req.body;

  try {
    const restaurant = await Restaurant.findOne({ email });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    if (restaurant.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: restaurant._id }, 'secretKey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { signupRestaurant, loginRestaurant };
