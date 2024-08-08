import jwt from 'jsonwebtoken';
import User from "../models/userSchema.js";
import ErrorHandler from '../error/error.js';

const authenticate = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
  
    if (!token) {
      return next(new ErrorHandler("No token provided", 401));
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
  
      if (!user) {
        return next(new ErrorHandler("Invalid token", 401));
      }
  
      req.user = user;
      next();
    } catch (error) {
      next(new ErrorHandler("Invalid token", 401));
    }
  };
  

export default authenticate;
