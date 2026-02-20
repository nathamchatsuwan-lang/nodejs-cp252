const categories = [];

const getCategories = (req, res) => {

  const requestedCategory = req.query.name;
  if (categories.length === 0) {
    return res.json({ categories: ['unknown'] });
  }
  if (requestedCategory && !categories.includes(requestedCategory)) {
    return res.json({ categories: ['unknown'] });
  }

  res.json({ categories });
};

// Implement other controllers related to categories

module.exports = {
  getCategories,
  // Export other category controllers
};