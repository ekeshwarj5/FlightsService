const CrudRepository = require('./crud-repository')
const {Airport} = require('../models')

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport); // Using super keyword we can call our parent class constructor
    }
}

module.exports = AirportRepository;