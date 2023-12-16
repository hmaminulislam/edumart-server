const eventsModel = require("./event.model")

exports.getEvents = async (req, res) => {
    try {
        const events = await eventsModel.find();
        res.send({ events });
    } catch(error) {
        res.send({status: 401, error})
    }
    
}

exports.getEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await eventsModel.findById(id)
        res.send(event)
    } catch (error){
        res.send({status: 401, error})
    }
}