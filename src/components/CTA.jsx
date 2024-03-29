import styles from "../style";
import Button from "./Button";
import {But} from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Try our other services now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Any Business related to Software Development, Web Development, Mobile App Development, Digital Marketing, Graphic Designing, Content Writing, etc. can contact us for your projects.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <But />
    </div>
  </section>
);

export default CTA;
