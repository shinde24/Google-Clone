import {Avatar} from "@material-ui/core";
import React from 'react';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to = "/about">About</Link>
                <Link to = "/store">Store</Link>
            </div>
            <div className="home__headerRight">
                <Link to = "/gmail">Gmail</Link>
                <Link to = "/image">Images</Link>
                <AppsIcon/>
                <Avatar/>
            </div>
        </div>

        <div className="home__body">
            <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                alt="logo" 
            />
            <div className="home__inputContainer">
                <Search />
            </div>
        </div>

        <div className="home_lanuage">
            <div id="Multiple">Google offered in: 
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBQ">हिन्दी</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBU">বাংলা</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBY">తెలుగు</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBc">मराठी</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBg">தமிழ்</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBk">ગુજરાતી</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBo">ಕನ್ನಡ</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBs">മലയാളം</a>
                <a href="https://www.google.com/setprefs?sig=0_mBN1gS5Z4F7Th_dKaojRgoicT3A%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwifg9PIjZ_-AhUQh1YBHROODBEQ2ZgBCBw">ਪੰਜਾਬੀ</a>
            </div>
        </div>
    </div>
  );
}

export default Home;