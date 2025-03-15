function sortStringsIgnoreSpaces(strings) {
    return [...strings].sort((a, b) => {
      const aClean = a.replace(/\s+/g, '').toLowerCase();
      const bClean = b.replace(/\s+/g, '').toLowerCase();
      if (aClean < bClean) return -1;
      if (aClean > bClean) return 1;
      return 0;
    });
  }
  
  module.exports = { sortStringsIgnoreSpaces };
  