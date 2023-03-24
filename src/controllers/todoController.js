const todoServices = require("../services/todoServices");


exports.get = async (req, res) => {
    try {
      const { id, completed } = req.params;
      const query = {};
  
      if (id) query.id = id;
      if (completed) query.completed = completed;
  
      const todoItem = await todoServices.gettodo(query);
      res.status(200).json(todoItem);
    } catch (error) {
      console.error(`Error getting todo: ${error}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  };  

exports.getAll = async (req, res) => {
    try{
    const todos = await todoServices.getAlltodos();

    if (!todos) {
        return res.status(404).json("Tem porra nenhum aqui não, desgraça!")
    }

    res.json(todos);
} catch (err) {
    return res.status(500).json({ error: err });  
}
};

exports.add = async (req, res) => {
    try{
        const createtodo = await todoServices.addtodo(req.body);
        res.status(201).json(createtodo);
    } catch (error) {
        return res.status(500).json({ error: err });  
    }
};

exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, completed } = req.body;
      const updatedTodo = await todoServices.updatetodo(id, { title, description, completed });
      res.status(200).json(updatedTodo);
    } catch (error) {
      console.error(`Error updating todo: ${error}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  

exports.delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTodo = await todoServices.deletetodo(id);
      res.status(200).json(deletedTodo);
    } catch (error) {
      console.error(`Error deleting todo: ${error}`);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  