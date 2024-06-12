import React from 'react'
import { useParams } from 'react-router-dom'
const recipes={
   1:{ title:["Khao Pad"],
    Ingredients:["3 Tablespoons shallot chopped",
        "2 cloves garlic chopped",
        "2 eggs",
        "1 Tablespoon fish sauce",
        "1 Tablespoon thin soy sauce",
        "3 Tablespoons green onions chopped",
        "3 Tablespoons cilantro chopped",
        "1 dash of ground white pepper",
        "lime wedges",

    ],
    Instructions:[
        " Chop the garlic and shallots finely. Slice the green onions into small rounds and coarsely chop the cilantro leaves. Have all other ingredients nearby so that they can be added quickly.",
        "Heat a wok or pan over medium high heat. Add a tablespoon or so of mild-flavored oil. Then saute the garlic and shallots until they are aromatic, and the shallots have become translucent.",
        "Add the cooked jasmine rice to the pan. Stir to mix the garlic and shallots into the rice. Then add your fish sauce and Thai thin soy sauce and continue to mix everything together.",
        "Move the seasoned rice to the sides of the pan. Add a little more oil to the middle of the pan and allow it to heat. Then add your eggs and scramble them. Once cooked, mix into the rice.",
        "Add the green onion and cilantro. Mix to combine these herbs with the rice, then immediately take off the heat. If left on the heat for too long, the herbs will turn brown and wilt.",
        "Plate your Fried Rice and serve with a side of Nam Pla Prik, Lime Wedges, and Ground White Pepper. Cucumbers or other crunchy vegetables would also be great accompaniments.",
    ],
},
2: {
    title: "Pad Thai",
    Ingredients: [
        "8 oz rice noodles",
        "2 tbsp vegetable oil",
        "2 cloves garlic (minced)",
        "8 oz chicken breast (sliced into thin strips)",
        "2 eggs (lightly beaten)",
        "1 cup bean sprouts",
        "1/2 cup chopped green onions",
        "1/4 cup chopped peanuts",
        "Lime wedges (for serving)",
        "Cilantro leaves (for garnish)",
        "Salt and pepper to taste",
        "Pad Thai sauce:",
        "3 tbsp fish sauce",
        "3 tbsp tamarind paste",
        "2 tbsp brown sugar",
        "1 tbsp soy sauce",
        "1/2 tsp chili flakes (optional)",
    ],
    Instructions: [
        "Cook rice noodles according to package instructions, then drain and set aside.",
        "In a small bowl, mix together the fish sauce, tamarind paste, brown sugar, soy sauce, and chili flakes to make the Pad Thai sauce. Set aside.",
        "Heat vegetable oil in a large pan or wok over medium-high heat. Add minced garlic and sauté until fragrant.",
        "Add sliced chicken breast to the pan and season with salt and pepper. Cook until chicken is no longer pink.",
        "Push chicken to one side of the pan and add beaten eggs to the other side. Scramble the eggs until cooked, then mix with the chicken.",
        "Add cooked rice noodles to the pan and pour the Pad Thai sauce over the noodles. Toss everything together until noodles are well coated with the sauce.",
        "Add bean sprouts and chopped green onions to the pan. Stir-fry for a few minutes until bean sprouts are slightly wilted.",
        "Taste and adjust seasoning if needed. Add more soy sauce or brown sugar for sweetness if desired.",
        "Serve Pad Thai hot, garnished with chopped peanuts, cilantro leaves, and lime wedges on the side.",
    ],
},
3: {
    title: "Som Tum (Thai Green Papaya Salad)",
    Ingredients: [
        "2 cups shredded green papaya",
        "1/4 cup cherry tomatoes (halved)",
        "2-3 Thai bird's eye chilies (adjust according to spice preference)",
        "2 cloves garlic",
        "1-2 tbsp roasted peanuts",
        "2 tbsp fish sauce",
        "1-2 tbsp palm sugar (or brown sugar)",
        "1-2 tbsp lime juice",
        "2 tbsp dried shrimp (optional)",
        "Fresh cilantro leaves (for garnish)",
        "Fresh mint leaves (for garnish)",
        "Fresh basil leaves (for garnish)",
    ],
    Instructions: [
        "In a mortar and pestle, crush Thai bird's eye chilies and garlic into a paste. If you don't have a mortar and pestle, you can use a food processor.",
        "Add roasted peanuts to the mortar and pestle or food processor and crush/grind lightly. Alternatively, you can chop the peanuts with a knife.",
        "Add shredded green papaya, cherry tomatoes, and dried shrimp (if using) to a mixing bowl.",
        "Add the chili-garlic paste, crushed peanuts, fish sauce, palm sugar, and lime juice to the bowl with the papaya and tomatoes.",
        "Using a spoon or tongs, mix all the ingredients together until well combined and the flavors are evenly distributed.",
        "Taste the salad and adjust the seasoning as needed. Add more fish sauce for saltiness, palm sugar for sweetness, or lime juice for acidity.",
        "Transfer the Som Tum to a serving plate or bowl.",
        "Garnish the salad with fresh cilantro leaves, mint leaves, and basil leaves for added freshness and flavor.",
        "Serve Som Tum immediately as a refreshing appetizer or side dish.",
    ],
},
4: {
    title: "Tom Yum Goong (Hot Soup with Shrimp)",
    Ingredients: [
        "4 cups chicken or shrimp stock",
        "200g shrimp (cleaned and deveined)",
        "4-5 kaffir lime leaves",
        "2 stalks lemongrass (cut into 2-inch pieces and bruised)",
        "3-4 slices galangal or ginger",
        "3-4 Thai bird's eye chilies (adjust according to spice preference)",
        "1 cup mushrooms (straw mushrooms or button mushrooms)",
        "2 tomatoes (quartered)",
        "1 onion (cut into wedges)",
        "2 tbsp fish sauce",
        "2 tbsp lime juice",
        "1 tbsp palm sugar or brown sugar",
        "Fresh cilantro leaves (for garnish)",
        "Fresh Thai basil leaves (for garnish)",
    ],
    Instructions: [
        "In a pot, bring the chicken or shrimp stock to a boil.",
        "Add kaffir lime leaves, lemongrass, galangal or ginger, and Thai bird's eye chilies to the boiling stock. Let it simmer for 5-10 minutes to infuse the flavors.",
        "Add shrimp to the pot and cook until they turn pink and opaque, about 2-3 minutes.",
        "Add mushrooms, tomatoes, and onion to the soup and let them cook for another 2-3 minutes until softened.",
        "Season the soup with fish sauce, lime juice, and palm sugar or brown sugar. Adjust the seasoning according to your taste preference.",
        "Simmer the soup for a few more minutes to allow the flavors to meld together.",
        "Remove the soup from heat and discard the lemongrass, galangal or ginger slices, and Thai bird's eye chilies if you prefer less spice.",
        "Garnish the Tom Yum Goong with fresh cilantro leaves and Thai basil leaves for added flavor and aroma.",
        "Serve the soup hot as a comforting and flavorful appetizer or main dish.",
    ],
},
5: {
    title: "Yum Nua (Thai Beef Salad)",
    Ingredients: [
        "300g beef steak (sirloin or flank steak)",
        "2 shallots (thinly sliced)",
        "1/4 cup chopped cilantro",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped green onions",
        "1-2 Thai bird's eye chilies (finely chopped, adjust to spice preference)",
        "1 tomato (sliced into wedges)",
        "1 cucumber (sliced)",
        "2 tbsp fish sauce",
        "2 tbsp lime juice",
        "1 tbsp soy sauce",
        "1 tbsp palm sugar or brown sugar",
        "Salt to taste",
        "Lettuce leaves (for serving)",
        "Roasted peanuts (for garnish)",
    ],
    Instructions: [
        "Season the beef steak with salt and grill or pan-sear until cooked to your desired doneness. Let it rest for a few minutes before slicing thinly.",
        "In a large bowl, combine the sliced beef, shallots, cilantro, mint leaves, green onions, Thai bird's eye chilies, tomato wedges, and cucumber slices.",
        "In a separate bowl, mix fish sauce, lime juice, soy sauce, and palm sugar or brown sugar until the sugar dissolves. Adjust the seasoning to your taste.",
        "Pour the dressing over the beef and vegetable mixture. Toss well to coat everything evenly with the dressing.",
        "Arrange lettuce leaves on a serving plate and place the dressed beef salad on top of the lettuce.",
        "Garnish the salad with roasted peanuts for added crunch and flavor.",
        "Serve the Yum Nua immediately as a refreshing and flavorful appetizer or main dish.",
    ],
},
6: {
    title: "Thai Gaeng Daeng (Red Curry)",
    Ingredients: [
        "400g chicken, beef, or tofu (cut into bite-sized pieces)",
        "2 tbsp red curry paste",
        "1 can (400ml) coconut milk",
        "1 cup chicken or vegetable broth",
        "1 tbsp fish sauce",
        "1 tbsp palm sugar or brown sugar",
        "1 cup mixed vegetables (such as bell peppers, bamboo shoots, and eggplant)",
        "Thai basil leaves (optional, for garnish)",
        "Red chili slices (optional, for garnish)",
        "Cooked jasmine rice, for serving"
    ],
    Instructions: [
        "Heat a large pan or wok over medium heat. Add 2 tablespoons of red curry paste and stir-fry for about 1 minute until fragrant.",
        "Pour in 1 can of coconut milk and 1 cup of chicken or vegetable broth. Stir well to combine the curry paste with the liquids.",
        "Add the chicken, beef, or tofu to the pan. Cook until the protein is almost fully cooked.",
        "Season with 1 tablespoon of fish sauce and 1 tablespoon of palm sugar or brown sugar. Adjust the seasoning according to your taste.",
        "Add the mixed vegetables to the curry. Stir and let them cook until they are tender but still slightly crisp.",
        "Simmer the curry for a few more minutes until everything is well combined and the protein is fully cooked.",
        "Remove the curry from heat. If desired, garnish with Thai basil leaves and red chili slices for added flavor and spice.",
        "Serve the Gaeng Daeng hot with cooked jasmine rice on the side."
    ]
},
7: {
    title: "Thai Kaeng Lueang (Yellow Curry)",
    Ingredients: [
        "400g chicken, beef, or tofu (cut into bite-sized pieces)",
        "2 tbsp yellow curry paste",
        "1 can (400ml) coconut milk",
        "1 cup chicken or vegetable broth",
        "1 tbsp fish sauce",
        "1 tbsp palm sugar or brown sugar",
        "1 cup mixed vegetables (such as carrots, potatoes, and onions)",
        "Kaffir lime leaves (optional, for garnish)",
        "Red chili slices (optional, for garnish)",
        "Cooked jasmine rice, for serving"
    ],
    Instructions: [
        "Heat a large pan or wok over medium heat. Add 2 tablespoons of yellow curry paste and stir-fry for about 1 minute until fragrant.",
        "Pour in 1 can of coconut milk and 1 cup of chicken or vegetable broth. Stir well to combine the curry paste with the liquids.",
        "Add the chicken, beef, or tofu to the pan. Cook until the protein is almost fully cooked.",
        "Season with 1 tablespoon of fish sauce and 1 tablespoon of palm sugar or brown sugar. Adjust the seasoning according to your taste.",
        "Add the mixed vegetables to the curry. Stir and let them cook until they are tender but still slightly crisp.",
        "Simmer the curry for a few more minutes until everything is well combined and the protein is fully cooked.",
        "Remove the curry from heat. If desired, garnish with kaffir lime leaves and red chili slices for added flavor and spice.",
        "Serve the Kaeng Lueang hot with cooked jasmine rice on the side."
    ]
},
8: {
    title: "Pad Kra Pao Moo (Stir-Fried Basil Pork)",
    Ingredients: [
        "300g minced pork",
        "2 tbsp vegetable oil",
        "3 cloves garlic (minced)",
        "2-3 Thai bird's eye chilies (chopped, adjust to taste)",
        "1 cup holy basil leaves (or Thai basil leaves)",
        "1 tbsp oyster sauce",
        "1 tbsp soy sauce",
        "1 tsp fish sauce",
        "1 tsp sugar",
        "1/4 cup chicken or vegetable broth",
        "1 egg (optional)",
        "Cooked jasmine rice, for serving"
    ],
    Instructions: [
        "Heat 2 tablespoons of vegetable oil in a wok or pan over medium heat.",
        "Add 3 cloves of minced garlic and 2-3 chopped Thai bird's eye chilies. Stir-fry until fragrant.",
        "Add 300g of minced pork to the wok. Break up any clumps and stir-fry until the pork is cooked through.",
        "In a small bowl, mix together 1 tablespoon of oyster sauce, 1 tablespoon of soy sauce, 1 teaspoon of fish sauce, and 1 teaspoon of sugar.",
        "Pour the sauce mixture into the wok with the pork. Stir well to coat the pork evenly.",
        "Add 1/4 cup of chicken or vegetable broth to the wok. Stir and let it simmer for a minute or two.",
        "Add 1 cup of holy basil leaves (or Thai basil leaves) to the wok. Stir-fry until the basil leaves wilt and release their aroma.",
        "If using, crack an egg into the wok and quickly stir to mix with the pork and basil.",
        "Remove the wok from heat. Serve the Pad Kra Pao Moo hot with cooked jasmine rice.",
        "Optional: Garnish with additional basil leaves and a fried egg on top for extra flavor and presentation."
    ]
},
9: {
    title: "Khao Soi (Coconut Curry Noodle Soup)",
    Ingredients: [
        "500g chicken thighs (bone-in, skin-on)",
        "400ml coconut milk",
        "2 cups chicken broth",
        "3 tbsp red curry paste",
        "2 tbsp vegetable oil",
        "2 tbsp soy sauce",
        "1 tbsp fish sauce",
        "1 tbsp palm sugar (or brown sugar)",
        "1 onion (sliced)",
        "3 cloves garlic (minced)",
        "1-inch piece of ginger (sliced)",
        "1/4 cup chopped cilantro (for garnish)",
        "200g fresh egg noodles (or dried egg noodles)"
    ],
    Instructions: [
        "In a large pot, heat vegetable oil over medium heat.",
        "Add minced garlic, sliced ginger, and sliced onion. Sauté until fragrant.",
        "Add red curry paste to the pot and stir-fry for a minute until aromatic.",
        "Add chicken thighs to the pot and brown them on all sides.",
        "Pour in chicken broth and coconut milk. Stir to combine.",
        "Season with soy sauce, fish sauce, and palm sugar. Stir well.",
        "Bring the soup to a boil, then reduce heat to low and simmer for about 30-40 minutes until the chicken is tender and cooked through.",
        "While the soup is simmering, cook the fresh egg noodles according to package instructions. Drain and set aside.",
        "Remove the chicken thighs from the soup and shred the meat off the bones. Discard bones and skin.",
        "Return shredded chicken to the soup and stir to combine.",
        "Taste the soup and adjust seasoning if needed.",
        "To serve, divide the cooked noodles into bowls and ladle the hot Khao Soi soup over the noodles.",
        "Garnish with chopped cilantro and serve hot."
    ]
},
10: {
    title: "Thai Laab- Spicy Minced Meat Salad",
    Ingredients: [
        "500g ground chicken, pork, or beef",
        "2 tablespoons uncooked white rice",
        "1 tablespoon vegetable oil",
        "3 cloves garlic, minced",
        "2 shallots, thinly sliced",
        "2 green onions, chopped",
        "1/4 cup fresh mint leaves",
        "1/4 cup fresh cilantro, chopped",
        "2 tablespoons fish sauce",
        "2 tablespoons lime juice",
        "1 tablespoon roasted chili powder",
        "1 teaspoon sugar",
        "1-2 fresh Thai chilies, chopped (optional, for extra heat)",
        "1 head of lettuce or cabbage leaves (for serving)"
    ],
    Instructions: [
        "In a dry skillet over medium heat, toast the uncooked white rice, stirring frequently, until golden brown. Remove from heat and allow to cool, then grind into a coarse powder using a mortar and pestle or spice grinder.",
        "In a large pan, heat vegetable oil over medium heat. Add minced garlic and cook until fragrant.",
        "Add the ground meat to the pan and cook until no longer pink, breaking it up into small pieces.",
        "Once the meat is cooked, remove the pan from heat. Stir in the fish sauce, lime juice, roasted chili powder, sugar, and ground toasted rice.",
        "Add the shallots, green onions, mint leaves, cilantro, and fresh Thai chilies (if using). Mix well to combine.",
        "Taste and adjust seasoning if necessary, adding more fish sauce, lime juice, or chili powder to taste.",
        "Serve the Laab with lettuce or cabbage leaves. Scoop the Laab onto the leaves and eat as a wrap."
    ]
}


}

function ThaiRecipe() {
    const { id } = useParams();
    const recipe = recipes[id];

    return (
        <div className="recipe-container">
            {recipe ? (
                <>
                    <h1>{recipe.title}</h1>
                    <div className="recipe-section">
                        <h2>Ingredients:</h2>
                        <ul>
                            {recipe.Ingredients.map((ingredient, index) => (
                                ingredient.type === 'heading' ? (
                                    <h6 key={index}>{ingredient.text}</h6>
                                ) : (
                                    <li key={index}>{ingredient}</li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="recipe-section">
                        <h2>Instructions:</h2>
                        <ol>
                            {recipe.Instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </>
            ) : (
                <p>Recipe not found</p>
            )}
        </div>
    );
}

export default ThaiRecipe