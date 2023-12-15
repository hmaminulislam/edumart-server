const eventsModel = require("./event.model")

exports.getEvents = async (req, res) => {
    try {
        const events = await eventsModel.find();
        res.send({ events });
    } catch {
        res.send({status: 404})
    }
    
}

exports.getEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await eventsModel.findById(id)
        res.send(event)
    } catch (error){
        res.send({status: 404, error})
    }
}