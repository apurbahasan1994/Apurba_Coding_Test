const UserInput = require('../models/userInput')
exports.addNewUserInput = (req, res, next) => {
    const userInput = req.body;
    const input = new UserInput({
        input: userInput.input
    });

    input.save().then((result) => {
        res.status(200).json({ _id: result._id });
    }).catch(err => {
        res.status(404).json({ message: "Error" });
        throw err
    });
}
exports.getUserMeassage = (req, res, next) => {
    res.json({ message: "coding test works" });
}