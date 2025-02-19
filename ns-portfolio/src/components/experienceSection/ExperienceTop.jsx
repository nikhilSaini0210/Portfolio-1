import ExperiencetopLeft from "./ExperiencetopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <ExperiencetopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;
