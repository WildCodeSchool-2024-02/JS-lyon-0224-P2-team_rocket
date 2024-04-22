import styles from "./AboutUs.module.css";

import james from "../../assets/images/avatar/james.png";
import jessie from "../../assets/images/avatar/jessie.png";
import miaouss from "../../assets/images/avatar/miaouss.png";

function AboutUs() {
  return (
    <div className={styles.container_about}>
      <div className={styles.jessie}>
        <img src={jessie} alt="jessie-team" style={{ width: "100%" }} />
      </div>

      <div className={styles.james}>
        <img src={james} alt="james-team" style={{ width: "100%" }} />
      </div>

      <div className={styles.miaouss}>
        <img src={miaouss} alt="miaouss-team" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default AboutUs;
