const { Schema, default: mongoose } = require("mongoose");

const eventsSchema = new Schema({
  name: {type:String, required: true},
  img: {type:String, required: true},
  location: {type:String, required: true},
  date: {type:String, required: true},
  time: {type:String, required: true},
  organizer: {
    name: {type:String, required: true},
    phone: {type:String, required: true},
    email: {type:String, required: true},
    website: {type:String, required: true},
  },
  venue: {
    name: {type:String, required: true},
    phone: {type:String, required: true},
    website: {type:String, required: true},
  },
  eventAbout: {type:String, required: true},
  eventDuring: {type:String, required: true},
  programs: [{ title: {type:String, required: true} }],
  mapDirection: {type:String, required: true},
});

const Events = mongoose.model('Events', eventsSchema)

module.exports = Events;
