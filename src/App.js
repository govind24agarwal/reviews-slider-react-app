import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <main>
      <section className="section-center">
        <div className="title">
          <h2>Reviews</h2>
        </div>
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;
          let position = "next-person";
          if (personIndex == index) position = "current-person";
          else if (personIndex == (index - 1 + people.length) % people.length)
            position = "previous-person";
          return (
            <article key={id} className={`person ${position}`}>
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
        <button
          className="prev"
          onClick={() => {
            setIndex(
              (prevIndex) => (prevIndex + 1 + people.length) % people.length
            );
          }}
        >
          <GrLinkPrevious />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(
              (prevIndex) => (prevIndex - 1 + people.length) % people.length
            );
          }}
        >
          <GrLinkNext />
        </button>
      </section>
    </main>
  );
}

export default App;
