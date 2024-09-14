import { Button } from "../../components/Button";

export const ChooseUs = () => {
  return (
    <section className="section-container">
      <h2 className="text-4xl font-bold text-center my-20 leading-snug">
        Why We Should Be <br /> Your Choice
      </h2>
      <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center md:gap-12 gap-8 text-justify">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
          <p className="text-base mb-2">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
          <p className="text-base mb-2">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
          <p className="text-base mb-2">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <Button text="More Info" />
        </div>
      </div>
    </section>
  );
};
