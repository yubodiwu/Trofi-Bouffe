var recipesReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case "GET_RECIPES_LIST":
            return action.payload;
        default:
            return state;
    }
};

var currentRecipeReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case "GET_CURRENT_RECIPE":
            return action.payload;
        default:
            return state;
    }
};

var ingredientsListReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case "GET_RECIPE_INGREDIENTS":
            return action.payload;
        default:
            return state;
    }
};

var directionsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case "GET_RECIPE_DIRECTIONS":
            return action.payload;
        default:
            return state;
    }
};

var needNFReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case "INGREDIENTS_NEED_NUTRITION_FACTS":
            return action.payload;
        default:
            return state;
    }
};

var nfBankReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case "STORE_NUTRITION_FACTS":
            var newState = JSON.parse(JSON.stringify(state));

            for (let hit of action.payload) {
                console.log(hit);
                newState[hit.fields.item_id] = hit.fields
            }

            return newState;
        default:
            return state;
    }
}

module.exports = {
    recipesReducer,
    ingredientsListReducer,
    currentRecipeReducer,
    directionsReducer,
    needNFReducer,
    nfBankReducer
};
