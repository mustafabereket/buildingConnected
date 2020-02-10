# How To Start
This project was built using Angular CLI, 
if you do not have AngularCLI in your computer please download that using 'npm install -g @angular/cli'
- cd to the root folder (cd buildingConnectedProject)
- npm install
- ng serve --open
this could take 4-5 seconds but it should eventually open a browser for you pointing localhost:4200/

# How to use
Once the server is running, go to localhost:4200 and type something into searchbar and it should return relevant results.
Once you click on an art item, it should display details about it on the right side of the page.

# Notes
I tried to cover everything requested:
    1. Search results include the title, picture and link to its full details page at metmuseum.org
    2. It never returns more than 20 results (see api.service.ts line 29)
    3. It displays extra info when clicking any item on the result list
    4. It only sends the api request if 700ms passed since the user's last keystroke (see app.component.ts line 35 (debounce))
    5. It never displays content that doesnt match with the input. 
        To achieve that, I used both switchMap and a HashMap. 
        I only send/subscribe to latest searchInput query (switchMap), 
        if things change along the way, to avoid unexpected pending results I double check with a hashMap to see if what I retrieve matches with my searchInput
 




#Tools and Versions Used
Angular CLI: 8.3.22
Node: 12.13.1
OS: win32 x64
Angular: 8.2.14


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
