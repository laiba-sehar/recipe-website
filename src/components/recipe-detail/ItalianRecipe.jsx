import React from 'react'
import { useParams } from 'react-router-dom'
const recipes = {
   1: {
        title: "Italian Cacio e Pepe",
        Ingredients: [
            "200 grams spaghetti",
            "1 cup Pecorino Romano cheese, finely grated",
            "2 teaspoons freshly ground black pepper",
            "Salt to taste",
            "1-2 tablespoons olive oil"
        ],
        Instructions: [
            "Bring a large pot of salted water to a boil. Add the spaghetti and cook until al dente according to the package instructions.",
            "While the pasta is cooking, heat the olive oil in a large skillet over medium heat. Add the freshly ground black pepper and toast it for about 1 minute until fragrant.",
            "Reserve about 1 cup of pasta water and then drain the spaghetti.",
            "Add the cooked spaghetti to the skillet with the toasted pepper. Toss to coat the pasta in the oil and pepper.",
            "Reduce the heat to low and add the finely grated Pecorino Romano cheese. Gradually add the reserved pasta water, a little at a time, tossing the pasta constantly until a creamy sauce forms. The starch in the pasta water helps to create the sauce.",
            "Continue to toss and stir the pasta until the cheese is melted and the sauce evenly coats the spaghetti. If the sauce is too thick, add a bit more pasta water until the desired consistency is achieved.",
            "Season with salt to taste and serve immediately, garnished with additional Pecorino Romano cheese and freshly ground black pepper if desired."
        ]
    },
    2: {
        title: "Canederli",
        Ingredients: [
            "300 grams stale bread, cubed",
            "200 ml milk",
            "2 eggs",
            "100 grams speck (or pancetta), finely chopped",
            "1 small onion, finely chopped",
            "2 tablespoons parsley, chopped",
            "2 tablespoons chives, chopped",
            "Salt and pepper to taste",
            "Flour, for dusting",
            "Butter, for sautéing",
            "Parmesan cheese, grated (optional)"
        ],
        Instructions: [
            "Place the cubed bread in a large bowl. Pour the milk over the bread and let it soak for about 30 minutes, until the bread is soft.",
            "In a skillet, sauté the finely chopped onion and speck (or pancetta) in a bit of butter until the onion is translucent and the speck is slightly crispy.",
            "Add the sautéed onion and speck to the soaked bread mixture. Mix well.",
            "Add the eggs, chopped parsley, chives, salt, and pepper to the bread mixture. Mix everything together until well combined.",
            "If the mixture is too wet, add a little flour to help bind it. The mixture should be moist but hold together when formed into balls.",
            "With wet hands, form the mixture into balls about the size of a golf ball.",
            "Bring a large pot of salted water to a gentle boil. Carefully drop the Canederli into the boiling water and cook for about 15-20 minutes, until they float to the surface and are cooked through.",
            "Remove the Canederli from the water with a slotted spoon and drain.",
            "Serve the Canederli in a bowl of hot broth, or with melted butter and grated Parmesan cheese on top."
        ]
    },
    3: {
        title: "Pizza Napoletana",
        Ingredients: [
            "500 grams '00' flour",
            "325 ml water",
            "10 grams salt",
            "3 grams fresh yeast",
            "400 grams canned San Marzano tomatoes",
            "200 grams fresh mozzarella cheese, sliced",
            "Fresh basil leaves",
            "Extra virgin olive oil"
        ],
        Instructions: [
            "In a bowl, dissolve the fresh yeast in the water. Add the salt and mix well.",
            "Gradually add the flour to the yeast mixture, mixing until a dough forms.",
            "Knead the dough for about 10-15 minutes until smooth and elastic.",
            "Place the dough in a lightly oiled bowl, cover with a damp cloth, and let it rise for about 8-24 hours in a cool place.",
            "Preheat your oven to its highest setting, ideally 250-300°C (480-570°F). If you have a pizza stone, place it in the oven to heat.",
            "Divide the dough into 4 equal parts. On a floured surface, stretch each part into a round pizza base, about 25-30 cm (10-12 inches) in diameter.",
            "Crush the canned San Marzano tomatoes by hand, and spread a thin layer of the tomatoes on each pizza base.",
            "Arrange the sliced mozzarella cheese on top of the tomatoes.",
            "Add a few fresh basil leaves and drizzle with extra virgin olive oil.",
            "Transfer the pizza to the preheated oven (or onto the pizza stone) and bake for about 7-10 minutes, until the crust is golden and the cheese is bubbly and slightly browned.",
            "Remove from the oven and serve immediately, garnished with additional fresh basil leaves if desired."
        ]
    },
    4: {
        title: "Arancini",
        Ingredients: [
            "2 cups cooked Arborio rice",
            "1/2 cup grated Parmesan cheese",
            "2 large eggs, beaten",
            "1 cup mozzarella cheese, cubed",
            "1 cup all-purpose flour",
            "2 cups breadcrumbs",
            "Vegetable oil, for frying",
            "Salt, to taste",
            "Pepper, to taste",
            "Optional: Bolognese sauce or peas, for filling"
        ],
        Instructions: [
            "In a large bowl, mix the cooked Arborio rice, grated Parmesan cheese, and one beaten egg until well combined.",
            "Take a small handful of the rice mixture and flatten it in your palm. Place a cube of mozzarella cheese (and a small spoonful of Bolognese sauce or peas, if using) in the center and shape the rice around the filling to form a ball.",
            "Repeat with the remaining rice mixture and filling.",
            "Set up a breading station with three shallow bowls: one with flour, one with the remaining beaten egg, and one with breadcrumbs.",
            "Roll each rice ball first in the flour, then in the beaten egg, and finally in the breadcrumbs, ensuring they are well coated.",
            "Heat vegetable oil in a deep fryer or large pot to 180°C (350°F). Fry the arancini in batches until they are golden brown and crispy, about 3-4 minutes per batch.",
            "Use a slotted spoon to remove the arancini from the oil and drain on a paper towel-lined plate.",
            "Season with salt and pepper to taste. Serve hot."
        ]
    },
5: {
        title: "Italian Lasagna",
        Ingredients: [
            "1 pound (450g) of lasagna noodles",
            "1 pound (450g) of ground beef (or a mix of beef and pork)",
            "1 onion, chopped",
            "2 cloves of garlic, minced",
            "1 can (28 ounces or 800g) of crushed tomatoes",
            "2 tablespoons of tomato paste",
            "1 teaspoon of dried oregano",
            "1 teaspoon of dried basil",
            "Salt and pepper to taste",
            "1 pound (450g) of ricotta cheese",
            "1 cup (100g) of grated Parmesan cheese",
            "2 cups (200g) of shredded mozzarella cheese",
            "Fresh basil leaves for garnish (optional)"
        ],
        Instructions: [
            "Preheat your oven to 375°F (190°C).",
            "In a large skillet, cook the ground beef over medium heat until browned. Add the chopped onion and minced garlic, and cook until the onion is translucent.",
            "Stir in the crushed tomatoes, tomato paste, dried oregano, dried basil, salt, and pepper. Let the sauce simmer for about 15-20 minutes, stirring occasionally, until it thickens slightly. Taste and adjust seasoning if needed.",
            "While the sauce is simmering, cook the lasagna noodles according to the package instructions until they are al dente. Drain and set aside.",
            "In a mixing bowl, combine the ricotta cheese and grated Parmesan cheese.",
            "To assemble the lasagna, spread a thin layer of the meat sauce on the bottom of a 9x13 inch baking dish. Arrange a layer of cooked lasagna noodles on top of the sauce, slightly overlapping them.",
            "Spread half of the ricotta cheese mixture over the noodles, followed by a layer of shredded mozzarella cheese. Repeat the layers - meat sauce, noodles, ricotta mixture, and mozzarella - until all ingredients are used, ending with a layer of meat sauce and mozzarella cheese on top.",
            "Cover the baking dish with aluminum foil and bake in the preheated oven for 25-30 minutes.",
            "Remove the foil and bake for an additional 10-15 minutes or until the cheese is bubbly and golden brown.",
            "Let the lasagna cool for a few minutes before slicing and serving. Garnish with fresh basil leaves if desired. Buon appetito!"
        ]
    },
    6: {
        title: "Italian Focaccia",
        Ingredients: [
            "4 cups all-purpose flour",
            "2 teaspoons active dry yeast",
            "1 1/2 cups warm water",
            "2 tablespoons olive oil",
            "1 teaspoon salt",
            "1 tablespoon fresh rosemary leaves",
            "Coarse sea salt for topping"
        ],
        Instructions: [
            "In a bowl, combine the warm water and yeast. Let it sit for about 5 minutes until frothy.",
            "Add the flour, olive oil, salt, and fresh rosemary to the yeast mixture. Stir until a sticky dough forms.",
            "Transfer the dough to a floured surface and knead for about 5-10 minutes until smooth and elastic.",
            "Place the dough in a greased bowl, cover with a clean kitchen towel, and let it rise in a warm place for about 1 hour or until doubled in size.",
            "Preheat your oven to 425°F (220°C). Grease a baking sheet or line it with parchment paper.",
            "Punch down the dough and transfer it to the prepared baking sheet. Press it down evenly to fill the pan.",
            "Cover the dough with a clean kitchen towel and let it rise again for about 30 minutes.",
            "Use your fingers to make dimples all over the surface of the dough. Drizzle with olive oil and sprinkle coarse sea salt on top.",
            "Bake in the preheated oven for 20-25 minutes or until golden brown and crispy on the edges.",
            "Remove from the oven and let it cool slightly before slicing and serving."
        ]
    },
    7: {
        title: "Italian Cheese",
        Ingredients: [
            "1 gallon whole milk",
            "1/4 cup vinegar or lemon juice",
            "1/2 teaspoon salt",
            "Cheese cloth"
        ],
        Instructions: [
            "Heat the milk in a large pot over medium heat, stirring frequently to prevent scorching. Heat until it reaches about 185°F (85°C).",
            "Remove the pot from heat and gently stir in the vinegar or lemon juice. Let it sit for about 10 minutes to allow curds to form.",
            "Line a colander with a layer of cheese cloth and place it over a large bowl or sink. Pour the curds and whey through the cheese cloth to separate them.",
            "Gather the corners of the cheese cloth and twist to squeeze out excess whey. Rinse the curds under cold water to remove any leftover whey and help cool the cheese.",
            "Transfer the curds to a bowl and knead in the salt until well incorporated and the cheese becomes smooth and elastic.",
            "If desired, shape the cheese into a ball or log and refrigerate until ready to use. The cheese can be stored in an airtight container in the refrigerator for several days."
        ]
    },
    8: {
        title: "Osso Buco",
        Ingredients: [
            "4 veal shanks, about 1 1/2 inches thick",
            "Salt and pepper to taste",
            "1/2 cup all-purpose flour",
            "4 tablespoons olive oil",
            "1 onion, chopped",
            "2 carrots, chopped",
            "2 celery stalks, chopped",
            "4 cloves garlic, minced",
            "1 cup dry white wine",
            "1 can (14 ounces) diced tomatoes",
            "1 cup chicken or beef broth",
            "1 bay leaf",
            "1 sprig fresh rosemary",
            "1 sprig fresh thyme",
            "Gremolata (optional):",
            "2 tablespoons chopped fresh parsley",
            "Zest of 1 lemon",
            "1 clove garlic, minced"
        ],
        Instructions: [
            "Preheat your oven to 350°F (175°C).",
            "Season the veal shanks generously with salt and pepper, then dredge them in flour, shaking off any excess.",
            "In a large oven-safe skillet or Dutch oven, heat the olive oil over medium-high heat. Brown the veal shanks on all sides, about 4-5 minutes per side. Remove and set aside.",
            "In the same skillet, add the chopped onion, carrots, and celery. Cook until softened, about 5 minutes. Add the minced garlic and cook for another minute.",
            "Pour in the white wine and let it simmer for 2-3 minutes to deglaze the pan.",
            "Add the diced tomatoes (with juices), chicken or beef broth, bay leaf, rosemary, and thyme to the skillet. Stir to combine.",
            "Return the browned veal shanks to the skillet, nestling them into the liquid and vegetables.",
            "Cover the skillet or Dutch oven with a lid or foil and transfer it to the preheated oven. Bake for about 2 hours or until the meat is tender and easily pulls away from the bone.",
            "While the osso buco is cooking, prepare the gremolata by combining the chopped parsley, lemon zest, and minced garlic in a small bowl.",
            "Once the osso buco is done, remove it from the oven. Serve the veal shanks with the braising liquid and vegetables, garnished with the gremolata on top.",
            "Osso buco is traditionally served with risotto or mashed potatoes."
        ]
    },
    9: {
        title: "Risotto",
        Ingredients: [
            "1 1/2 cups Arborio rice",
            "4 cups chicken or vegetable broth, heated",
            "1/2 cup dry white wine",
            "2 tablespoons olive oil",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1/2 cup grated Parmesan cheese",
            "2 tablespoons unsalted butter",
            "Salt and pepper to taste",
            "Fresh chopped parsley for garnish"
        ],
        Instructions: [
            "In a large pan, heat the olive oil over medium heat. Add the chopped onion and cook until translucent, about 3-4 minutes.",
            "Add the minced garlic and cook for another minute until fragrant.",
            "Add the Arborio rice to the pan and stir to coat it with the oil, onion, and garlic mixture. Cook for about 2-3 minutes until the rice turns slightly translucent.",
            "Pour in the white wine and stir continuously until the wine is absorbed by the rice.",
            "Begin adding the heated broth to the rice, one ladleful at a time, stirring frequently. Allow each ladleful of broth to be absorbed by the rice before adding the next. Continue this process until the rice is cooked al dente and creamy, which should take about 18-20 minutes.",
            "Stir in the grated Parmesan cheese and unsalted butter until melted and well combined. Season with salt and pepper to taste.",
            "Remove the risotto from heat and let it rest for a minute or two before serving.",
            "Garnish the risotto with fresh chopped parsley before serving.",
            "Serve the Italian risotto hot as a main dish or as a side dish with grilled or roasted meats."
        ]
    },
    10: {
        title: "Truffles",
        Ingredients: [
            "200g dark chocolate (70% cocoa)",
            "100ml heavy cream",
            "1 tablespoon unsalted butter",
            "1 teaspoon vanilla extract",
            "Cocoa powder or finely chopped nuts for coating"
        ],
        Instructions: [
            "Finely chop the dark chocolate and place it in a heatproof bowl.",
            "In a saucepan, heat the heavy cream over medium-low heat until it starts to simmer. Remove from heat immediately.",
            "Pour the hot cream over the chopped chocolate. Let it sit for about 1 minute to soften the chocolate.",
            "Add the unsalted butter and vanilla extract to the chocolate mixture.",
            "Stir the mixture gently until the chocolate is completely melted and smooth, creating a ganache.",
            "Cover the bowl with plastic wrap and refrigerate the ganache for at least 2 hours or until firm.",
            "Once the ganache is firm, use a spoon or a small scoop to portion out small amounts and roll them into truffle-sized balls.",
            "Roll each truffle ball in cocoa powder or finely chopped nuts to coat evenly.",
            "Place the coated truffles on a parchment-lined tray and refrigerate for another 30 minutes to set.",
            "Store the Italian truffles in an airtight container in the refrigerator until ready to serve."
        ]
    }


};


function ItalianRecipe() {
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

export default ItalianRecipe