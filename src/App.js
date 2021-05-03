import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="section-center">
        <div className="title">
          <h2>Reviews</h2>
        </div>
        {people.map((person) => {
          const { id, name, image, title, quote } = person;
          return (
            <article key={id} className="person">
              <FaQuoteLeft className="quote-mark" />
              <div className="person-content">
                <p className="quote">{quote}</p>
                <div className="person-footer">
                  <img src={image} alt={name} />
                  <div className="person-detail">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        <button className="prev">
          <GrLinkPrevious />
        </button>
        <button className="next">
          <GrLinkNext />
        </button>
      </section>
    </main>
  );
}

export default App;
