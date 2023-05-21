const router = require('express').Router()
const Person = require('../models/Person')

router.get('/', async (req,res) => {
  try {
    const people = await Person.find()
    res.json(people)
  } catch (error) {
    console.log('error retrieving people', error)
    res.status(404).json({ message: 'error retrieving people' })
  }
})

router.get('/:id', async (req,res) => {
  const { id } = req.params
  try {
    const person = await Person.findById(id)
    res.json(person)
  } catch (error) {
    console.log('error retrieving people', error)
    res.json({ message: `error retrieving person with id ${id}` })
  }
})

router.post('/', async (req, res) => {
  try {
    const person = await new Person(req.body).save()
    res.json(person)
  } catch (error) {
    console.log('error retrieving people', error)
    res.json({ message: 'error creating person' })
  }
})

module.exports = router