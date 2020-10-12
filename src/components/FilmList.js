import React from "react";
import FilmItem from "./FilmItem";

export default function FilmList(props) {

    const filmNodes = props.films.map((film, i) => {
        return (
            <FilmItem film={film} key={i} />
        )
    });

    return (
        <ul>
            {filmNodes}
        </ul>
    )


}