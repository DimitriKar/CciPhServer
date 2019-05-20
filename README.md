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
* Launch server : redis-server
* Check if Redis is working : redis-cli ping
```
### Redis options : 

* redis-server is the Redis Server itself.
* redis-sentinel is the Redis Sentinel executable (monitoring and failover).
* redis-cli is the command line interface utility to talk with Redis.
* redis-benchmark is used to check Redis performances.
* redis-check-aof and redis-check-dump are useful in the rare event of corrupted data files.

## TODO :

* Connect to the redis data base
* All APIs must go through some validation middleware
    * check to see if content-type is "application/json"
* Create a POST Api to "register"
    * An object with a "username" property
    * Generate secret key used for authentication
    * add the key to redis with value pf (ex :JSON.stringify({username : "John"}))
    * Returns 201 created with the randomly generated
* For all others APIs a middleware is needed for authentication
    * etc ...