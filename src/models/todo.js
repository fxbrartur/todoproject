const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
    id: {
        type: Number,
        default: function() {
            return this.constructor.getNextId();
        }
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        required: false,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

// Static method to get the next id value
todoSchema.statics.getNextId = async function() {
    const lastTodo = await this.findOne({}, {}, { sort: { 'created_at' : -1 } });
    return lastTodo ? lastTodo.id + 1 : 1;
};

module.exports = todo = mongoose.model("todos", todoSchema);
