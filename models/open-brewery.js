const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const openBrewerySchema = new Schema({
    id: {
        type: String, 
        required: true
    }, 
    name: {
        type: String, 
        required: true
    }, 
    brewery_type: {
        type: String
    }, 
    street: {
        type: String
    }, 
    address_2: {
        type: String
    }, 
    address_3: {
        type: String
    }, 
    city: {
        type: String
    }, 
    state: {
        type: String
    }, 
    county_province: {
        type: String
    }, 
    postal_code: {
        type: String
    }, 
    country: {
        type: String
    }, 
    longitude: {
        type: String
    }, 
    latitude: {
        type: String
    }, 
    phone: {
        type: String
    }, 
    website_url: {
        type: String
    }, 
    updated_at: {
        type: Date
    }, 
    created_at: {
        type: Date
    }
}, { timestamps: true });

module.exports = mongoose.model('OpenBrewery', openBrewerySchema);
