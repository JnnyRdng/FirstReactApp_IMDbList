import React from "react";

export default function FilmItem(props) {

    return (
        <li className="film-item">
            <a href={props.film.url} title={props.film.name + " on IMDb"}>{props.film.name}</a>
        </li>
    )

}