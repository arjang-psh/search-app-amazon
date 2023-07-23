export const applyFilters = (filter, data) => {
  let newRows = data;
  if (!filter) {
    return newRows;
  }
  if (filter.search) {
    newRows = newRows.filter((item) => {
      let newString =
        `${item.team} ${item.program} ${item.description}`.toLowerCase();
      return newString.includes(filter.search.toLowerCase());
    });
  }

  if (filter.level.length) {
    newRows = newRows.filter((row) => {
      return filter.level.every((level) => row.level.includes(level));
    });
  }

  if (filter.format) {
    newRows = newRows.filter((row) => {
      return filter.format.every((format) => row.format.includes(format));
    });
  }

  let leaderships = [
    "Customer Obsession",
    "Ownership",
    "Invent & Simplify",
    "Are Right, A Lot",
    "Learn & be Curious",
    "Think Big",
    "Hire and Develop the best",
    "Insist on the highest standards",
    "Bias for Action",
    "Frugality",
    "Earn Trust",
    "Dive Deep",
    "Have Backbone; Disagree and Commit",
    "Deliver Results",
    "Strive to be Earths Best Employer",
    "Success and Scale Bring Broad Responsibility",
  ];
  leaderships.forEach((leadership) => {
    if (filter.leaderships.includes(leadership)) {
      newRows = newRows.filter((row) => row[leadership]);
    }
  });
  return newRows;
};
