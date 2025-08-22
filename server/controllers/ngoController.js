const NGO = require('../models/ngoSchema');
const jwt = require('jsonwebtoken');

const signupNGO = async (req, res) => {
  const {
    ngoName,
    registrationNumber,
    email,
    password,
    contactPersonName,
    phoneNumber,
    address,
    cityStatePincode,
    typeOfWork,
  } = req.body;

  try {
    const existingNGO = await NGO.findOne({ email });
    if (existingNGO) return res.status(400).json({ message: 'Email already registered' });

    const newNGO = new NGO({
      ngoName,
      registrationNumber,
      email,
      password, // Plain text (Not recommended for production)
      contactPersonName,
      phoneNumber,
      address,
      cityStatePincode,
      typeOfWork
    });

    await newNGO.save();
    res.status(201).json({ message: 'NGO registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginNGO = async (req, res) => {
  const { email, password } = req.body;

  try {
    const ngo = await NGO.findOne({ email });
    if (!ngo) return res.status(404).json({ message: 'NGO not found' });

    if (ngo.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: ngo._id }, 'secretKey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { signupNGO, loginNGO };
