/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { execSync } = require('child_process');
const { iconList } = require('icomoon-react');

const iconSet = require('../src/config/icons/selection.json');

const outputFile = 'types.ts';
const outputPath = `${__dirname}/../src/addons/Icon/${outputFile}`;

const stringifyNames = () => JSON.stringify(iconList(iconSet));

const data = `// THIS IS AN AUTO-GENERATED-FILE DO NOT EDIT

export const iconNames = ${stringifyNames()} as const
export type IconName = typeof iconNames[number];
`;

const lintFile = () => {
  console.log('Linting Types...');
  execSync(`yarn eslint "${outputPath}" --fix`);
};

const addOutputToGit = () => {
  console.log('Adding new Icon Types to Git...');
  execSync(`git add ${outputPath}`);
};

const createFile = async () => {
  await fs.writeFile(outputPath, data, (err) => {
    if (err) throw err;
    lintFile();
    addOutputToGit();
    console.log('Done!');
  });
};

console.log('Initialized Icon Typing...');
console.log('Creating Icon Types...');
createFile();
