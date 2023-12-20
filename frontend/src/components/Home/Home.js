import Typewriter from 'typewriter-effect';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.WriteOne}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello friend !')
                                .pauseFor(800)
                                .typeString('<br>')
                                .pauseFor(800)
                                .typeString('Welcome on my website...')
                                .pauseFor(800)
                                .deleteChars(24)
                                .typeString('Have a nice time :)')
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </h1>
            </div>
        </div>
    );
};

export default Home;
