import PropTypes from "prop-types";

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase mt-1">{text}</p>
    </div>
  );
};

ExperienceInfo.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExperienceInfo;
