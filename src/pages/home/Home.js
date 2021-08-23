import React from 'react';
import classes from './Home.module.css';
import homeBg from '../../img/home/top_bg.jpg';

const Home = () => {
    return (
        <React.Fragment>
            <div id="homepage">
                <section id={classes['homepage_top']} style={{ backgroundImage: `url('${homeBg}')` }}>
                    <div className={classes.shadow}></div>
                    <div className={classes['homepage_top_content']}>
                        <h1 className={classes.title}>Ανακάλυψε Την Πόλη Σου</h1>
                        <p className={classes.subtitle}>Tο trick.gr σας βοηθάει να γνωρίσετε την πόλη σας, Ας εξερευνήσουμε...</p>
                        <div className={classes.['div_button']}>
                            <button className={classes.button}>
                                Αναζήτηση
                            </button>
                        </div>
                    </div>



                </section>
                <h2 className={`${classes['text-center']} ${classes['h2']}`}>Τα πιο δημοφιλή μέρη για έξοδο</h2>
                <p className={`${classes['text-center']} ${classes['p']}`}>Ανακάλυψε μερικούς από τους πιο δημοφιλείς προορισμούς με βάση κριτικές και βαθμολογίες χρηστών.</p>
                <section>

                </section>
            </div>
        </React.Fragment>

    );
}

export default Home;