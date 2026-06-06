import { sendOtp } from "services/auth";

import styles from "./SendOtpForm.module.css";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;
    //validation
    console.log(mobile);

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) console.log(error.response.data.message);

    console.log({ response, error });
    console.log(error.response?.data);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورو به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار لطفا شماره موبایل را وارد کنید. کد تایید
        به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
