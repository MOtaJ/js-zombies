const chai = require('chai')

chai.should();

const Zombies = require ('../zombies.js')

describe ('Item', () => {

  let item;

  beforeEach(() => {
    item = new Zombies.item('name');
  })

  it('should be a class', () => {
    item.should.be.a.function;
  })

  it('should have a name', () => {
    item.should.have.property('name');
  })

})

describe ('Weapon', () => {

  let weapon;

  beforeEach(() => {
    weapon = new Zombies.weapon('name', 'damage');
  })

  it('should have a class', () => {
    weapon.should.be.a.function;
  })

  it('should be instance of item', () => {
    weapon.should.be.instanceof(Zombies.item)
  })

  it('should have a name', () => {
    weapon.should.have.property('name')
  })

  it('should have damage property', () => {
    weapon.should.have.property('damage')
  })

  it('weapon should be named longsword', () => {
    var longsword = new Zombies.weapon('Longsword', 150)
  })

})

describe ('Food', () => {

  let food;

  beforeEach(() => {
    food = new Zombies.food('name', 'energy');
  })

  it('should have a class', () => {
    food.should.be.a.function;
  })

  it('should be an instance of item', () => {
    food.should.be.an.instanceof(Zombies.item);
  })

  it('should have a name', () => {
    food.should.have.property('name');
  })

  it('should have an energy property', () => {
    food.should.have.property('energy');
  })

  it('food should be name Tomato', () => {
    var tomato = new Zombies.food('Tomato', 50)
    tomato.name.should.equal('Tomato');
  })

  it('food should restore energy', () => {
    var tomato = new Zombies.food('Tomato', 50)
    tomato.energy.should.equal(50);
  })
})

describe ('Player', () => {

  let player;

  beforeEach(() => {
    player = new Zombies.player('name', 'health', 'strength', 'speed');
  })

  it('should have a class', () => {
    player.should.be.a.function;
  })

  it('should have a name', () => {
    player.should.have.property('name');
  })

  it('should have health', () => {
    player.should.have.property('health');
  })

  it('should have strength', () => {
    player.should.have.property('strength');
  })
})










