import React from 'react';
import { useParams } from 'react-router-dom';
const recipes = {
    1: {
        title: "Chow Mein",
        Ingredients: [<h6>Noodles</h6>,
        "330 g egg noodles (chow mein noodles)",
        "1 small yellow onion (thinly sliced)",
        "2 handfuls beansprouts",
        "2 handfuls garlic chives (6-inch segments)",
        "corn oil (add as needed)",
        "1 tsp sesame oil",
        "1 tsp sesame seeds",
        "1 tsp chili oil",
        <h6>Sauce</h6>,
        '1 tbsp regular soy sauce',
        '1½ tbsp dark soy sauce',
        '1 tbsp oyster sauce',
        '½ tbsp sugar',
        '½ tsp fish sauce',
        '1 tbsp water',
       
    ],
        Instructions: ["Cover your egg noodles in boiling water and allot them to soak for 1 minute. Drain and let it cook while you prepare the remaining ingredients.",
         "Slice your onion and cut the chives into 6 inch segments. I prepare the beansprouts by peeling off the ends but that is completely optional. Some grocery stores sell pre peeled beansprouts. ",
          "Mix together all the sauce ingredients into a bowl.",
        "Heat up a wok over high heat with 1 tbsp of oil to cook your onions and beansprouts for 1 minute or until begins to soften then remove.",
        "Add 1½ tbsp of oil into the high heat wok along with your egg noodles. Spread it out then cook for 1 minute on each side, adding another 1.5 tbsp of oil after you flip.",
        "Add your onions, beansprouts, chives and the sauce. Continue to mix thoroughly until there are no more bald spots in the noodles.",
        "Once the sauce is fully combined, top the noodles with sesame oil.",
    "Garnish with sesame seeds, and chili oil.",
],
    },
    2: {
        title: "Chinese dumplings",
        
        Ingredients: [{type: 'heading', text: 'For the Dough:' },
        
        "3 cups all-purpose flour", 
        "3/4 to 1 cup water",
         "A pinch of salt", 
        {type: 'heading', text: 'For the Filling:' },
        "500g ground pork ",
        "2 cups finely chopped Napa cabbage",
        "2 green onions, finely chopped",
        "3 cloves garlic, minced",
        "1 tablespoon ginger, minced ",
        "2 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "1 tablespoon Shaoxing wine (or dry sherry)",
        "1 teaspoon sugar",
        "1/2 teaspoon white pepper",
        "1/2 teaspoon salt ",
        "1 egg (optional)",
        ],
        Instructions: ["Mix 3 cups all-purpose flour and a pinch of salt. Gradually add 3/4 to 1 cup water, kneading to form a smooth dough. Let rest for 30 minutes.", 
        "Sprinkle salt over 2 cups finely chopped Napa cabbage, let sit for 10 minutes, then squeeze out excess water.",
         "Mix the cabbage with 500g ground pork, 2 finely chopped green onions, 3 minced garlic cloves, 1 tablespoon minced ginger, 2 tablespoons soy sauce, 1 tablespoon sesame oil, 1 tablespoon Shaoxing wine, 1 teaspoon sugar, 1/2 teaspoon white pepper, 1/2 teaspoon salt, and 1 optional egg.",
        "Roll the dough into small balls, flatten each into a disc, and roll into thin circles.",
         "Place 1 tablespoon of the filling in each dough circle, fold over, and pleat the edges to seal.",
          "Cook the dumplings by boiling them in water for 6-8 minutes until they float, steaming for about 10 minutes, or pan-frying until the bottoms are golden, adding water, covering, and steaming for 5-7 minutes.",
        "Serve the dumplings hot with a dipping sauce made from soy sauce, rice vinegar, sesame oil, and chili oil or paste.",
        
    ],
    },
    3: {
        title: "Hot Pot",
        
        Ingredients: [    {type: 'heading', text: 'For the Broth:' },
          
        "8 cups chicken or beef broth", 
        "2 tablespoons soy sauce",
         "2 tablespoons Shaoxing wine (or dry sherry)",
         '2-3 slices ginger',
         '3-4 cloves garlic, smashed',
         '2 green onions, cut into 2-inch pieces',
         '2 dried chili peppers (optional for spice)',
         '1 star anise',
         '1 cinnamon stick', 
         {type: 'heading', text: 'For the Dipping Sauce:' },
        "Soy sauce",
        "Sesame oil",
        "Chili oil",
        "Minced garlic",
        "Chopped green onions",
        "Fresh cilantro, chopped",
        {type: 'heading', text: 'For the Hot Pot:' },
 
        "200g thinly sliced beef or lamb",
        "200g chicken breast, thinly sliced",
        "200g shrimp, peeled and deveined",
        "200g firm tofu, cubed",
        "200g fish balls or meatballs",
        "1 package rice noodles or glass noodles",
        '1 bunch spinach or bok choy',
        '1 cup Napa cabbage, chopped',
        '1 cup Napa cabbage, chopped',
        '1 cup broccoli florets',
        '1 cup corn on the cob, cut into pieces',
        '1 cup sliced carrots',
        '1 cup lotus root, sliced (optional)',
        '1 cup bean sprouts',
        ],
        Instructions: ["In a large pot, combine 8 cups chicken or beef broth, 2 tablespoons soy sauce, 2 tablespoons Shaoxing wine, 2-3 slices ginger, 3-4 smashed garlic cloves, 2 green onions (cut into 2-inch pieces), 2 dried chili peppers (optional), 1 star anise, and 1 cinnamon stick.", 
        'Bring to a boil, then reduce to a simmer for at least 30 minutes to let the flavors meld.',
        'Set out small bowls with soy sauce, sesame oil, chili oil, minced garlic, chopped green onions, and fresh cilantro for dipping',
        'Arrange thinly sliced beef or lamb, chicken, shrimp, tofu, fish balls, noodles, spinach or bok choy, Napa cabbage, mushrooms, broccoli, corn, carrots, lotus root (optional), and bean sprouts on platters around the hot pot setup.',
        'Transfer the simmering broth to a hot pot or a portable burner set at the dining table. Keep the broth at a simmer.',
        'Each person can add their preferred ingredients to the simmering broth, cooking meats until they are done (usually just a few minutes), and vegetables until tender.',
        'Once cooked, dip the ingredients in your preferred dipping sauce and enjoy!',
    ],
    },
    4: {
        title: "Kung Pao Chicken",
        
        Ingredients: [ {type: 'heading', text: 'For the Chicken:' },
          
        "11 oz boneless & skinless chicken thighs - or chicken breast", 
        "1 teaspoon cornstarch",
         "1 tablespoon water",
         '1 teaspoon sesame oil',
         {type: 'heading', text: 'For the nuts:' }, 
     
        "⅓ cup peanuts - or cashew nuts ",
        {type: 'heading', text: 'For the sauce:' }, 

        "1 teaspoon light soy sauce",
        "1 teaspoon dark soy sauce",
        "1½ tablespoon black rice vinegar",
        "1 teaspoon Shaoxing rice wine",
        "2 teaspoon sugar",
        "2 teaspoon cornstarch",
        "1 tablespoon water",
        {type: 'heading', text: 'For stir-frying:' },
        "2 tablespoon neutral cooking oil",
        "10 dried chillies - halved and deseeded ",
        "6 stalks scallions - cut into chunks",
        "3 cloves garlic - sliced",
        "8 slices ginger",
        ],
        Instructions: ["Cut the chicken into small cubes (about 2cm) then put into a bowl.", 
        'Add cornstarch and water. Mix until no more liquid can be seen.',
        'Add sesame oil. Stir to coat the chicken evenly. Set aside.',
        'Put peanuts (or cashew nuts) into a pan. Toast over low heat. Stir from time to time to evenly heat the nuts. ',
        'Remove from the heat when lightly brown. Transfer to a plate to cool.',
        'Add all the ingredients for the sauce to a bowl. Mix well then set aside.',
        'Heat a wok over high heat. Pour in oil then add dried chillies and Sichuan pepper.',
        'As soon as you smell the fragrance from the spices, put in the marinated chicken. Stir fry for 30 seconds.',
        "Add scallions, garlic & ginger. Continue frying until the chicken completely loses its pink colour (Do not overcook. You can test its done by cutting one piece open with the spatular).",
        "Give the sauce a good stir then pour into the wok. Stir to evenly coat the chicken. Turn off the heat as soon as the sauce thickens.",
        "Stir in the toasted peanuts. Dish out then serve immediately with plain rice.",

    ],
    },
    5: {
        title: "Fried Rice",
        Ingredients: ['3⁄4 cup finely chopped onion',
        "2 1⁄2 tablespoons oil",
        "1 egg, lightly beaten (or more eggs if you like)",
        "3 drops soy sauce",
        "3 drops sesame oil",
        "8 ounces cooked lean boneless pork or 8 ounces chicken, chopped",
        "1⁄2 cup finely chopped carrot (very small)",
        "1⁄2 cup frozen peas, thawed",
        "4 cups cold cooked rice, grains separated (preferably medium grain)",
        '4 green onions, chopped',
        '2 cups bean sprouts',
        '2 tablespoons light soy sauce (add more if you like)',
       
    ],
        Instructions: ["Heat 1 tbsp oil in wok; add chopped onions and stir-fry until onions turn a nice brown color, about 8-10 minutes; remove from wok.",
         "Allow wok to cool slightly.",
          "Mix egg with 3 drops of soy and 3 drops of sesame oil; set aside.",
        "Add 1/2 tbsp oil to wok, swirling to coat surfaces, add egg mixture, working quickly, swirl egg until egg sets against wok; when egg puffs, flip egg and cook other side briefly; remove from wok, and chop into small pieces.",
        "Heat 1 tbsp oil in wok, add selected meat to wok, along with carrots, peas, and cooked onion; stir-fry for 2 minutes.",
        "Add rice, green onions, and bean sprouts, tossing to mix well, stir-fry for 3 minutes.",
        "Add 2 tbsp of light soy sauce and chopped egg to rice mixture and fold in; stir-fry for 1 minute more serve.",
    "Set out additional soy sauce on the table, if desired.",
],
    },
    10: {
        title: "Egg Trat",
        Ingredients: [{type: 'heading', text: 'For the Pastry' },
            '1 1/2 cups all-purpose flour',
        "2 tablespoons powdered sugar",
        "1/4 teaspoon salt",
        "1/2 cup unsalted butter, cold and cubed",
        "1 egg yolk",
        "2-3 tablespoons cold water",
        { type: 'heading', text: 'For the Egg Custard Filling' },
        "1/2 cup granulated sugar",
        "3/4 cup hot water",
        "1/2 cup evaporated milk",
        '3 large eggs',
        '1/2 teaspoon vanilla extract',
      
       
    ],
        Instructions: ["In a bowl, mix 1 1/2 cups all-purpose flour, 2 tablespoons powdered sugar, and 1/4 teaspoon salt. Add 1/2 cup cold, cubed unsalted butter and rub into the flour mixture until it resembles coarse crumbs.",
         "Add 1 egg yolk and 2-3 tablespoons cold water to the flour mixture, mixing until the dough comes together. Form the dough into a ball, wrap in plastic wrap, and refrigerate for 30 minutes.",
          "Dissolve 1/2 cup granulated sugar in 3/4 cup hot water, then let it cool.",
        "In a bowl, whisk together 3 large eggs, 1/2 cup evaporated milk, and 1/2 teaspoon vanilla extract. Add the cooled sugar water to the egg mixture, stirring to combine. Strain the mixture through a fine sieve to remove any lumps.",
        "Preheat the oven to 375°F (190°C). Roll out the chilled dough on a lightly floured surface to about 1/8-inch thickness. Cut out circles slightly larger than your tart molds. Press the dough circles into the tart molds, trimming any excess dough.",
        "Pour the egg custard filling into the prepared tart shells, filling them about 3/4 full.",
        "Place the tarts on a baking sheet and bake in the preheated oven for 20-25 minutes, or until the custard is set and the pastry is golden brown. To check if they are done, insert a toothpick into the custard; it should stand upright but still be slightly wobbly.",
        "Let the egg tarts cool in the molds for a few minutes before transferring them to a wire rack to cool completely.",

],
    },
    6: {
        title: "XIAO LONG BAO (SOUP DUMPLINGS)",
        Ingredients: [    {type: 'heading', text: 'For the aspic' },
            '1 medium-sized whole chicken',
        "3 stalks scallions - cut into halves",
        "6 slices ginger",
        {type: 'heading', text: 'For the wrappers:' },
        "180 g all-purpose flour",
        "60 g hot water",
        "35 g tap water ",
        {type: 'heading', text: 'For the filling:' },
        "450 g minced pork",
        "3 stalks scallions - finely chopped",
        "1 tablespoon minced ginger",
        '1 tablespoon light soy sauce',
        '1 tablespoon Shaoxing rice wine',
        '¼ teaspoon ground white pepper',
        '¼ teaspoon salt',
        '½ teaspoon sugar',
        {type: 'heading', text: 'For the dipping sauce:' },
      
        'Red rice vinegar - or black rice vinegar',
        'Ginger, julienned',
       
    ],
        Instructions: ["Preheat oven to 390°F/200°C (360°F/180°C fan-assisted).",
         "Place chicken in an oven-proof dish with scallions and ginger inside. Cover tightly and cook for 1 hour. Cool covered.",
          "Save chicken for other dishes. Refrigerate the liquid until it turns to aspic (about 4 hours).",
        " Mix hot water and flour in a bowl. Add tap water, knead into a dough, rest for 10 minutes, then knead until smooth. Rest for 30-60 minutes.",
        "Mix minced pork with seasonings. Remove chicken fat from aspic, break into pieces, and mix with pork. Refrigerate for at least 30 minutes.",
        "Roll dough into a rope, divide into 20 pieces, and press into discs. Keep covered when not in use.",
        "Roll each piece into a thin disc (12cm/4.7 inches). Dust with flour if needed.",
    "Assemble dumplings: place 35g filling in the center of each wrapper, pleat into dumplings (15-20 folds).",
    "Line steamer with parchment paper, place dumplings with space between them.",
    "Boil water, place steamer basket on top, reduce heat to medium-low, and steam for 8-10 minutes. ",
    "Serve dumplings in the steamer basket.",
    "To eat: use chopsticks to open a small hole in the dumpling, let the soup flow out, dip in sauce (vinegar with ginger), and eat in 1-2 bites.",
   ],
    },
    7: {
        title: "Jian Bing (Chinese Breakfast Crepe)",
        Ingredients: ['16 Wonton wrappers adjust the amount according to the number of crepes',
        "Oil for frying",
        "200 grams of plain flour",
        "00 grams of cornmeal",
        "600 grams of water divided into two: 300g + 300g",
        "88 egg beaten",
        "A dash of black sesame seeds",
        "Oil spray",
        "Soybean paste spread thinly onto the crepe",
        '½ cup of chopped green onions',
        '16 pieces of lettuce',
        '16 pieces of ham',
       
    ],
        Instructions: ["Slice two cuts in the center of the wonton wrappers. ",
         "Heat oil in the pan. Fry the wonton wrappers at 160°C until golden brown and crispy. Set aside.",
          "For the batter, mix plain flour, cornmeal, and 300 grams of water until you get a thick consistency. Then, add another 300 grams of water and stir until the batter becomes thinner.",
        "Pour the batter into a heated non-stick pan, spread evenly using a batter spreader, and let it set. Cook over medium-low heat.",
        "When the batter solidifies, add a beaten egg and spread evenly.",
        "Sprinkle black sesame seeds on top and spray some oil.",
        "Carefully flip the crepe to the other side.",
    "Brush the surface with soybean paste.",
    'Add your filling: chopped green onions, lettuce, ham, and fried wonton wrappers.',
    'Finally, the Jian Bing is carefully rolled up and then sliced into two pieces, making it easier to eat and enjoy on the go.',
],
    },
    8: {
        title: "Biang Biang Noodles",
        Ingredients: [{type: 'heading', text: 'For the Noodles' },

            '2 cups all-purpose flour',
        "1/2 teaspoon salt",
        {type: 'heading', text: 'For the Sauce (Optional)' },
     
        "2 tablespoons soy sauce",
        "1 tablespoon dark soy sauce (for color)",
        "1 tablespoon Chinese black vinegar",
        "1 tablespoon chili oil (adjust to taste)",
        "1 teaspoon sugar",
        "2 cloves garlic, minced",
        "1 tablespoon green onions, finely chopped",
        '1 teaspoon sesame oil (optional)',
        {type: 'heading', text: 'For Serving (Optional)' },
        'Chopped green onions',
        'Toasted sesame seeds',
        'Sliced cucumbers or other vegetables',
       
    ],
        Instructions: ["Mix 2 cups all-purpose flour, 3/4 cup water, and 1/2 teaspoon salt until a dough forms. Knead until smooth and let it rest for 30 minutes.",
        "Divide the dough into two portions. Roll each portion into a thin, rectangular shape.",
        "Use your hands to stretch and elongate the dough until it becomes very thin and wide.",
        "Bring a large pot of water to a boil and add a pinch of salt.",
        "Carefully add the stretched dough to the boiling water and cook for 3-4 minutes until tender but chewy.",
        "Drain the noodles and rinse under cold water to stop the cooking process. Set aside.",
        "Optional: Mix soy sauce, dark soy sauce, Chinese black vinegar, chili oil, sugar, minced garlic, chopped green onions, and sesame oil for the sauce.",
       "Place the cooked noodles in serving bowls and pour the sauce over them. Toss to coat evenly.",
       "Garnish with chopped green onions, toasted sesame seeds, and sliced vegetables if desired.",
       "Serve immediately and enjoy your homemade Biang Biang Noodles!",
    ],
    },
    9: {
        title: "Mapo Tofu",
        Ingredients: ['1 block (about 14 oz) soft tofu, cut into cubes',
        "200g ground pork or beef",
        "2 tablespoons chili bean paste (doubanjiang)",
        "1 tablespoon soy sauce",
        "1 tablespoon Shaoxing wine (or dry sherry)",
        "1 teaspoon sugar",
        "2 cloves garlic, minced",
        "1 teaspoon ginger, minced",
        "2 green onions, chopped",
        '1 tablespoon Sichuan peppercorns, crushed (optional for numbing flavor)',
        '2 tablespoons vegetable oil',
        '1 cup chicken or vegetable broth',
       "1 tablespoon cornstarch mixed with 2 tablespoons water (cornstarch slurry)",
       "Salt to taste",
       "Chopped green onions for garnish",
    ],
        Instructions: ["Heat vegetable oil in a wok or large skillet over medium heat.",
         "Add minced garlic, minced ginger, chopped green onions, and crushed Sichuan peppercorns (if using). Stir-fry for about 1-2 minutes until fragrant.",
          "Add ground pork or beef to the wok. Break it up with a spatula and cook until browned.",
        'Stir in chili bean paste (doubanjiang) and cook for another minute.',
        'Pour in soy sauce, Shaoxing wine (or dry sherry), and sugar. Stir well to combine.',
        'Add cubed tofu to the wok and gently stir to coat with the sauce. Be careful not to break the tofu cubes.',
        'Pour in chicken or vegetable broth and bring to a simmer. Let it cook for about 5-7 minutes to allow the flavors to meld.',
        'Stir in the cornstarch slurry to thicken the sauce. Cook for another minute until the sauce has thickened to your desired consistency.',
        'Taste and adjust seasoning with salt if needed.',
        'Remove from heat and transfer Mapo Tofu to a serving dish.',
        'Garnish with chopped green onions.',
        'Serve hot with steamed rice.',
],
    },
    // Add more recipes as needed
};

function ChineseRecipes() {
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

export default ChineseRecipes