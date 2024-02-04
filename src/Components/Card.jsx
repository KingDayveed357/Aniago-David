// Update Card.js
const Card = (props) => {
  return (
    <div className="max-w-[25rem] hover:shadow-2xl hover:cursor-pointer shadow-lg mx-auto rounded-xl dark:bg-[#1e3851]">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img className="rounded-t-lg" src={props.img} alt="" />
      </a>
      <div className="p-5 flex flex-col gap-[0.4rem] rounded-xl dark:bg-[#1e3851]">
        <p className={`text-xl text-center font-semibold dark:bg-[#1e3851]`}>{props.title}</p>
        <p className={`text-xl text-center dark:bg-[#1e3851]`}>{props.function}</p>
        {/* Include category information */}
        <p className={`text-xl text-center dark:bg-[#1e3851]`}>{props.category}</p>
      </div>
    </div>
  );
};

export default Card;
