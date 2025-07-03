const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory data store (temporary storage)
let items = [
  { id: 1, name: 'Item One', description: 'This is the first item' },
  { id: 2, name: 'Item Two', description: 'This is the second item' }
];

// To help generate new unique IDs
let nextId = 3;

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get a single item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

// Create a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;

  // Simple validation
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = {
    id: nextId++,
    name,
    description
  };

  items.push(newItem);
  res.status(201).json(newItem); // 201 Created
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;

  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  // Validate input
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  // Update values
  item.name = name;
  item.description = description;

  res.json({ message: 'Item updated successfully', item });
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(index, 1);

  res.json({ message: 'Item deleted successfully', item: deletedItem[0] });
});


// Root Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Invalid Route Handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
