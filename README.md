# stack-overflow-replica
<br/><br/>
This is a MERN stack app. The backend is hosted on render.com and the frontend is hosted on vercel.<br/><br/><br/>
Website link -[Live](https://stack-overflow-replica.vercel.app/)
<br/><br/>
Steps to run the frontend locally:

1. git clone https://github.com/abhigurjeet/stack-overflow-replica.git
2. cd client
3. npm install
4. Create .env file in server directory and add ---> REACT_APP_API_URL= <server address>
5. npm start

<br/><br/>
   
If you want to run backend locally as well then follow below steps for server side:
1. Run - cd server
2. Run - npm install
3. Create a new cluster on mongodb atlas and get database connection string from there.
4. Create .env file in server directory and add ---> DATABASE_URL= <Database connection string>
5. Run - nodemon index.js


<br/><br/>
Styling is pending and some other features are pending.
