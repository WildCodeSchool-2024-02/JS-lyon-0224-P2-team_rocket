import PropTypes from "prop-types";

function Poketypes({ typeImgUrl }) {
  return (
    <div className="types">
      <img
        className="typeImg"
        src={typeImgUrl[0].typeImg}
        alt={typeImgUrl[0].id}
      />
    </div>
  );
}
Poketypes.propTypes = {
  typeImgUrl: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Poketypes;
