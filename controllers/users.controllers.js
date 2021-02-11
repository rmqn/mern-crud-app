const UsersModels = require("../models/users.models");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readUser = (req, res) => {
    UsersModels.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    }).sort({ createdAt: -1 });
};

module.exports.createUser = async (req, res) => {
    const newUser = new UsersModels({
        name: req.body.name,
        username: req.body.username
    });
    try {
        const user = await newUser.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);

    const updatedAll = {
        name: req.body.name,
        username: req.body.username
    };

    UsersModels.findByIdAndUpdate(
        req.params.id,
        { $set: updatedAll },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    );
};


module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);

    UsersModels.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Delete error : " + err);
    });
}