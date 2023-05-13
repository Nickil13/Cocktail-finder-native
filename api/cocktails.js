import { SEARCH_COCKTAIL } from "./routes";

const getCocktails = async (value) => {
    try {
        const response = await fetch(`${SEARCH_COCKTAIL}${value}`);
        const data = await response.json();
        const { drinks } = data;
        return drinks;
    } catch (error) {
        console.log(error);
    }
};

export { getCocktails };
