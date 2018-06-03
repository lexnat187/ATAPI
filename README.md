# ATAPI

# Test test for Al Tayer

## Getting started

These instructions will get everything up and running from a cold start

### Installing

To install the dependances simply run 

```
yarn install 
```

## Running tests

The test suits are configured using Jest. Tests are located at the top level of each relevant folder. Execute all tests with

```
yarn jest
```

## Verifying code coverage

To verify code coverage run the following

```
yarn coverage
```

## Docker

All repositories have been dockerised and can be started by running the docker compose within the API folder

```
docker-compose up
```

Stop the containers using

```
docker-compose down
```

## Using the apps

Each docker container will spool up and attach to a different port

API: localhost:3003
MandP: localhost: 3001
Ounass: localhost:3002

## Author

* **Alexander Walker**