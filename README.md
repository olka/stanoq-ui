# Webapp

## Further features

Implement https://zoomcharts.com
Change tree to http://ecomfe.github.io/esui-family/controls/index.html?control=Tree
Current tree component is leaking
0) CI support and autodeploy
1) Map following on page scroll
2) Connect left and right controls
3) Play/Stop button with icons
4) Persistence of previous results
5) Analytics on results history 
6) Spinner on server connection wait

## Development server

ng build --prod --base-href "https://olka.github.io/stanoq-ui/"
ngh --message="Deploy"

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

1) Deployment process https://github.com/angular-buch/angular-cli-ghpages

    npm install --save-dev gh-pages
    then, in your package.json:

    "scripts": {
        "deploy": "ng build -prod -sm -ec -bh /reponame/ && gh-pages -d dist"
    }
