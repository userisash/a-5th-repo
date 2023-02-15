import React from "react";

function Card(props) {
const { before1990 } = props;

return (
<div>
<h2>Before 1990</h2>
{before1990.map((item) => (
<div key={item.name}>
<h3>Name: {item.name}</h3>
<p>Birthday: {item.birthday}</p>
<p>Favorite Meats: {item.favoriteFoods.meats.join(", ")}</p>
<p>Favorite Fish: {item.favoriteFoods.fish.join(", ")}</p>
</div>
))}
</div>
);
}

export default Card;