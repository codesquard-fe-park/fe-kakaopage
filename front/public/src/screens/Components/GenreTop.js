import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";
import Card from "./Card.js";

function GenreTop(target, state) {
  Component.call(this, target, state);

  const webtoons = JSON.parse(localStorage.getItem("webtoons"));
  const genreCards = webtoons
    .filter((wt) => wt.genre.includes(this.state.genre))
    .map((cardInfo) => new Card("_", cardInfo).template());

  this.template = function () {
    return `
        <ul class="contentsCard">
          ${genreCards.join("")}
        </ul>`;
  };
}

createExtendsRelation(GenreTop, Component);

export default GenreTop;
