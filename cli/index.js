#! /usr/bin/env node

// TODO Forked - rewrite in TS (and publish as package)
"use strict";

const fs = require("fs");
const path = require("path");

const indexFileGenerator = require("./generators/indexGenerator");
const componentFileGenerator = require("./generators/componentGenerator");
const styleFileGenerator = require("./generators/styleGenerator");
const storyFileGenerator = require("./generators/storyGenerator");

const name = (process.argv[2] || "").trim();

if (!name) {
  return console.error(
    "Name argument is missing, can't generate component. Exiting"
  );
}

const componentName = name.charAt(0).toUpperCase() + name.slice(1);

const componentDir = path.resolve(
  __dirname,
  "../",
  "src/components",
  componentName.toLowerCase()
);

if (fs.existsSync(componentDir)) {
  return console.error(`"Folder '${componentDir}' already exists. Exiting. "`);
}

fs.mkdirSync(componentDir, { recursive: true });

const indexFile = path.join(componentDir, "index.ts");
const componentFile = path.join(componentDir, `${componentName.toLowerCase()}.tsx`);
const styleFile = path.join(componentDir, `${componentName.toLowerCase()}.module.scss`);
const storyFile = path.join(componentDir, `${componentName.toLowerCase()}.stories.ts`);

indexFileGenerator.generate(`${componentName}`, indexFile);
componentFileGenerator.generate(componentName, componentFile);
// styleFileGenerator.generate(componentName, styleFile);
storyFileGenerator.generate(componentName, storyFile);

console.log(`${componentName} is generated in ${componentDir}`);
