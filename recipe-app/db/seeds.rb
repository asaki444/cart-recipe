# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cereal = Ingredient.create({title: 'cereal', amount: 1, measurement: 'cup'})
milk = Ingredient.create({title: 'milk', amount: 1, measurement: 'cup' })
instruction = Instruction.create(instruction: 'pour cereal into bowl and add milk')

first_recipe = Recipe.create({title: 'Cereal and Milk', servings: 1, origin: 'American', instruction_id: instruction.first_recipe})