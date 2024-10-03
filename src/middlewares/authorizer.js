import User from "../models/user-models";

export default (role) => (req, res, next) => {
  try {
    const user = User.body.role;
    if (user) {
      req.user = user;
      next();
    } else {
      throw new Error("");
    }
  } catch (error) {
    res.sendStatus(401);
  }
};
