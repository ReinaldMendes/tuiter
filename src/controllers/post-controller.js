import Post from "../models/post-models.js";
export const store = async (req, res) => {
  try {
    const content = await Post.create({
      user: req.user._id,
    });
    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Post.find({
      user: req.user._id,
      _id: req.params,
    }).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Post.findByOne({
      user: req.user._id,
      _id: req.params,
    }).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const content = await Post.findByIdAndUpdate({
      user: req.user._id,
    }).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    await Post.findOneAndDelete({ user: req.user._id, _id: req.params }).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
