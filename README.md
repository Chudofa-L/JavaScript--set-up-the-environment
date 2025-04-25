#/// git stash     /// 
#/// git stash pop /// перенести изменения в нужную ветку

1. Инициализация:
#   git init // Инициализация локального репозитория
#   git remout ...репозиторий... // клонирование удаленного репозитория
#   git clone ...репозиторий... _/
#   git branch -M main // создание основной ветки main или master
#   git commit -m"init" --allow-empty // пустой коммит

#/////

###2. NODE.js // nvm - установка любой версии NODE // https://github.com/nvm-sh/nvm
#   init_npm
#   npm init -y /// базовый (пустой) package.json
#   npm init // Настройка:
#               name: ...имя пакета
#               version: (1.0.0)
#              description: ...
#               entry point: (index.js)
#              test command: _
#               git repository: ...репозиторий
#               keywords: ...ключевые слова
#               author: _
#               license: MIT / ISC
#               yes
#   /// .gitignore -> node_modules
###3. JEST /// Запуск тестов
#   папка src
#   npm install jest @types/jest -D /// установка JEST в DEV -D
#   npx jest --init // инициализация конфиг jest
#   Настройка:
#   ✔ Would you like to use Jest when running "test" script in "package.json"? ... yes
#   ✔ Would you like to use Typescript for the configuration file? ... no
#   ✔ Choose the test environment that will be used for testing › ... jsdom (browser-like)
#   ✔ Do you want Jest to add coverage reports? ... no/yes /// покрытие тестов
#   ✔ Which provider should be used to instrument code for coverage? › ... v8
#   ✔ Automatically clear mock calls and instances between every test? ... yes
#   npm i jest-environment-jsdom -D //// установка jsdom
#   npm install --save-dev babel-jest @babel/core @babel/preset-env /// установка подержки модулей https://jestjs.io/ru/docs/getting-started#с-использованием-babel
#  создав файл в корне вашего проекта babel.config.js :
#   module.exports = {
#  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
#   };
#   npx jest /// запуск тестов
###4.1 ESLINT /// поиск ошибок в коде
#   npm i eslint -D // установка
#   npx eslint --init // конфиг
#   Настройка : 
#   problems
#   import/export
#   framework React / none
#   TypeScript yes/no
#   Browser
#   install yes
#   npm
#   Правила eslint.config.mjs:   https://eslint.org/docs/latest/rules/
#   {
#    rules: {
#      "prefer-const": "error",
#      "no-unused-vars": "error",
#      "semi": "error",
#    },
#   },
#   Скрипты package.json:
#   "scripts": {
#    "lint": "eslint src",
#    "lint:fix": "eslint src --fix",
#  },
###4.2 ESLint и Jest   https://www.npmjs.com/package/eslint-plugin-jest
#   npm i eslint-plugin-jest -D // установка
#   eslint.config:
#   import jest from "eslint-plugin-jest";
#   /// Для тестов
#   {
#    files: ["src/**/*.test.js"],
#    ...jest.configs['flat/recommended'],
#   }
###5. PRETTIER
#   файл .prettierrc :
#   /// правила
#   {
#    "semi": true,
#    "singleQuote": true,
#    "trailingComma": "all"
#  }
#   npm install --save-dev eslint-plugin-prettier eslint-config-prettier // установка
#   npm install --save-dev --save-exact prettier                        _/
#   ESlint config:
#   import eslintRecommended from "eslint-plugin-prettier/recommended";
#   eslintRecommended,
###6. Lint-Staged  /// хуки
#   husky
#   npm install --save-dev husky lint-staged
#   npx husky init  // husky config
#   node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')" /// в файле pre-commit прописали npx lint-staged
#   package.json :
#   "lint-staged": {
#    "src/**/*.js": "eslint"
#  },
#7. Sanity check
#   .github/workflows/sanity-check.yml
#   создаем папку .github в ней папку workflows в ней файл sanity-check.yml :
#   name: PR Sanity Check
#
#on: pull_request
#
#jobs:
#  lint:
#    runs-on: ubuntu-22.04 /// версия 20.04 больше не подерживается 
#    steps:
#      - name: Checkout
#        uses: actions/checkout@v4   /// или версию новее https://github.com/actions/checkout
#
#      - name: Install Packages
#        run: |
#          npm install
#
#      - name: Lint check
#        run: |
#          npm run lint
#
#      - name: Lint check
#        run: |
#          npm run test
###8. Add codesandbox link
#   В папке workflows
#   Файл sandbox.yml
#   
#   name: Add codesandbox link
#
#on:
#  pull_request:
#    types: [opened]
#  # https://github.com/mshick/add-pr-comment/issues/25
#  pull_request_target:
#    types: [opened]
#
#jobs:
#  codesandbox-comment:
#    name: Add codesandbox link comment
#    runs-on: ubuntu-latest
#    permissions:
#      pull-requests: write
#    steps:
#      - uses: mshick/add-pr-comment@v2
#        env:
v          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
#        with:
#          message: |
#            You can check this code at CodeSandbox with the link
#            https://githubbox.com/${{ github.repository }}/tree/${{ github.head_ref }}
#
#9. Modul
#    npx node-static .
#    npx -y node-static src // сервер
#10. eslint-config-airbnb-base //// https://www.npmjs.com/package/eslint-config-airbnb-base
#    npx install-peerdeps --dev eslint-config-airbnb-base
#    eslint.config :
#    
#11. GtHub Pages
#    файл github-pages.yml :
#    name: GitHub Pages
#
#on:
#  pull_request:
#
#jobs:
#  deploy:
#    runs-on: ubuntu-22.04
#    permissions:
#      contents: write
#    steps:
#      - uses: actions/checkout@v3
#
#      - name: Build
#        run: |
#          mkdir dist
#          cp -R src/* dist
#      - name: Deploy
#        uses: peaceiris/actions-gh-pages@v4
#        with:
#          github_token: ${{ secrets.GITHUB_TOKEN }}
#          publish_dir: ./dist
#12. Webpack
#    npm install webpack webpack-cli --save-dev
#    npx webpack init
#    y // none // yes // no //no // none //npm
#    webpack.config.js :
#    const path = require('path');
#
#module.exports = {
#  entry: './src/index.js',
#  output: {
#    filename: 'main.js',
#    path: path.resolve(__dirname, 'dist'),
#  },
#};
#    npx webpack
#    gitignore -> dist/
#    npm install --save-dev html-webpack-plugin
#     script :
#      "dev": "webpack serve --mode=development",
#       "build": "webpack --mode=production",
#       config :
#       const path = require('path');
#const HtmlWebpackPlugin = require('html-webpack-plugin');
#
#module.exports = {
#  entry: './src/index.js',
#  output: {
#    filename: 'main.js',
#    path: path.resolve(__dirname, 'dist'),
#  },
#  plugins: [
#    new HtmlWebpackPlugin({
#      template: 'src/index.html',
#    }),
#  ],
#  devServer: {
#    static: {
#      directory: path.join(__dirname, 'public'),
#    },
#    compress: true,
#    port: 9000,
#  },
#};
# npx webpack serve Y
# 

     
