# CRUD Operations

CRUD stands for **Create**, **Read**, **Update**, and **Delete** which are the four fundamental operations to manage data.

Express provides HTTP methods (`app.post`, `app.get`, `app.put`, `app.delete`) that align perfectly with these operations.

In this guide, you'll learn how to implement these operations in Express.js.

### Sample data
In order to understand the working, we will use a sample collection of items which looks like:
```js
let items = [
      { id: 1, name: 'Item One' },
      { id: 2, name: 'Item Two' }
];
```
All CRUD operations are performed on this exact array of placeholder items.

### Middleware
In order to use `req.body`, we need to use the `express.json()` middleware, else the `req.body` object is going to be `undefined`.
Add the following piece of code:

```js
app.use(
    express.json()
);
```

---

## Create (POST)

**Purpose:** Add a new item to a list or database.

```js
app.post('/items', (req, res) => {
      const newItem = {
            id: items.length + 1,
            name: req.body.name
      };
      items.push(newItem);
      res.status(201).json(newItem);
});
```

---

## Read (GET)

**Purpose:** Retrieve items from a list or database.

**Get all items:**

```js
app.get('/items', (req, res) => {
    res.json(items);
});
```

**Get one item by ID:**

```js
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});
```

---

## Update (PUT)

**Purpose:** Replace a certain item from a list or database.

```js
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    
    item.name = req.body.name;
    res.json(item);
});
```

---

## Delete (DELETE)

**Purpose:** Delete a certain item from a list or database.

```js
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Item not found');
    
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
});
```

---

_This guide may update when necessary._ 

Abdul Mueed [Website ↗](https://mueed.xyz/) [GitHub ↗](https://mueed.xyz/github)