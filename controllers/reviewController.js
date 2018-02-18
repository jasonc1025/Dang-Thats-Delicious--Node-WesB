const mongoose = require('mongoose');

// [jwc] https://stackoverflow.com/questions/20832126/missingschemaerror-schema-hasnt-been-registered-for-model-user: Ahei Cheng: Fix 1 of 2: Failed  
// NOT WORK, MOVE TO 'APP.JS': var Store = require('../models/Store.js');  

const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {
  req.body.author = req.user._id;
  req.body.store = req.params.id;
  const newReview = new Review(req.body);
  await newReview.save();
  req.flash('success', 'Review Saved!');
  res.redirect('back');
};
