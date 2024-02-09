'use client';
import styles from "./page.module.css";
import { useFormState } from 'react-dom'
import { sendCoins } from "@/api/coin";


export default function Home() {


  const initialState = {
    message: '',
  }

  const [state, formAction] = useFormState(sendCoins, initialState);

  return (
    <div className="hero bg-secondary">
      <div className="hero-body text-center">
        <h3>Free Litecoin Testnet Coins every hour!</h3>
        <p>Enter your address below to receive free LTC.</p>
        <form action={formAction}>
          <p aria-live="polite" className="sr-only">
            {state?.message}
          </p>
          <div className={["input-group", styles.inputGrp].join(' ')}>
            <input type="text" className={["form-input", styles.form].join(' ')} placeholder="Enter your address" name="ltc_address" />
            <button className="btn btn-primary input-group-btn">Get Coins</button>
          </div>
        </form>
      </div>

    </div>);
}
