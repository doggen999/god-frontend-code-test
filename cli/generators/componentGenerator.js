#! /usr/bin/env node

"use strict";

const fs = require("fs");

function content(name) {
  return `import React from "react";

  
interface ${name}Props {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  
  /**
   * label
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const ${name} = ({
  backgroundColor,
  label,
  ...props
}: ${name}Props) => {
  return (
    <div
      {...props}
    >
      {label}
      <style jsx>{\`
        div {
          background-color: \${backgroundColor};
        }
      \`}</style>
    </div>
  );
};

export default ${name};
`;
}

module.exports = {
  generate(name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
