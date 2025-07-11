# App

The `app` object is the Express.js server instance which has all your methods to build a full-fledged API.

---

## 1. `app.<HTTP-method>`
Here is a standard GET endpoint explained.

```js
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
```

#### i. `.get()`

This specifies the HTTP method. In this case, GET. 
It means this allows us to create an endpoint to receive GET requests.
GET is the READ operation in HTTP.
For other operations, use `app.<HTTP-method>`, for example `app.post()`, `app.delete()`, etc.

#### ii. `"/"`

The first argument of the `.get()` method is the endpoint string. It defines where the app will serve the request.
That is where you will visit in the browser or send HTTP requests to in order to perform your operation.
In this case, `"/"` is the root endpoint, meaning the homepage or the base URL.
So this handles requests sent to `"/"` (e.g., [http://localhost:3000/](http://localhost:3000/)).

#### iii. `(req, res) => {...}`

This is the route handler function, also called a callback.
When the endpoint, defined in the first argument is called, this function is executed.
This function itself has two arguments, `req` and `res`.

- `req`

  Short for request. It holds information about the incoming request - like headers, body, query params, etc.

- `res`

  Short for response. It's used to send data back to the client.
  It has `.send()`, `.sendStatus()`, `.sendFile()`, `.json()`, and other methods to send a response to the client.

#### iv. `res.send("Hello, World!")`

Sends a plain text response "Hello, World!" to the client.

#### v. Summary

In short, this code tells the Express server:

> When someone sends a GET request to the root URL `/`, respond with `Hello, World!`.


---

## 2. `app.use()`

This method allows the server to utilize middleware.

#### Middleware

Middleware is like a helper that sits in the middle of your web app. 
It checks or modifies the request before it reaches your final response. 
You can use it to log stuff, check if someone is allowed in, or prepare data, all before sending the actual reply.

Example of **built-in middleware**

```js
// Parses JSON in the request body
app.use(
    express.json() // express.json() comes pre-built in the express module
);
```

Example of **custom middleware**

```js
app.use((req, res, next) => {
  console.log('Request received at:', new Date());
  next(); // Pass to the next middleware or route
});
```

---

_This guide may update when necessary._

Abdul Mueed [Website ↗](https://mueed.xyz/) [GitHub ↗](https://mueed.xyz/github)