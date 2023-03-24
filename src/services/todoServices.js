const todo = require("../models/todo")


module.exports = class todoServices {

    static async gettodo(query) {
        try {
          const todoItem = await todo.findOne(query);
          if (!todoItem) {
            throw new Error('Todo not found');
          }
          return todoItem;
        } catch (error) {
          console.error(`Error getting todo: ${error}`);
          throw error;
        }
      }      
    
    static async getAlltodos() {
        try {
            const alltodos = await todo.find()
            return alltodos;
        }catch (error) {
            console.log(`o b.o no get all todos foi: ${error}`);
        }
    }

    static async addtodo(data) {

        try {
            const nextId = await todo.getNextId();
            const newtodo = {
                id: nextId,
                title: data.title,
                description: data.description,
                completed: data.completed,
                created_at: data.created_at,
            };
            const response = await new todo(newtodo).save();
            return response;
        }catch (error) {
            console.log(`o b.o no create todo foi: ${error}`)
            }
    }

    static async updatetodo(id, data) {
        try {
            const response = await todo.findOneAndUpdate(
                { id: id },
                { $set: { title: data.title, description: data.description, completed: data.completed } },
                { new: true }
            );
            return response;
        } catch (error) {
            console.log(`Error updating todo: ${error}`);
        }
    }

    static async deletetodo(id) {
        try {
            const response = await todo.findOneAndDelete({ id: id });
            return response;
        } catch (error) {
            console.log(`Error deleting todo: ${error}`);
        }
    }
};
