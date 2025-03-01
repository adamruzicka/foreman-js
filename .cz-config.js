const formatedMessage = str => str.trim();

const types = [
` feat:     A new feature`,
` fix:      A bug fix`,
` docs:     Documentation only changes`,
` style:    Changes that do not affect the meaning of the code
            (white-space, formatting, missing semi-colons, etc)`,
` refactor: A code change that neither fixes a bug nor adds a feature`,
` perf:     A code change that improves performance`,
` test:     Adding missing tests`,
` chore:    Changes to the build process or auxiliary tools
            and libraries such as documentation generation`,
];

const messages = {
type:
`Select the type of change that you're committing:`,

scope:
`The package affected by your change:`,

subject:
`Write a SHORT, IMPERATIVE tense description of the change:\n`,

body:
`Provide a LONGER description of the change (optional). Use "|" to break new line:\n`,

breaking:
`Describe any BREAKING CHANGES (optional):\n`,

footer:
` List any RELATED ISSUES to this change (optional).
  Foreman issues should be listed as: refs #number
  foreman-js issues in github shuold be listed as fixes #GH-number
  E.g.: refs #123, refs #321, fixes #GH-34, fixes #GH-35

  ISSUES: `.trimStart(),

confirmCommit:
`Are you sure you want to proceed with the commit above?`,
};

const scopes = [
  'root',
  'builder',
  'eslint-plugin-foreman',
  'eslint-plugin-rules',
  'stories',
  'test',
  'vendor',
  'vendor-dev',
  'vendor-core',
  'find-foreman',
  // deps and deps-dev are only allowed for dependbot PRs
  'deps',
  'deps-dev',
];

module.exports = {
  types: types.map(type => ({
    value: type.split(':')[0].trim(),
    name: type,
  })),

  scopes: scopes.map(scope => ({
    name: scope,
  })),

  messages,

  subjectLimit: 65,
  allowCustomScopes: false,
  allowTicketNumber: false,
  allowBreakingChanges: ['feat', 'fix'],
  breakingPrefix: 'BREAKING CHANGE:',
  footerPrefix : 'ISSUES:',
};
