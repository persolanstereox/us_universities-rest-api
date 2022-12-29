const express = require("express");
const router = express.Router();

const Universities = require("../../models/university");

// Get all universities
router.get("/", async (req, res) => {
  try {
    const universities = await Universities.find();
    if (!universities) throw Error("No items");
    res.status(200).json(universities);
  } catch (err) {
    res.status(400).json({
      msg: err,
      errMessage: err.message,
    });
  }
});

// Get by id
router.get("/:id", async (req, res) => {
  try {
    const univeristy = await Universities.findById(req.params.id);
    if (!univeristy) throw Error("No items");
    res.status(200).json(univeristy);
  } catch (err) {
    res.status(400).json({
      msg: err,
      errMessage: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  const newUniversity = new Universities(req.body);

  try {
    const university = await newUniversity.save();
    if (!university) throw Error("Something went wrong while saving the university info");
    res.status(200).json(university);
  } catch (err) {
    res.status(400).json({
      msg: err,
      errMessage: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const university = await Universities.findByIdAndDelete(req.params.id);
    if (!university) throw Error("No universities found!");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({
      msg: err,
      errMessage: err.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const university = await Universities.findByIdAndUpdate(req.params.id, req.body);
    if (!university) throw Error("Something went wrong while updating the university info!");

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({
      msg: err,
      errMessage: err.message,
    });
  }
});

module.exports = router;
