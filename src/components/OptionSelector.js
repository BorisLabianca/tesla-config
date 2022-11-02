const OptionSelector = (props) => {
  console.log(props);
  const { description, price, count, setCount } = props;
  return (
    <>
      <div
        onClick={() => {
          price !== count && setCount(price);
        }}
        className={count === price ? "selected" : "notSelected"}
      >
        {description} - {price} €
      </div>
    </>
  );
};
export default OptionSelector;
