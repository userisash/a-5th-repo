import React from "react";

function Name(props) {
const { names } = props;

return (
<div>
<h2>Names</h2>
<ul>
{names.map((name) => (
<li key={name}>{name}</li>
))}
</ul>
</div>
);
}

export default Name;