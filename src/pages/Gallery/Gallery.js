import mk1 from "../../images/subzero.png";
import mk2 from "../../images/scorpion.png";
import mk3 from "../../images/jade.png";
import mk4 from "../../images/jax.png";
import mk5 from "../../images/kitana.png";
import mk6 from "../../images/liu_kang.png";
import mk7 from "../../images/raiden.png";
import mk8 from "../../images/sonya_blade.png";

import CardsCollection from "./components/CardsCollection";

const data = [
    {name: "SubZero", text: "Evil character", image: mk1},
    {name: "Scorpion", text: "Evil character", image: mk2},
    {name: "Jade", text: "Evil character", image: mk3},
    {name: "Jax", text: "Kind character", image: mk4},
    {name: "Kitana", text: "Evil character", image: mk5},
    {name: "Liu Kang", text: "Kind character", image: mk6},
    {name: "Raiden", text: "Neutral character", image: mk7},
    {name: "Sonya Blade", text: "Kind character", image: mk8}

]

const Gallery = () => {
    return (
        <div className="container my-4">
            <CardsCollection data={data} />
        </div>
    )
}

export default Gallery;