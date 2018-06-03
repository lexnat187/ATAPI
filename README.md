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

All repositories have been dockerised and can be started by running the docker compose function. Check out each repository into the same root directory and run the following command within the API folder:

```
docker-compose up
```

Stop the containers using

```
docker-compose down
```

If the yarn registry returns errors while using docker-compose then please build each image from ATAPI, ATM-P and ATOUNASS separately then run the docker-compose up command again

## Folder structure

 * root
    * ATAPI
    * ATCOMMON (not required for running)
    * ATM-P
    * ATOUNASS

## Using the apps

Each docker container will spool up and attach to a different port

```
API: http://localhost:3003
```

```
MandP: http://localhost: 3001
```

```
Ounass: http://localhost:3002
```

## Author

* **Alexander Walker**