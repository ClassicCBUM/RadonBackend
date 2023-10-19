In order to configure our db:
1. Postgresql will be our db manage system
2. We are using sequelize (a node library) that makes everything easier
3. Then what we need to do is to create our DB in postgreSQL and a user with all the permissions:
(psql -U postgres to connect as a superuser)
```SQL
CREATE DATABASE radondb;
CREATE USER username WITH PASSWORD 'password';
GRANT CONNECT ON DATABASE radondb TO username;
GRANT USAGE, CREATE ON SCHEMA public TO username;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO username;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT, UPDATE ON SEQUENCES TO username;
\c radon db
GRANT ALL PRIVILEGES ON SCHEMA public TO username;
```
4. Finally we need to create a .env file that looks like this:
```
DATABASE_NAME=radondb
DATABASE_USER=user
DATABASE_PASSWORD=password
DATABASE_DIALECT=postgres
DATABASE_HOST=still localhost
DATABASE_PORT=postgresql PORT
```
5. We have our db ready!