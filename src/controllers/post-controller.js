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
      rentedBy: undefined,
    }).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};
