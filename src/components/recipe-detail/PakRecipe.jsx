import React from "react";
import { useParams } from "react-router-dom";
import "./PakRecipe.css"; // Create this CSS file for styling the recipe page

const recipes = {
  1: {
    title: "Nihari",
    ingredients: [
        "1 kg meat (beef or lamb), preferably with bones, cut into pieces",
        "1/2 cup wheat flour (atta)",
        "1/2 cup oil or ghee",
        "2 large onions, finely sliced",
        "2 tablespoons ginger-garlic paste",
        "2 tablespoons Nihari masala (store-bought or homemade)",
        "1 teaspoon turmeric powder",
        "Salt to taste",
        "6-8 cups water",
        "Fresh coriander leaves for garnish",
        "Sliced ginger for garnish",
        "Lemon wedges for serving",
        "fried onions for garnish(Optional)",
  
        // Add more ingredients as needed
      ],
      instructions: [
        " In a bowl, mix wheat flour with some water to make a smooth paste (slurry). Coat the meat pieces with this paste and set aside.",
        "Heat oil or ghee in a large, heavy-bottomed pot or pressure cooker over medium heat.",
        " Add sliced onions to the hot oil/ghee and fry until golden brown. Remove half of the fried onions and set aside for garnish.",
        "Add ginger-garlic paste to the pot and sauté until the raw smell disappears. Add the meat pieces along with any remaining flour paste and sear until browned on all sides.",
        " Add Nihari masala, turmeric powder, and salt. Stir well to coat the meat with the spices.",
        "Pour in 6-8 cups of water, enough to cover the meat completely. Bring it to a boil, then reduce heat to low and let it simmer, covered, for 3-4 hours until the meat is tender and falls off the bones. If using a pressure cooker, cook for about 45 minutes to 1 hour after the first whistle.",
        " Nihari should have a thick, gravy-like consistency. If it's too thin, you can cook it uncovered for a while to reduce and thicken the gravy.",
        "Garnish the Nihari with fresh coriander leaves, sliced ginger, fried onions (if using), and lemon wedges. Serve hot with naan, roti, or steamed rice.",
      ],
  },
  2: {
    title: "Chicken Karahi",
    ingredients: [
        "500g chicken pieces, preferably with bone",
        "3 tablespoons oil or ghee",
        "1 large onion, thinly sliced",
        "2-3 tomatoes, chopped",
        "1 tablespoon ginger-garlic paste",
        "2-3 green chilies, slit (adjust to taste)",
        "1 teaspoon cumin seeds",
        "1 teaspoon coriander powder",
        "1/2 teaspoon red chili powder (adjust to taste)",
        "1/2 teaspoon turmeric powder",
        "1 teaspoon garam masala",
        "Salt to taste",
        "Fresh coriander leaves for garnish",
  
        // Add more ingredients as needed
      ],
      instructions: [
        "Heat oil or ghee in a karahi or deep pan over medium heat.",
        " Add thinly sliced onions and sauté until golden brown.",
        "Add cumin seeds, ginger-garlic paste, green chilies, coriander powder, red chili powder, turmeric powder, and salt. Cook the spices for a minute until aromatic.",
        " Add chicken pieces to the pan. Stir well to coat the chicken with the spices and onion mixture.",
        "Cover the pan and let the chicken cook in its juices for about 10-15 minutes, stirring occasionally to prevent sticking.",
        "Add chopped tomatoes to the pan. Stir and cook until the tomatoes are soft and the chicken is fully cooked through.",
        "Sprinkle garam masala over the chicken karahi and mix well. Cook for another 2-3 minutes.",
        "Garnish with fresh coriander leaves and serve hot with naan, roti, or steamed rice.",
      ],
  },
  3: {
    title: "Chicken Biryani",
    ingredients: [
        "500g chicken, cut into pieces",
        "2 cups basmati rice, soaked for 30 minutes and drained",
        "2 onions, thinly sliced",
        "2 tomatoes, chopped",
        "1/2 cup yogurt",
        "1/4 cup chopped mint leaves",
        "1/4 cup chopped coriander leaves",
        "2 tablespoons ginger-garlic paste",
        "4 green chilies, slit",
        "1 teaspoon cumin seeds",
        "1 teaspoon garam masala",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon red chili powder (adjust to taste)",
        "1/4 teaspoon saffron strands (optional)",
        "1/4 cup warm milk",
        "3 tablespoons ghee or oil",
        "Salt to taste",
       {type: 'heading', text: 'Whole Spices' },
        "1 bay leaf",
        "4 green cardamom pods",
        "4 cloves",
        "1-inch cinnamon stick",
        "1 star anise",
  
        // Add more ingredients as needed
      ],
      instructions: [
        "In a bowl, mix chicken pieces with yogurt, half of the chopped mint leaves, half of the chopped coriander leaves, ginger-garlic paste, green chilies, turmeric powder, red chili powder, and salt. Let it marinate for at least 30 minutes.",
        " Soak saffron strands in warm milk and set aside.",
        "In a large pot, heat ghee or oil. Add cumin seeds and whole spices (bay leaf, cardamom pods, cloves, cinnamon stick, star anise). Sauté until fragrant.",
        "Add sliced onions and sauté until golden brown.",
        "Add marinated chicken to the pot and cook until the chicken is almost done. Remove half of the chicken and set aside.",
        "In the same pot, layer half of the soaked and drained rice over the chicken. Sprinkle half of the remaining mint leaves and coriander leaves.",
        " Add the remaining chicken over the rice layer. Top with the remaining rice. Sprinkle the rest of the mint leaves and coriander leaves.",
        "Drizzle the saffron milk over the rice. Cover the pot with a tight-fitting lid and seal the edges with dough or a clean cloth.",
        "Cook on low heat for about 20-25 minutes or until the rice and chicken are fully cooked and aromatic steam escapes from the pot.",
        " Gently fluff the biryani with a fork. Serve hot with raita (yogurt sauce), salad, and boiled eggs if desired.",
      ],
  },
  4: {
    title: "Chapli Kebab",
    ingredients: [
        "500g minced beef or lamb",
        "1 onion, finely chopped",
        "2 tomatoes, finely chopped",
        "2 green chilies, finely chopped",
        "2 tablespoons fresh coriander leaves, chopped",
        "2 tablespoons fresh mint leaves, chopped",
        "1 tablespoon ginger-garlic paste",
        "1 teaspoon cumin powder",
        "1 teaspoon coriander powder",
        "1/2 teaspoon red chili powder (adjust to taste)",
        "1/2 teaspoon turmeric powder",
        "1/2 teaspoon garam masala",
        "1 egg",
        "Salt to taste",
        "Oil for frying",
  
        // Add more ingredients as needed
      ],
      instructions: [
        " In a large bowl, combine minced meat, finely chopped onion, tomatoes, green chilies, coriander leaves, mint leaves, ginger-garlic paste, cumin powder, coriander powder, red chili powder, turmeric powder, garam masala, egg, and salt. Mix well to combine all ingredients evenly.",
        "Cover the bowl with plastic wrap and let the mixture marinate in the refrigerator for at least 1 hour (preferably longer) to allow the flavors to meld.",
        "Take a portion of the marinated mixture and shape it into flat, round patties (similar to hamburgers) with slightly thinner centers.",
        "Heat oil in a pan or griddle over medium heat. Once the oil is hot, place the shaped kebabs in the pan. Cook them in batches, taking care not to overcrowd the pan.",
        "Cook the kebabs for about 3-4 minutes on each side or until they are golden brown and cooked through.",
        "Remove the cooked kebabs from the pan and place them on paper towels to drain excess oil.",
        "Serve hot with roti, paratha, along with mint chutney, sliced onions, and lemon wedges.",
      ],
  },
  5: {
    title: "Peshawari Naan",
    ingredients: [
        "2 cups all-purpose flour (maida)",
        "1/2 teaspoon baking powder",
        "1/4 teaspoon baking soda",
        "1/2 teaspoon salt",
        "2 tablespoons yogurt",
        "2 tablespoons ghee or melted butter",
        "1/2 cup warm milk",
        "2 tablespoons sugar",
        "1/4 cup chopped mixed nuts (almonds, pistachios, cashews, etc.)",
        "2 tablespoons desiccated coconut",
        "Ghee or butter for brushing",
  
        // Add more ingredients as needed
      ],
      instructions: [
        "In a large bowl, mix all-purpose flour, baking powder, baking soda, and salt. Add yogurt, ghee or melted butter, warm milk, and sugar. Knead into a soft dough. Cover and let it rest for 2 hours.",
        "In a separate bowl, mix chopped nuts and desiccated coconut. Set aside.",
        "Preheat your oven to 220°C (425°F). If using a pizza stone, place it in the oven to preheat as well.",
        "Divide the dough into equal-sized balls. Take one ball and roll it out into an oval or round shape.",
        " Place a portion of the nut and coconut mixture on one half of the rolled dough.",
        "Fold the other half of the dough over the filling and press the edges to seal. Gently roll the stuffed dough to flatten slightly.",
        "Place the stuffed naan on a baking sheet or a preheated pizza stone in the oven. Bake for about 8-10 minutes or until the naan puffs up and turns golden brown.",
        " Remove the naan from the oven and immediately brush the top with ghee or melted butter.",
        "Serve hot as a side dish with your favorite curry or as a snack with chutney or raita.",
      ],
  },
  6: {
    title: "Mixed Sabzi",
    ingredients: [
      "2 cups mixed vegetables (i.e carrots, peas, potatoes, etc.), chopped",
      "2 tablespoons oil",
      "1 teaspoon cumin seeds",
      "1 onion, finely chopped",
      "1 teaspoon ginger-garlic paste",
      "2 tomatoes, finely chopped",
      "1 teaspoon coriander powder",
      "1/2 teaspoon turmeric powder",
      "1/2 teaspoon cumin powder",
      "1/2 teaspoon red chili powder (adjust to taste)",
      "Salt to taste",
      "Fresh coriander leaves for garnish",
      // Add more ingredients as needed
    ],
    instructions: [
      "Heat oil, sauté cumin seeds, onions until golden.",
      "Add ginger-garlic paste, tomatoes, and spices, cook until soft.",
      "Mix in chopped mixed vegetables, cook covered until tender.",
      "Adjust seasoning, garnish with coriander leaves.",
      "Serve hot with roti or rice.",
    ],
  },
  7: {
    title: "Aloo Ki Bhujia",
    ingredients: [
      "3-4 medium-sized potatoes, peeled and thinly sliced",
      "2 tablespoons oil",
      "1 teaspoon cumin seeds",
      "1 onion, finely chopped",
      "1 green chili, finely chopped (optional)",
      "1 teaspoon ginger-garlic paste",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon coriander powder",
      "1/2 teaspoon red chili powder (adjust to taste)",
      "Salt to taste",
      "Fresh coriander leaves for garnish",

      // Add more ingredients as needed
    ],
    instructions: [
      "Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.",
      "Add chopped onions and green chili (if using). Sauté until onions turn golden brown.",
      "Add ginger-garlic paste and sauté for another minute until the raw smell disappears.",
      "Add turmeric powder, coriander powder, red chili powder, and salt. Mix well.",
      "Add the thinly sliced potatoes and coat them with the spice mixture.",
      "Cook covered on low to medium heat, until the potatoes are tender and cooked through.",
      "Garnish with fresh coriander leaves.",
      "Serve hot with roti, paratha, or puri.",
    ],
  },
  8: {
    title: "Aloo Gobi",
    ingredients: [
      "2 medium potatoes, peeled and cubed",
      "1 small cauliflower, cut into florets",
      "2 tablespoons oil",
      "1 teaspoon cumin seeds",
      "1 onion, finely chopped",
      "1 tomato, finely chopped",
      "1 teaspoon ginger-garlic paste",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon coriander powder",
      "1/2 teaspoon cumin powder",
      "1/2 teaspoon red chili powder (adjust to taste)",
      "Salt to taste",
      "Fresh coriander leaves for garnish",

      // Add more ingredients as needed
    ],
    instructions: [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add chopped onion and sauté until golden brown. Add ginger-garlic paste and cook for a minute.",
      "Add chopped tomatoes, turmeric, coriander, cumin, red chili powder. Cook until tomatoes are soft.",
      "Add cubed potatoes and cauliflower florets.Mix well, and cook on low heat until vegetables are tender.",
      "Adjust seasoning, garnish with fresh coriander leaves.",
      "Serve hot with roti or rice.",
    ],
  },
  9: {
    title: "Matar Pulao",
    ingredients: [
      "1 cup basmati rice, rinsed and soaked for 30 minutes",
      "1 cup green peas (fresh or frozen)",
      "2 tablespoons oil or ghee",
      "1 teaspoon cumin seeds",
      "1 bay leaf",
      "2-3 cloves",
      "2-3 green cardamom pods",
      "1-inch cinnamon stick",
      "1 onion, thinly sliced",
      "1-2 green chilies, slit (optional)",
      "2 cups water",
      "Salt to taste",
      "Fresh coriander leaves for garnish (optional)",

      // Add more ingredients as needed
    ],
    instructions: [
      "Heat oil or ghee in a pot. Add cumin seeds, bay leaf, cloves, cardamom pods, and cinnamon stick. Sauté until fragrant.",
      "Add sliced onion and green chilies (if using). Sauté until onions are golden brown.",
      "Add chopped tomatoes, turmeric, coriander,salt, cumin, red chili powder. Cook until tomatoes are soft.",
      "Add green peas and cook on low heat",
      "Add 2 cups of water. Bring to a boil, then reduce heat to low",
      "Add drained rice cover, and simmer until rice is cooked and water is absorbed (about 15-20 minutes).",
      "Fluff the rice with a fork, garnish with fresh coriander leaves if desired, and serve hot.",
    ],
  },
  10: {
    title: "Lobia Masala",
    ingredients: [
      "1 cup dried black-eyed peas (lobia), soaked overnight",
      "2 tablespoons oil",
      "1 teaspoon cumin seeds",
      "1 bay leaf",
      "1 onion, finely chopped",
      "1 teaspoon ginger-garlic paste",
      "2 tomatoes, finely chopped",
      "1 teaspoon turmeric powder",
      "1 teaspoon coriander powder",
      "1/2 teaspoon red chili powder (adjust to taste)",
      "1 teaspoon garam masala",
      "Salt to taste",
      "Fresh coriander leaves for garnish",

      // Add more ingredients as needed
    ],
    instructions: [
      "Drain the soaked black-eyed peas. Cook them in a pressure cooker with 3 cups of water and a pinch of salt for 3-4 whistles, or until tender. If using a pot, cook until they are soft (about 30-40 minutes).",
      "Heat oil in a pan. Add cumin seeds and bay leaf, and sauté until fragrant.",
      "Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for another minute.",
      "Add tomato ,turmeric powder, coriander powder, red chili powder, and salt. Mix well.Cook until tomatoes are soft and the oil separates from the masala.",
      "Add the cooked black-eyed peas along with their cooking liquid. Stir well and let it simmer for 10-15 minutes to blend the flavors.",
      "Stir in garam masala and adjust salt if needed. Garnish with fresh coriander leaves.",
      "Serve hot with rice, roti, or naan.",
    
    ],
  },
  // Add more recipes as needed
};

const PakRecipe = () => {
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
              {recipe.ingredients.map((ingredient, index) => (

                ingredient.type === 'heading' ? (
                                    <h6 key={index}>{ingredient.text}</h6>
                                ) : (
                                    <li key={index}>{ingredient}</li>
                                ))
               
       ) }
            </ul>
          </div>
          <div className="recipe-section">
            <h2>Instructions:</h2>
            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
};

export default PakRecipe;
