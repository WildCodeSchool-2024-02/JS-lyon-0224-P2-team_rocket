import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import styles from "./AboutUs.module.css";
import james from "../../assets/images/avatar/james.png";
import jessie from "../../assets/images/avatar/jessie.png";
import miaouss from "../../assets/images/avatar/miaouss.png";
import elecBack from "../../assets/images/back/electric.svg";
import elecRock from "../../assets/images/back/rock.svg";
import fairy from "../../assets/images/back/fairy.svg";

function AboutUs() {
  const { setIsPokedex } = useOutletContext();
  useEffect(() => {
    setIsPokedex(true);
  }, [setIsPokedex]);

  return (
    <div className={styles.container_about}>
      <div className={styles.jessie}>
        <img src={fairy} alt="icon-fairy" className={styles.img_fairy} />
        <p className={styles.pStyleMiaous}>
          <i style={{ marginTop: "20px", marginLeft: "15px" }}># 132</i>
        </p>
        <div className={styles.jessieInfo}>
          <p className={styles.pStyle}>Jessie</p>
          <p>
            <i>Alias Anne-So</i>
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <img src={jessie} alt="jessie-team" className={styles.jessieImage} />
        </div>
      </div>
      <div className={styles.miaouss}>
        <img src={elecBack} alt="icon-elec" className={styles.img_elec} />
        <p className={styles.pStyleMiaous}>
          {" "}
          <i style={{ marginTop: "10px", marginLeft: "15px" }}> # 001 </i>
        </p>
        <div style={{ display: "flex" }}>
          <img
            src={miaouss}
            alt="miaouss-team"
            className={styles.miaousImage}
          />
        </div>
        <div className={styles.miaousInfo}>
          <p className={styles.pStyle}>Miaous</p>
          <p>
            <i>Alias Flakron</i>
          </p>
        </div>
      </div>

      <div className={styles.james}>
        <img src={elecRock} alt="icon-rock" className={styles.img_rock} />
        <p className={styles.pStyleMiaous}>
          {" "}
          <i style={{ marginTop: "10px", marginLeft: "15px" }}> # 056 </i>
        </p>

        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <img src={james} alt="james-team" className={styles.jamesDesktop} />
        </div>
        <div className={styles.jamesInfo}>
          <p className={styles.pStyle}>James</p>
          <p>
            <i>Alias Joris</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
