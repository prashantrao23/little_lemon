import food1 from "../assets/food/food3.jpeg"
import food2 from "../assets/food/food2.jpeg"


export default function About() {
  return (
      <section className="about-us ">
          <div className='container-fluid row '>

          <section className="col-lg-6 hero-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
              Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
              and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
              continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
          </section>

          <section className="col-lg-6 double-image">
              <img className="about-1" src={food1} alt="Little Lemon restaurant cuisine 1"></img>
              <img className="about-2" src={food2} alt="Little Lemon restaurant cuisine 2"></img>
          </section>
          </div>

  </section>
  );
}