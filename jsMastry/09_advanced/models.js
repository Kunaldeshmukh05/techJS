const mongoose=require('mongoose');
db=mongoose.connection.db;

const schema = new mongoose.Schema({
    id: { type: String, required: true },
    date_collected: { type: Date, required: true },
    retailer_type: { type: String, required: true },
    retailer_detail: { type: String, required: true },
    food_type: { type: String, required: true },
    food_detail: { type: String, required: true },
    label_type: { type: String, required: true },
    label_language: { type: String, required: true },
    label_date: { type: Date, required: true },
    approximate_dollar_value: { type: Number, required: true },
    image_id: { type: String, required: true },
    collection_lat: { type: Number, required: true },
    collection_long: { type: Number, required: true }
},{timestamps:true})

const resturantModel = mongoose.model('resturants',schema);

module.exports=resturantModel;