const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const loadFixture = (file) => {
  console.log('loading fixture', path.join(__dirname, `${file}.csv`));
  return parse(fs.readFileSync(path.join(__dirname, `${file}.csv`)), {
    columns: true,
    cast: true,
  });
};

module.exports = loadFixture;
