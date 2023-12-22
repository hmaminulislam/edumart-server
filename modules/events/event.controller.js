const eventsModel = require("./event.model")

// all events find from database
exports.getEvents = async (req, res) => {
    try {
        const events = await eventsModel.find();
        res.send({ events });
    } catch(error) {
        res.send({status: 401, error})
    }
    
}

// single event find by id from database
exports.getEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await eventsModel.findById(id)
        res.send(event)
    } catch (error){
        res.send({status: 401, error})
    }
}