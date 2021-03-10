# AngularCardMatcher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

# Project Notes

This project is meant to be a demo for the moment. However, it has been structured so as to be expandable and as such contains routing as well as lazy loading for the page module currently included.

Future additons that may be added when I have more time:

  - Some better styling. The current styling is fairly quick and dirty. It's responsive to a large degree but not fully and has not been tested in all browsers though it is perfectly fine for anything Chromium-based. Better responsive design along with additional browser testing, a decent logo and a few hours time working out a better design along with a better look and feel for the cards could go a long way.

  - A working api to return data instead of the mock data that is currently being served up as an observable by the included service

  - More complete unit testing. Right now the unit tests have only been modified enough to work and not throw warnings, they mainly just test to ensure components are being generated and that the service is being created rather than actually testing functionality of the components and service. 

## Development server

Run `npm start` for a dev server. A browser should automatically open to `http://localhost:4001//applications/angular-card-matcher/`. The app will automatically reload if you change any of the source files. This app is currently only refined for Chromium-based browsers.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
