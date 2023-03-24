const mongoose = require("mongoose");

const user = "tola";
const pass = "rola";
const database = "romba";
const servername = "cluster0.rola.mongodb.net";

module.exports = {
    init : () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${pass}@${servername}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                 // useFindAndModify: true,
                 // useCreateIndex: true,
                }
            )
            .then((res) => console.log(`Xuxexu no banco: ${res}`))
            .catch((err) => console.log(`Deu b.o no banco: ${err}`))
    },
};
