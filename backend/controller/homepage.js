const allProjectsList = ["one", "two", "three"];

const HomepageController = () => {
  const allProjects = (req, res) => {
    res.json({ allProjectsList });
  };

  return {allProjects}
};

module.exports = HomepageController;
