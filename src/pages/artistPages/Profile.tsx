import React from "react";
import "./Profile.scss";
import ProfileImage from "../../assets/artist/porfile1.jpg"
import { FaPlay, FaShareAlt, FaCheckCircle } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Popular from "../../components/artists/Popular";
import { Populars } from "../../components/mock/PopularTracks";
import Discography from "../../components/artists/Discography";
import { releases } from "../../components/mock/DishcoveryData";


const Profile = () => {

    return (
        <div className="artist-profile">
            {/* Banner */}
            <div className="banner">
                <div className="overlay" />

                <div className="content">
                    {/* Profile Image */}
                    <div className="profile-img">
                        <img
                            src={ProfileImage}
                            alt="artist"
                        />
                    </div>

                    {/* Artist Info */}
                    <div className="info">
                        <div className="name-row">
                            <h1>Luna Waves</h1>
                            <FaCheckCircle className="verified" />
                        </div>

                        {/* Genres */}
                        <div className="genres">
                            <span>Indie Pop</span>
                            <span>Electronic</span>
                            <span>Dream Pop</span>
                        </div>

                        {/* Stats */}
                        <div className="stats">
                            <div>
                                <h2>1.2M</h2>
                                <p>FOLLOWERS</p>
                            </div>
                            <div className="divider" />
                            <div>
                                <h2>850K</h2>
                                <p>MONTHLY LISTENERS</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="actions">
                            <button className="follow">Follow</button>

                            <button className="play">
                                <FaPlay /> Play All
                            </button>

                            <button className="share">
                                <FaShareAlt />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about-section">
                <div className="about-container">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio voluptate sunt fugit! Repellat adipisci aperiam libero aut assumenda mollitia fugit doloribus temporibus, eveniet ducimus ipsum quia deleniti fugiat eaque?</p>
                    <div className="social-media-container">
                        <FaInstagram className="socials" />
                        <FaFacebook className="socials" />
                        <FaYoutube className="socials" />
                    </div>
                </div>
            </div>

            {/* Popular Section */}
            <div className="popular-container-parent">
                <h1>Populars</h1>
                <div className="popular-container-child">
                    {
                        Populars.map((popular, index) => (
                            <Popular key={popular.id} data={popular} index={index} />
                        ))
                    }
                </div>
            </div>

            {/* Discography */}
            <div className="release-parent-container ">
                <h1>Discography</h1>
                <div className="release-step-child">
                    {releases.map(release => (
                        <Discography key={release.id} data={release} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
