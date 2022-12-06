import Guitar from "./guitar";

const GuitarsList = ({ guitars }) => {
  return (
    <>
      <h2 className="heading">Nuestra Colección</h2>
      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar guitar={guitar?.attributes} key={guitar?.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default GuitarsList;
