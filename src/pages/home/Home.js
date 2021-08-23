import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './Home.module.css';
import homeBg from '../../img/home/top_bg.jpg';
import widget1 from '../../img/home-widget/widget-features-1.png';
import widget2 from '../../img/home-widget/widget-features-2.png'
import widget3 from '../../img/home-widget/widget-features-3.png'


const dummy = [
    {
        id: 1,
        name: 'El Morado Espresso Bar',
        location: "&, Mesologgiou, Ν.Ιωνία 142 31"
    },
    {
        id: 3,
        name: 'Barista\'s',
        location: "&, Κεφαλληνίας και Ψαρών, Agii Anargiri 135 61"
    },
    {
        id: 5,
        name: 'Barista\'s',
        location: "&, Κεφαλληνίας και Ψαρών, Agii Anargiri 135 61"
    },
    {
        id: 6,
        name: 'Barista\'s',
        location: "&, Κεφαλληνίας και Ψαρών, Agii Anargiri 135 61"
    }, {
        id: 7,
        name: 'Barista\'s',
        location: "&, Κεφαλληνίας και Ψαρών, Agii Anargiri 135 61"
    }, {
        id: 8,
        name: 'Barista\'s',
        location: "&, Κεφαλληνίας και Ψαρών, Agii Anargiri 135 61"
    },
]

const Home = () => {



    const loopCards = dummy.map((item, i) => <div key={item.id} className={classes.col}><Card name={item.name} /></div>);

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
                <section>
                    <h2 className={`${classes['text-center']} ${classes['h2']}`}>Τα πιο δημοφιλή μέρη για έξοδο</h2>
                    <p className={`${classes['text-center']} ${classes['p']}`}>Ανακάλυψε μερικούς από τους πιο δημοφιλείς προορισμούς με βάση κριτικές και βαθμολογίες χρηστών.</p>
                    <div className={classes.row}>
                        {loopCards}
                    </div>
                </section>
                <section>
                    <h2 className={`${classes['text-center']} ${classes['h2']}`}>Πως λειτουργεί</h2>
                    <p className={`${classes['text-center']} ${classes['p']}`}>Φέρνουμε μαζί τα μέλη των επιχειρήσεων και της κοινότητας.</p>
                    <div className={classes.row}>
                        <div className={classes['col-0']}>
                            <div className={classes['home-widget']}>
                                <img src={widget1} alt="" />
                                <div class="home-widget-title">
                                    <h3>Βρείτε μαγαζιά για έξοδο</h3>
                                </div>
                                <div class="home-widget-description">
                                    <p>Ανακάλυψε και συνδέσου με τα καλύτερα μαγαζιά για έξοδο όπως Τσιπουράδικα, Μπυραρίες, Καφέ, Μπάρ</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes['col-0']}>
                            <div className={classes['home-widget']}>
                                <img src={widget2} alt="" />
                                <div class="home-widget-title">
                                    <h3>Βρείτε μαγαζιά για έξοδο</h3>
                                </div>
                                <div class="home-widget-description">
                                    <p>Ανακάλυψε και συνδέσου με τα καλύτερα μαγαζιά για έξοδο όπως Τσιπουράδικα, Μπυραρίες, Καφέ, Μπάρ</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes['col-0']}>
                            <div className={classes['home-widget']}>
                                <img src={widget3} alt="" />
                                <div class="home-widget-title">
                                    <h3>Βρείτε μαγαζιά για έξοδο</h3>
                                </div>
                                <div class="home-widget-description">
                                    <p>Ανακάλυψε και συνδέσου με τα καλύτερα μαγαζιά για έξοδο όπως Τσιπουράδικα, Μπυραρίες, Καφέ, Μπάρ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </React.Fragment>

    );
}

export default Home;