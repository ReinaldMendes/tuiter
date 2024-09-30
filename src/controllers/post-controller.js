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

export const show = async (req, res) => {
  try {
    const content = await OddEvenBet.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const content = await OddEvenBet.findByIdAndUpdate({
      user: req.user._id,
    }).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    await Caneta.findByIdAndDelete({ user: req.user._id }).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
