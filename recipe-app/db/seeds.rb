# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

first_recipe = Recipe.create({title: 'Cereal and Milk', servings: 1, origin: 'American'})
cereal = Ingredient.create({title: 'cereal', amount: 1, measurement: 'cup', recipe: Recipe })
milk = Ingredient.create({title: 'milk', amount: 1, measurement: 'cup', recipe: Recipe })