const CrudRepository = require('./crud-repository')
const {City} = require('../models')

class CityRepository extends CrudRepository{
    constructor(){
        super(City); // Using super keyword we can call our parent class constructor
    }
}

module.exports = CityRepository;