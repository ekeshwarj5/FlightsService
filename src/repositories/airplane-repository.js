const CrudRepository = require('./crud-repository')
const {Airplane} = require('../models')

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane); // Using super keyword we can call our parent class constructor
    }
}

module.exports = AirplaneRepository;