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
    BigShoeImage === imageURL.bigShoe
      ? "border-coral-red "
      : "border-transparent"
  } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-center bg-cover rounded-xl bg-card sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imageURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};
export default ShoeCard;
