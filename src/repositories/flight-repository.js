const CrudRepository = require('./crud-repository')
const {Flight} = require('../models')

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight); // Using super keyword we can call our parent class constructor
    }
}

module.exports = FlightRepository;