# Hackathon
# Using `create-react-app` with React Router + Express.js

Posible routes          
http://localhost:3000/App/Login    => Login<br />
http://localhost:3000/App/Register => Register<br />
http://localhost:3000/App/ForgotPassword  => Forgot Password<br />
http://localhost:3000/Users/ => Users List & search<br />
http://localhost:3000/User/Id => Login<br />
http://localhost:3000/Profile => Edit Profile<br />
http://localhost:3000/Calendar => Calendar<br />

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:3000`](http://localhost:3000).

```sh
npm start
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
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZmVjZDhiNS0yYmFjLTQ0NTYtYmJjMy0zYmJiMWU2OGFkMmYiLCJzdWIiOiJCT1NBcGlLZXkiLCJpYXQiOiIxNTM5MzU4NzA2IiwiYWNjb3VudCI6IjY4MWIxYmQ3LTA1MzAtNDQ1Yi05ZjlkLTk2ZDYzZTViZWEwMSIsInByb2plY3QiOiJkNGU1YTE4Ni00Y2FiLTQ5OTUtYTg3MS1mNTIxOGJkODk4YjYiLCJ0ZW5hbnQiOiIyNjIwZmU4MC1hYTUwLTQ5ZTUtOWQ5NS1iMGEzMzQ0Yjc1NWQifQ.4yuZUinPvYTaDdYEOVkMNSeiAWQcg06p99bTDVcZWGQ