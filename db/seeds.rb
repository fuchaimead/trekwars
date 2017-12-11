# Star Wars Locations
50.times do 
  Location.create(nerd_type: 'starwars', name: Faker::StarWars.planet)
end
# Star Wars Characters 
50.times do 
  Character.create(nerd_type: 'starwars', name: Faker::StarWars.character)
end

# Star Trek Locations
50.times do 
  Location.create(nerd_type: 'startrek', name: Faker::StarTrek.location)
end

# Stark Trek Characters
50.times do 
  Character.create(nerd_type: 'startrek', name: Faker::StarTrek.character)
end

