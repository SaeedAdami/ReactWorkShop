//phase I
//var dish = React.createElement("ul", { "className": "ingredients" },
//    React.createElement("li", null, "1 lb Salmon"),
//    React.createElement("li", null, "1 cup Pine Nuts"),
//    React.createElement("li", null, "2 cups Butter Lettuce"),
//    React.createElement("li", null, "1 Yellow Squash"),
//    React.createElement("li", null, "1/2 cup Olive Oil"),
//    React.createElement("li", null, "3 cloves of Garlic")
//);

//pahase II
//var elements = [
//    React.createElement("li", null, "1 lb Salmon"),
//    React.createElement("li", null, "1 cup Pine Nuts"),
//    React.createElement("li", null, "2 cups Butter Lettuce"),
//    React.createElement("li", null, "1 Yellow Squash"),
//    React.createElement("li", null, "1/2 cup Olive Oil"),
//    React.createElement("li", null, "3 cloves of Garlic")
//];

//var dish = React.createElement("ul",
//    { className: "ingredients" },
//    elements
//);

//phase III
//        var items = [
//            "1 lb Salmon",
//            "1 cup Pine Nuts",
//            "2 cups Butter Lettuce",
//            "1 Yellow Squash",
//            "1/2 cup Olive Oil",
//            "3 cloves of Garlic"]
//
//        var dish = React.createElement("ul", { className: "ingredients" },
//            items.map(ingredient => React.createElement("li", null, ingredient))
//        )
//
//        ReactDOM.render(dish, document.getElementById('react-container'))