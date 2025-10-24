# Node.js Lesson 12 - Learning Notes

## What I Learned

### Express Routing Methods

**`app.use(path, handler)`**
- Matches **all HTTP methods** (GET, POST, PUT, DELETE, etc.)
- Use for middleware or catch-all routes
- Example: `app.use('/admin', ...)` handles any method to `/admin`

**`app.post(path, handler)`**
- Only matches **POST requests**
- Use for creating resources or handling form submissions
- Example: `app.post('/product', ...)` creates a new product

**`app.get(path, handler)`**
- Only matches **GET requests**
- Use for retrieving/displaying data

**`app.put(path, handler)`**
- Only matches **PUT requests**
- Use for updating existing resources with known ID
- Example: `app.put('/product/123', ...)` updates product 123

### POST vs PUT
- **POST**: Create new resource (server assigns ID)
- **PUT**: Update existing resource (client provides ID like `/product/123`)

## Challenges

1. **When to use `app.use()` vs specific methods**
   - `app.use()` is too broad for routes with specific purposes
   - Better to use `.post()`, `.get()` for clear intent

2. **POST vs PUT confusion**
   - POST for creation when server generates the ID
   - PUT for updating a resource at a specific URL

3. **Middleware order matters**
   - `body-parser` must come before routes that use `req.body`
   - Specific routes before generic catch-all routes

## Code Example

```javascript
// Middleware - all methods
app.use(bodyParser.urlencoded({extended: false}));

// GET only - display form
app.get('/add-product', (req, res) => {
  res.send('<form action="/product" method="POST">...</form>');
});

// POST only - handle form submission
app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');  // POST-Redirect-GET pattern
});
```
