import PropTypes from "prop-types";
import styles from "./ButtonNextPrev.module.css";
import btnNext from "../../../assets/images/Btn-next.png";
import btnPrev from "../../../assets/images/Btn-previous.png";

function ButtonNextPrev({ random, setRandom }) {
  function handlePrev() {
    if (random === 0) {
      setRandom(250);
    } else {
      setRandom(random - 1);
    }
  }

  function handleNext() {
    if (random === 250) {
      setRandom(0);
    } else {
      setRandom(random + 1);
    }
  }

  return (
    <div className={styles.ButtonNextPrev}>
      <button id={styles.prev} type="button" onClick={handlePrev}>
        <img className={styles.imgButton} src={btnPrev} alt="Previous" />
      </button>
      <button id={styles.next} type="button" onClick={handleNext}>
        <img className={styles.imgButton} src={btnNext} alt="Next" />
      </button>
    </div>
  );
}

ButtonNextPrev.propTypes = {
  setRandom: PropTypes.func.isRequired,
  random: PropTypes.number.isRequired,
};
export default ButtonNextPrev;
