# Server Back End

## Install application

```
npm install
```

## Run application

```
grunt execute
```


## Folder architecture 

```
- package.json
- app.js
- scripts
 - core
    │_ config.js 
 - model
    │_ manageYourObject.js
 - routing
    │_ yourObjectRouter.js
```

### app.js

The file app.js is the root of the server. In fact, app.js handles every request received by the server. It has two goals. Firstly, it contains the features to set up environment and to start the server. Secondly, when it receives a request it redirects to the good route. We define the route into the folder routing.

In order to better understand the process when the server receives a request let's take an example.
The server receives a HTTP request, a GET, with the following routes: /ptr. App.js checks the url and sees the "/ptr". So it redirects the request to ptrRouter.js into the folder routing.

### Folder routing

The folder contains all the routes the server may need. In each route files, we define the behavior of the server according to the type of requests and the url. We are simply going to link the request with specific function into the model folder. 

If we continue with our example. The Router into ptrRouter is going to check the request: we have a GET with the url '/ptr'. So the router is going to call a function getPtr() from managePtr.js (file into the folder model) in order to make the query and then returns the data.

### Folder model

The folder contains all the files which manage the requests and the data. They are the last step before sending back the response. 

To finish with our example. We have the file managePtr into the folder model. The file contains a function getPtr() which calls the database, gets back the data, build the object and sends the object to the Front End.

### Folder core

This folder contains all the common files for the server. For instance, the configuration to connect to the database, the common variables etc... 