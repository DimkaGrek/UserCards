import imgBigElement from '../../assets/images/big-element.png';

const Home = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-8">
      <div className="mx-auto w-[380px] h-[460px] rounded-[20px] bg-[linear-gradient(142deg,_#471ca9_0%,_#5736a3_69.1%,_#4b2a99_100%)] shadow-[-3px_7px_21px_0_rgba(0,0,0,0.23)] relative">
        <img
          className="w-[308px] h-[168px] absolute top-7 left-9"
          src={imgBigElement}
          alt="big element"
        />
      </div>
    </div>
  );
};

export default Home;
