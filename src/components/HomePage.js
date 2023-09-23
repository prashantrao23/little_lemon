// import Heading from "../sections/headingPages/Heading";
// import Testimonials from "../sections/headingPages/Testimonials";
import Testimonials from "./sections/Testimonials";
import Specialsnew from "./sections/Specialsnew";
import About from "./About";
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <header>
                <section className="container-fluid call-to-action">
                    <div className='row'>
                        <section className="col-lg-6 hero-text">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                                on traditional recipes served with a modern twist.</p>
                            <br></br>
                        </section>

                        <section className="col-lg-6 hero-image">
                            <img src={require('../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                        </section>
                    </div>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>

                </section>
            </header>
            <main>
                <Specialsnew />
                <Testimonials />
                <About />
            </main>
        </>
    );
}
