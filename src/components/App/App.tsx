import Button from "../Button/Button";

const App = (): JSX.Element => {
  const deleteCharacter = (): void => {
    throw new Error("Function not implemented.");
  };

  return (
    <div className="container">
      <Button text="Delete character" actionOnClick={deleteCharacter} />
    </div>
  );
};

export default App;
