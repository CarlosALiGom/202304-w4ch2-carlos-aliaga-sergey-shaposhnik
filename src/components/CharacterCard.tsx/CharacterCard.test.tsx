import { render, screen } from "@testing-library/react";
import Character from "./CharacterCard";

describe("Given a Character component", () => {
  describe("When it recieves a character `Darth Vader`", () => {
    test("Then it should show a text 'Darth Vader` on a h2", () => {
      const character = {
        id: 4,
        name: "Darth Vader",
        height: 202,
        mass: 136,
        picture: "xd",
        birthyear: "41.9BBY",
      };

      render(<Character character={character} />);

      const text = screen.getByRole("contentinfo");

      expect(text).toBeInTheDocument();
    });
  });
});
