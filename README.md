# CCI PH SERVER

## Install express 
```
express --no-view
```

## Install DotEnv
```
yarn add dotenv
```
* create .env file

## Install nodejs Redis
```
yarn add redis --save
```
#### Launch server :
```
redis-server
```
### Redis options : 

* redis-server is the Redis Server itself.
* redis-sentinel is the Redis Sentinel executable (monitoring and failover).
* redis-cli is the command line interface utility to talk with Redis.
* redis-benchmark is used to check Redis performances.
* redis-check-aof and redis-check-dump are useful in the rare event of corrupted data files.

## TODO :

* Connect to the redis data base
> See config/database.js
* All APIs must go through some validation middleware
    * check to see if content-type is "application/json"
    > See app/middleware/content-type-checker.js
* Create a POST Api to "register"
    * An object with a "username" property
    ```
    {
        "username" : "John"
    }
    ```
    * Generate secret key used for authentication
    ```
    ## Install ##
    yarn add keygenerator --save
    ## Add to project ##
    const keygen = require("keygenerator");
    ## Generate ##
    keygen._();
    ```
    * add the key to redis with value pf (ex :JSON.stringify({username : "John"}))
    ```
    const data = req.body;
    client.set(secretKey, JSON.stringify(data))
    ```
    * Returns 201 created with the randomly generated
    ```
    const secretKey = keygen._();
    res.status(201).json({
      secretKey: secretKey,
    });
    ```
* For all others APIs a middleware is needed for authentication
    * Header will have "Token" random key
    * Chek if key(token) is exist in redis
    * If exist accept request
    * If doesent exist throw an error 401 not authorised
* Create PUT Api that accepts ANY types of JSON data format
    Replaces the data currently att the redis key with the new data sent
    * etc ...