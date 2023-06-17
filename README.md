# Angular application integrated with Keycloak

## Project description

Purpose of the project was to learn how to integrate keycloak with web based app. On repo you can find docker-compose
configuration
to simplify deployment. Keycloak will connect with Postgres DB and angular client will connect to it accordingly to
configuration

## What you need to run this app

   * Docker
   * Node JS


## Setup

   * Git clone repository
   * Run command `docker-compose up` inside sso-app folder
   * Run `npm i` inside sso-app folder
   * Run `npm start` inside sso-app folder
   * Enter url http://localhost:8080/ enter login admin pass admin 
   * To avoid problems with import create Realm with name SsoApplication
   * Select import method , choose realm-export.json from projct file, and choose overwrite if versione exists
   * Now you can use http://localhost:4200/ for angular app

## Functionalities

Keycloak will handle authorizing user, saving his data. In current realm that you can find in project , all below functionalities are configured :

   * Login
   * Register
   * Forgot Password
   * Remember me
   * 2FA 
   * Login by Github
