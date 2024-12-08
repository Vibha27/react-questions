export default function App() {
  const data = {
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  };

  //  taxi: a car licensed to transport...
  //  food:
  //      sushi: a traditional japanese....
  //      apple:
  //           Honeycrisp: an apple cultiva...
  //           Fuji: "......"
  const DisplayNested = ({ nestedObjected, marginLeft = "" }) => {
    return Object.keys(nestedObjected).map((ele, index) => (
      <div style={{ marginLeft }}>
        {ele}: {""}
        {typeof nestedObjected[ele] === "string" ? (
          nestedObjected[ele]
        ) : (
          <DisplayNested
            nestedObjected={nestedObjected[ele]}
            marginLeft={"20px"}
          />
        )}
      </div>
    ));
  };

  return (
    <>
      <h1>My Data:</h1>
      <div>
        <DisplayNested nestedObjected={data} />
      </div>
    </>
  );
}
