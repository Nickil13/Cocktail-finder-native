function getIngredients(item, options) {
    let ingredients = [];

    if (item) {
        let index = 1;
        let nextIng = item[`strIngredient${index}`];

        while (nextIng !== null && index < 4) {
            if (options?.withMeasurements) {
                const measurement = item[`strMeasure${index}`];
                if (measurement) {
                    ingredients.push({ name: nextIng, measurement });
                }
            } else {
                ingredients.push({ name: nextIng });
            }

            index++;
            nextIng = item[`strIngredient${index}`];
        }
    }

    return ingredients;
}

export { getIngredients };
