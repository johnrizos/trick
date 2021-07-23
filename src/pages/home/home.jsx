import React from 'react';
import './Home.scss';
import homeBg from '../../img/home/top_bg.jpg';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <React.Fragment>
            <div id="homepage">
                <section id="homepage_top" style={{ backgroundImage: `url('${homeBg}')` }}>
                    <div className="shadow"></div>
                        <h1 className="text-center text-light pt-5">Ανακάλυψε Την Πόλη Σου</h1>
                        <p className="text-center text-light pt-3">Tο trick.gr σας βοηθάει να γνωρίσετε την πόλη σας, Ας εξερευνήσουμε...</p>
                        <div className="d-grid gap-2 p-4">
                            <Button variant="main-1" size="lg" className=" d-block m-auto text-light ">
                                Αναζήτηση
                            </Button>
                        </div>



                </section>
                <h2 className="text-center">Τα πιο δημοφιλή μέρη για έξοδο</h2>
                <p className="text-center">Ανακάλυψε μερικούς από τους πιο δημοφιλείς προορισμούς με βάση κριτικές και βαθμολογίες χρηστών.</p>
                <section>

                </section>
            </div>
        </React.Fragment>

    );
}

export default Home;