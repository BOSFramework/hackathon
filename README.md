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
