# stack-overflow-replica

This is a MERN stack app. The backend is hosted on render.com and the frontend can be run locally on the system using below commands:

1. git clone https://github.com/abhigurjeet/stack-overflow-replica.git
2. cd client
3. npm install
4. npm start
   These steps are enough to run the entire application.


   
If you want to run backend locally as well then follow below steps for server side:
1. Run - cd server
2. Run - npm install
3. Create a new cluster on mongodb atlas and get database connection string from there.
4. Create .env file in server directory and add ---> DATABASE_URL= <Database connection string>
5. Run - nodemon index.js

   Change the url for the axios requests to localhost address on which the backend is running.
