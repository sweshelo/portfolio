import Navbar from '../components/navbar';
import AboutMe from '../components/aboutMe';
import Skills from '../components/skills';

const Home = ()=>{
    return(
        <>
        <Navbar />
        <div id="main-contents">
        <AboutMe />
        <Skills />
        </div>
        </>
    )
}

export default Home;
