import React from "react";
import styles from "/Users/jlee/Desktop/nomadgram/frontend/src/shared/formstyle.scss";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";


const LoginForm = (props, context) => (
    <div className={styles.formComponent}>
        <form className={styles.form}>
            <input type="text" placeholder={context.t("Username")} className={styles.textInput} />
            <input type="password" placeholder={context.t("Password")} className={styles.textInput} />
            <input type="submit" value={context.t("Log in")} className={styles.button} />
        </form>
        <span className={styles.divider}>or</span>
        <span className={styles.facebookLink}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> {context.t("Log in with Facebook")}
        </span>
        <span className={styles.forgotLink}>{context.t("Forgot password?")}</span>
    </div>
);

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};
export default LoginForm;