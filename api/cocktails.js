import {
    SEARCH_COCKTAIL,
    SEARCH_COCKTAIL_BY_ID,
    SEARCH_INGREDIENT,
} from "./routes";

const getCocktails = async (value) => {
    try {
        const response = await fetch(`${SEARCH_COCKTAIL}${value}`);
        const data = await response.json();
        const { drinks } = data;
        return drinks;
    } catch (error) {
        console.error(error);
    }
};

const getCocktailsByIngredient = async (value) => {
    // Check to see if ingredient exists. Then, use ingredient to search for drinks
    try {
        const response = await fetch(`${SEARCH_INGREDIENT}${value}`);
        const data = await response.json();
        const { drinks } = data;
        return drinks;
    } catch (error) {
        console.error(error);
    }
};

const getIngredient = async (value) => {
    try {
        const response = await fetch(`${SEARCH_INGREDIENT}${value}`);
        const data = await response.json();
        const { ingredients } = data;
        return ingredients;
    } catch (error) {
        console.error(error);
    }
};

const getCocktailByID = async (id) => {
    try {
        const response = await fetch(`${SEARCH_COCKTAIL_BY_ID}${id}`);
        const data = await response.json();

        const { drinks } = data;
        return drinks;
    } catch (error) {
        console.error(error);
    }
};

export {
    getCocktails,
    getCocktailsByIngredient,
    getIngredient,
    getCocktailByID,
};
