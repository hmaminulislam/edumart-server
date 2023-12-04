const eventsModel = require("./event.model")

exports.getEvents = async (req, res) => {
    try {
        const query = {};
        const events = await eventsModel.find();
        res.send({ events });
    } catch {
        res.send({status: 404})
    }
    
}