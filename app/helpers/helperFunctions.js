export var convertUnitAbbreviation = {
    tbsp: "tablespoons",
    lbs: "pounds",
    tsp: "teaspoons",
    oz: "ounces",
    "a pinch": "a pinch"
};

export var replaceSpacesWithUnderscores = (string) => {
    return string.replace(/\s+/g, "_");
};

export var capitalizeWords = (str) => {
    str = str[0].toUpperCase() + str.slice(1);

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-" || str[i] === " " && i !== str.length - 1) {
            str = str.slice(0, i + 1) + str[i + 1].toUpperCase() + str.slice(i + 2);
        }
    }

    return str;
};

export var isVolumeUnit = (unit) => {
    if (unit.indexOf("tbsp") !== -1 || unit.indexOf("cup") !== -1 || unit.indexOf("mL") !== -1 || unit.indexOf("tsp") !== -1 || unit.indexOf("L") !== -1) {
        return true;
    } else {
        return false;
    }
};

export var isWeightUnit = (unit) => {
    if (unit.indexOf("oz") !== -1 || unit.indexOf("lbs") !== -1) {
        return true;
    } else {
        return false;
    }
};