
# Email JWT

🔴 In this project, I used Nodemailer to send the JWT token via email, enabling the user to view all users. 🔴
## Language and frameworks used

**Back-end:** Node, Express, Prisma ORM, Nodemailer, bcrypt, JWT, dotenv.

```bash
    
    🐱 NEST.JS
    🛕 PRISMA ORM
    🐳 DOCKER
    ⚫ JWT
    🟡 BCRYPT
    🔴 EXPRESS
  ```

  Use the following command to install all dependencies:

```bash
npm i prisma @prisma/client bcrypt dotenv express jsonwebtoken nodemailer nodemon
```

<h2>ROUTES</h2>

<h3>Sign up User</h3>
  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3000/users">http://localhost:3000/user</a></li>
    <li><strong>Method HTTP:</strong> POST</li>
    <li><strong>JSON example:</strong></li>
  </ul>
  
  ```bash 
    {
      "name": "anymail",
      "email": "test@gmail.com",
      "password": "Abc@123"
    }
  ```

<h3>Login User</h3>
  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3000/login">http://localhost:3000/login</a></li>
    <li><strong>Method HTTP:</strong> POST</li>
    <li><strong>JSON example:</strong></li>
  </ul>

  ```bash 
    {
      "email": "test@gmail.com",
      "password": "Abc@123"
    }
  ```

  <h4>By making login, you will receive the JWT token in your email. </h4>

<h3>List all USERS</h3>

  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3000/findAll">http://localhost:3000/findAll</a></li>
    <li><strong>Method HTTP:</strong> GET</li>
    <li><strong>JSON example:</strong></li>
  </ul>
  <li> To list all Users, you need to authenticate with the JWT token, which you get when you log in, and pass it in the BEARER TOKEN. If it's valid, it will list all Users<li>