import { CharacterStructure } from "../../types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { id, name, height, mass, picture, birthyear },
}: CharacterProps): JSX.Element => {
  return (
    <>
      <article className="" key={id}>
        <div className="character__container">
          <img
            className="character__picture"
            src={`img/${picture}`}
            alt={name}
          />
          <div className="character__info">
            <h2 className="character__name">{name}</h2>
            <ul className="character__data-list">
              <li className="character__data">Birthyear: {birthyear}</li>
              <li className="character__data">Height: {height}</li>
              <li className="character__data">mass: {mass}</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default Character;
