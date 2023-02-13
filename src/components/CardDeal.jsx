import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Check Out Mark--2 <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Brixy Mark -2 is a web based functional Assistant Model to do web based searches and respond to the user with proper acuracy rate of 78%.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
    </div>
  </section>
);

export default CardDeal;
