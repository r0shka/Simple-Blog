# AA-Angular-Project

Angular project made by Astou Gueye and Vadym Roshka.
Current functionality:
- displaying list of projects
- displaying details of a project
- exporting details as PDF
- searching project by the name
- creating and saving new project
- editing and saving existing project
- deleting a project
- sensible information (Create, Edit) in separate components in order to later hide it with Route Guard

Live version deployed on Firebase available [here](https://engineering-company-project.firebaseapp.com/)

## TODO

- hide sensible pages (add, edit) with Route Guard
- better hide sensitive field "cost"
- proper authentication
- image in exported PDF  

## PDF Export

PDF Export functionality implemented with [ngx-export-as](https://www.npmjs.com/package/ngx-export-as) package

## Design

UI implemented with Angular Material

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

