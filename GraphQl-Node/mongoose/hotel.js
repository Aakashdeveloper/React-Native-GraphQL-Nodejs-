import mongoose from 'mongoose';

var Schema = mongoose.Schema;

// create a schema
var HotelSchema = new Schema({
        id: Number,
        name: String,
        available: Number,
        city:String,
        cover: String
}, {collection:"hotels"});

var Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel
