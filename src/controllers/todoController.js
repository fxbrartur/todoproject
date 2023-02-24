

exports.get = (req, res) => {
    const id = req.params.id;
    console.log("Getou um");
    res.send(`Success my friend, getou id=${id}`);
}

exports.getAll = (req, res) => {
    console.log("Getou tudo");
    res.send("Success my friend, getou tudo alright!");
}

exports.add = (req, res) => {
    console.log("Adicionado carai");
    res.send("Success my friend, botou alright!");
}

exports.update = (req, res) => {
    console.log("Atualizou carai");
    res.send("Success my friend, atualizou alright!");
}

exports.delete = (req, res) => {
    console.log("Apagou, já era, esquece..");
    res.send("Success my friend, apagou rastros alright!");
}