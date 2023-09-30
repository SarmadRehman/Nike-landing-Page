const ShoeCard = ({ imageURL, changeBigShoeImage, BigShoeImage }) => {
  const handleClick = () => {
    if (BigShoeImage !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
  ${
    BigShoeImage === imageURL ? "border-coral-red " : "border-transparent"
  } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    ></div>
  );
};
export default ShoeCard;
