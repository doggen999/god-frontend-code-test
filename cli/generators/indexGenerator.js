#! /usr/bin/env node

"use strict";

const fs = require("fs");

function content(name) {
  return `import { ${name} } from "./${name.toLowerCase()}";

export default ${name};
`;
}
module.exports = {
  generate: function (name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
