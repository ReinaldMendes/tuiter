import User from "../models/user-models.js";
import jwtServices from "../services/jwt-services.js";
export const signup = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
      role: req.body.role,
    });
    const token = jwtServices.generateAcessToken(user);
    res.json(token);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();
    if (user && (await user.isValidPassword(req.body.password))) {
      const token = jwtServices.generateAcessToken(user);
      res.json(token);
    } else {
      res.status(404).json({
        error: "Email os passaword incorrect",
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
