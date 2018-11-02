# Hackathon
# Using `create-react-app` with React Router + Express.js

Posible routes for react application        
http://localhost:9000/App/Login    => Login<br />
http://localhost:9000/App/Register => Register<br />
http://localhost:9000/App/ForgotPassword  => Forgot Password<br />
http://localhost:9000/Users/ => Users List & search<br />
http://localhost:9000/User/Id => Login<br />
http://localhost:9000/Profile => Edit Profile<br />
http://localhost:9000/Calendar => Calendar<br />


Posible routes for Express Server API calls        
http://localhost:8080/api/auth/verification POST  => Login<br />
http://localhost:8080/api/user/ Post => Register<br />
http://localhost:8080/api/roles GET =>Fetch application roles<br />
http://localhost:8080/api/roles(:userid) POST => assign role to user <br />
http://localhost:8080/api/userrole(:userid) GET=> Retrieve Roles for a given user<br />
http://localhost:8080/api/people GET=> Get People<br />
http://localhost:8080/api/people POST=> Add Person<br />
http://localhost:8080/api/people(:personid) PUT=> Update Person<br />
http://localhost:8080/api/people(:personid) GET=> GET Person<br />
http://localhost:8080/api/assets GET=> Get Assets<br />
http://localhost:8080/api/assets(:assetid) GET=> Get Asset<br />
http://localhost:8080/api/assets POST=> Add Assets<br />
http://localhost:8080/api/assets(:asstid) DELETE=> Delete Assets<br />
http://localhost:8080/api/collections GET=> Get collections<br />
http://localhost:8080/api/collections(:collectionid) GET=> Get Collection<br />
http://localhost:8080/api/collections(:collectionid) POST=> Add Collection<br />
http://localhost:8080/api/collections(:collectionid) POST=> Delete Collection<br />
http://localhost:8080/api/collections(:collectionid) PUT=> Update Collection<br />

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:9000`](http://localhost:9000). 
React Application will be running at [`http://localhost:9000`](http://localhost:9000) 
and Express Server with BOS API calls will be runing at [`http://localhost:8080/api`](http://localhost:8080/api) 

```sh
node server
```
To create a production bundle.

```sh
npm run build
```



## Running with Docker

Be sure to install Docker and start a Docker-machine if necessary.

Let's create an image named `hackathon`:

```sh
docker build -t hackathon .
```

Finally, start a container named `hackathon-instance` at port `9000`.

```sh
docker run -p 9000:9000 --name hackathon-instance hackathon
```

## Testing

```sh
npm test
```


## BOS Api Key
### Tunehatch
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZDMzMWJkMC1jNDMxLTRkNGYtOGY2ZS1kNDg2MGViNjIxMTQiLCJzdWIiOiJCT1NBcGlLZXkiLCJpYXQiOiIxNTM5Mjg1NDE0IiwiYWNjb3VudCI6ImZlZTQ0ODdkLWExYjYtNDU5My05MTYzLTY4MzFiOWQ5ZjAwMSIsInByb2plY3QiOiI1Yzk1YjQ4Yy03MWRiLTQ2ODQtOGM5YS05YjA5ZGM5Y2NjZDIiLCJ0ZW5hbnQiOiJjNjRmY2QxOS0yOWE1LTQ4MDAtOGIyNi02OTgyYjE0MzlmZWQifQ.bRxkDgfYbStpoe4QRp3vaEXN7XYakJyVida3m2c8HzY

### Affordable Housing Application
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZmVjZDhiNS0yYmFjLTQ0NTYtYmJjMy0zYmJiMWU2OGFkMmYiLCJzdWIiOiJCT1NBcGlLZXkiLCJpYXQiOiIxNTM5MzU4NzA2IiwiYWNjb3VudCI6IjY4MWIxYmQ3LTA1MzAtNDQ1Yi05ZjlkLTk2ZDYzZTViZWEwMSIsInByb2plY3QiOiJkNGU1YTE4Ni00Y2FiLTQ5OTUtYTg3MS1mNTIxOGJkODk4YjYiLCJ0ZW5hbnQiOiIyNjIwZmU4MC1hYTUwLTQ5ZTUtOWQ5NS1iMGEzMzQ0Yjc1NWQifQ.4yuZUinPvYTaDdYEOVkMNSeiAWQcg06p99bTDVcZWGQ