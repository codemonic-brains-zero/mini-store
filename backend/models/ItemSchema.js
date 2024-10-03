import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'; // Importing jwt to use for token generation

const Item = new mongoose.Schema({
  Item_Number: {
    type: String,
    required: true,   // Item number is required
    unique: true,     // Ensures the item number is unique
  },
  Item_Name: {
    type: String,
    unique: true,
    required: [true, 'Item name is required'],  // Name is required with a custom error message
    minlength: [3, 'Item name must be at least 3 characters long'],  // Min length validation
    maxlength: [100, 'Item name must be less than 100 characters'],  // Max length validation
  },
  HSN_SAC: {
    type: String,
    required: [true, 'HSN/SAC code is required'],
    minlength: [4, 'HSN/SAC code must be at least 4 characters long'],  // Adjust as per the typical HSN/SAC length
    maxlength: [10, 'HSN/SAC code must be less than 10 characters'], // Typically, HSN is 6-8 digits, SAC is around 8-10 digits
    validate: {
      validator: function(v) {
        return /^[0-9]+$/.test(v); // Validate that HSN/SAC consists only of digits
      },
      message: props => `${props.value} is not a valid HSN/SAC code! It should only contain digits.`
    }
  },
  Price: {
    type: String,
    required: [true, 'Price is required'],  // Price is required
    min: [0, 'Price must be greater than or equal to 0'],  // Price must be a positive number
  },
  GST: {
    type: String,
    required: [true, 'GST is required'],  // GST is required
    min: [0, 'GST must be greater than or equal to 0'],  // GST should be at least 0
    max: [100, 'GST must be less than or equal to 100'],  // GST cannot exceed 100%
  }
});

// Adding a method to generate a JWT token
Item.methods.getJWTToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};

export default mongoose.model('Item', Item);
