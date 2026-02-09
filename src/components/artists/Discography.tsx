import React from "react"
import "./Discography.scss"
import type { DiscographyType } from "../mock/DishcoveryData"

interface PropType {
    data: DiscographyType;
}

const Discography: React.FC<PropType> = ({ data }) => {
    return (
        <div className="release-container">
            <div className="release-image-container">
                <div className="image-container">
                    <img src={data.imageUrl} alt="" />
                </div>
                <div className="details">
                    <p>{data.title}</p>
                    <p>{data.releaseDate} - <span>{data.type}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Discography;