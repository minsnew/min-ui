# @mins-ui/eslint-config-mins

ESLint

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@mins-ui/eslint-config-mins`:

```sh
npm install @mins-ui/eslint-config-mins --save-dev
```

## Usage

Add `@mins-ui/eslint-config-mins` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
  "plugins": ["@mins-ui/eslint-config-mins"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
