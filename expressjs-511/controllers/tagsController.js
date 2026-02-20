const tags = [0];

const getTags = (req, res) => {
  // Send the current state of the tags array
  res.json({ tags });
  tags.push(tags.length);
};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};