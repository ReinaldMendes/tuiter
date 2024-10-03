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
export const store = async (req, res) => {
  try {
    const { text } = req.body;
    const user = req.user._id;
    const content = await User.create({
      text,
      user,
    });
    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await User.find().exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const content = await User.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const { text } = req.body;
    const user = req.user._id;
    const content = await User.findByIdAndUpdate({
      _id: req.params.id,
      user,
    }).exec();
    if (!contente) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    await User.findOneAndDelete({ user: req.user._id, _id: req.params }).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};

export const followUnfollow = async (req, res) => {
  try {
    if (!req.user.following.includes(req.params.id)) {
      req.user.following.push(req.params.id);
    } else {
      const index = req.user.following.indexOf(req.params.id);
      req.user.following.splice(index, 1);
    }
    await req.user.save();
    res.json;
  } catch (error) {
    res.status(400).send(error.message);
  }
};
