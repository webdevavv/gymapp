import { FC } from "react";
import styles from "./Quote.module.scss";

interface IQuote {
  mainText: string;
  secondText: string;
}

const Quote: FC<IQuote> = ({ mainText, secondText }) => {
  return (
    <div>
      <div className={styles.quoteWrapper}>
        {mainText}
        <span className={styles.quoteWecondText}>{secondText}</span>
      </div>
    </div>
  );
};

export default Quote;
