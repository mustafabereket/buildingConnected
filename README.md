#Project Description
This was a take home assignment for a company I interviewed previously.
The goal here is to connect to Metropolitan Museum's API and retrieve some art collection based on the search input.

API info: https://metmuseum.github.io/

Use the Metropolitan Museum of Art API to build a UI for searching their collection. 
Search results should include the title of the piece, a picture of it, and a link to the piece on their full site. 
We should never show more than 20 results (and don’t worry about fetching more pages, for the context of this challenge). 
When a user clicks on a result we should show more detail about the piece (e.g. its dimensions, date, etc). 
It’s entirely up to you how we show such data (e.g. ﬂyout, modal, side pane, etc). 
If the user types a query very quickly, only one network request should be sent. 
E.g. if they super quickly type “Ocean” we should only send one request searching for “Ocean” rather than 5 requests for “O” then “Oc” then “Oce” and etc. 
We should never show results that don’t match the current content of the search input, even if the user’s network has highly variable latency. 
E.g. assume that one request to the server might take 10 seconds to return and the next could only take half a second. 
NOTE: This requirement is important, so make sure to read it carefully and let us know if you have any questions! 
Please include a brief README giving a high-level overview of the way you structured your code and feel free to include thoughts around things you might change if you were going to take the time to turn this into an actual product.

# How To Start
This project was built using Angular CLI, 
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
