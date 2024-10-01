import Post from "../models/post-models.js";
export const store = async (req, res) => {
  try {
    const { text } = req.body;
    const user = req.user._id;
    const content = await Post.create({
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
    const content = await Post.find().exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Post.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const { text } = req.body;
    const user = req.user._id;
    const content = await Post.findByIdAndUpdate({
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
    await Post.findOneAndDelete({ user: req.user._id, _id: req.params }).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
