// This is controller js
const getItems = (req, res) => {
    res.send('Get all items');
};

const getItemById = (req, res) => {
    const { id } = req.params;
    res.send(`Get item with ID: ${id}`);
};

const createItem = (req, res) => {
    const newItem = req.body;
    res.send(`Create new item: ${JSON.stringify(newItem)}`);
};

const updateItem = (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    res.send(`Update item with ID: ${id}, Data: ${JSON.stringify(updatedItem)}`);
};

const deleteItem = (req, res) => {
    const { id } = req.params;
    res.send(`Delete item with ID: ${id}`);
};

module.exports = {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
};