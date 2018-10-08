# Hackathon
# Using `create-react-app` with React Router + Express.js

#Posible routes          
#http://localhost:3000/login => Login 
#http://localhost:3000/register  => Register 
#http://localhost:3000/forgotpassword  => Forgot Password 
#http://localhost:3000/users/  => Users List & search
#http://localhost:3000/user/Id  => Login       
#http://localhost:3000/Profile  => Edit Profile        
#http://localhost:3000/Calendar  => Calendar 

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

Finally, start a container named `hackathon-instance` at port `80`.

```sh
docker run -p 80:9000 --name hackathon-instance hackathon
```

## Testing

```sh
npm test
```
