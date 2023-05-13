import AsyncStorage from "@react-native-async-storage/async-storage";

const storeRecentSearches = async (value) => {
    const previousSearches = await getRecentSearches().then((res) => {
        return res;
    });

    try {
        const initialSearches = previousSearches?.length > 0 || [];
        const recentSearches = [...initialSearches, value];

        const jsonValue = JSON.stringify(recentSearches);
        await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
        // saving error
        console.error("There was an error saving recent searches.");
    }
};

const getRecentSearches = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("@storage_Key");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.error("There was an error loading recent searches.");
    }
};
const clearRecentSearches = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        // clear error
    }
};

export { storeRecentSearches, getRecentSearches, clearRecentSearches };
