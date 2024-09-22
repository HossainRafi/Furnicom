import { Button } from "../../components/Button";

export const ChooseUs = () => {
  return (
    <section className="section-container">
      <h2 className="text-4xl font-bold text-center my-16 leading-snug">
        Why We Should Be <br /> Your Choice
      </h2>
      <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center md:gap-12 gap-10 text-justify">
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Best Service Experience
          </h3>
          <p className="text-base mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro animi
            cupiditate excepturi eligendi praesentium nemo dolores ratione.
            Dicta, soluta architecto cumque ipsam perferendis voluptas
            blanditiis delectus hic similique nostrum voluptatibus
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Flagship Device Collection
          </h3>
          <p className="text-base mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro animi
            cupiditate excepturi eligendi praesentium nemo dolores ratione.
            Dicta, soluta architecto cumque ipsam perferendis voluptas
            blanditiis delectus hic similique nostrum voluptatibus
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Unique Device Collection
          </h3>
          <p className="text-base mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro animi
            cupiditate excepturi eligendi praesentium nemo dolores ratione.
            Dicta, soluta architecto cumque ipsam perferendis voluptas
            blanditiis delectus hic similique nostrum voluptatibus
          </p>
          <Button text="More Info" />
        </div>
      </div>
    </section>
  );
};
