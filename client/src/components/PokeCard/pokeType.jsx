import PropTypes from "prop-types";

function Poketypes({ typeImgUrl }) {
  return (
    <div className="types">
      {typeImgUrl.map((type) => (
        <img
          key={type.id}
          className="typeImg"
          src={type.typeImg}
          alt={type.id}
        />
      ))}
    </div>
  );
}
Poketypes.propTypes = {
  typeImgUrl: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Poketypes;
