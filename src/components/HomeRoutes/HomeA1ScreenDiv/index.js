import { HomeScreenWrapper } from "./style";
import instagram from '../../../assets/instagram.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import youtube from '../../../assets/youtube.svg';
import medium from '../../../assets/medium.svg';
import linkedin from '../../../assets/linkedin.svg';
import github from '../../../assets/github.svg';
import codepen from '../../../assets/codepen.svg';
// import Profile from '../../../assets/profil.svg';
const HomeScreen = () => {
    return (
        <HomeScreenWrapper>
            <>
            <div className="screen">
                <div className="divAll">
                   <div className="text">
                    <h1 className="a1">İbrahim Bekir Bektaş</h1>
                    <p1 className="a1">Web Developer</p1>
                 </div>
                 <div className="sosyalMedia">
                    <a className="smA1" href="">
                        <img src={instagram} className="smİmg"></img>
                    </a>
                    <a className="smA1" href="">
                        <img src={facebook} className="smİmg"></img>
                    </a>
                    <a className="smA1" href="">
                        <img src={twitter} className="smİmg"></img>
                    </a>
                    <a className="smA1" href="">
                        <img src={youtube} className="smİmg"></img>
                    </a>
                    <a className="smA1" href="">
                        <img src={medium} className="smİmg"></img>
                    </a>
                    <a className="smA1" href="">
                        <img src={linkedin} className="smİmg"></img>
                    </a>
                    <a className="smA1" href="">
                        <img src={github} className="smİmg"></img>
                    </a>
                        <a className="smA1" href="">
                        <img src={codepen} className="smİmg"></img>
                    </a>
                 </div>
                 <div className="profil">
                    <img src="https://www.color-hex.com/palettes/6467.png" className="profilİmg" alt="İbrahim Bekir Bektaş"></img>
                 </div>
                </div>
            </div>
            </>
        </HomeScreenWrapper>
    )
};
export default HomeScreen;
// https://www.color-hex.com/palettes/6467.png