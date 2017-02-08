import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";

import MakeRecipeDirections from "MakeRecipeDirections";
import MakeRecipeIngredients from "MakeRecipeIngredients";
import MakeRecipeHeader from "MakeRecipeHeader";
import MakeRecipeForm from "MakeRecipeForm";
import MakeRecipeError from "MakeRecipeError";

var actions = require("actions");

var recipeSaved = false;

var saveRecipe = async (props) => {
    if (!props.currentRecipe.saved) {
        await axios.post("/recipes", {
            currentRecipe: props.currentRecipe,
            ingredientsList: props.ingredientsList,
            directions: props.directions,
            jwt: localStorage.getItem("jwt")
        });

        window.location.hash = "/recipe/view";
    }
};

var editRecipe = async (props) => {
    if (!props.currentRecipe.saved) {
        await axios.put("/recipes", {
            currentRecipe: props.currentRecipe,
            ingredientsList: props.ingredientsList,
            directions: props.directions,
            jwt: localStorage.getItem("jwt")
        });

        window.location.hash = "/recipe/view";
    }
}

var renderButton = (props) => {
    if (!props.currentRecipe.id) {
        return <button id="save-recipe-button" onClick={saveRecipe.bind(null, props)}>SAVE RECIPE</button>;
    } else {
        return <button id="save-recipe-button" onClick={editRecipe.bind(null, props)}>EDIT RECIPE</button>
    }
};

var MakeRecipe = (props) => {
    if (localStorage.getItem("jwt")) {
        return (
            <div className="content-container row">
                <div className="content-list columns medium-10 large-8 small-centered">
                    <div className="recipe-header">
                        <MakeRecipeHeader></MakeRecipeHeader>
                    </div>
                    <div className="recipe-content">
                        <MakeRecipeIngredients></MakeRecipeIngredients>
                        <MakeRecipeDirections></MakeRecipeDirections>
                    </div>
                    <MakeRecipeForm></MakeRecipeForm>
                    {renderButton(props)}
                </div>
            </div>
        );
    } else {
        return <MakeRecipeError></MakeRecipeError>;
    }

}

export default connect((state) => {
    return {
        currentRecipe: state.currentRecipe,
        ingredientsList: state.ingredientsList,
        directions: state.directions
    };
})(MakeRecipe);
