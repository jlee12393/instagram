import React from "react";
import PropTypes from "prop-types";
// import Ionicon from "react-ionicons";
import styles from "/Users/jlee/Desktop/nomadgram/frontend/src/shared/formstyle.scss";
import FacebookLogin from "react-facebook-login";

const LoginForm = (props, context) => (
    <div className={styles.formComponent}>
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <input
                type="username"
                placeholder={context.t("Username")}
                className={styles.textInput}
                onChange={props.handleInputChange}
                name="username"
                value={props.usernameValue}
            />
            <input
                type="password"
                placeholder={context.t("Password")}
                className={styles.textInput}
                onChange={props.handleInputChange}
                name="password"
                value={props.passwordValue}
            />
            <input
                type="submit"
                value={context.t("Log in")}
                className={styles.button}
            />
        </form>
        <span className={styles.divider}>{context.t("or")}</span>
        <span>
            <FacebookLogin
                appId="1552841224770916"
                autoLoad={false}
                fields="name, email, picture"
                callback={props.handleFacebookLogin}
                icon="fa-facebook-official"
                cssClass={styles.facebookLink} 
                textButton={context.t("Log in with Facebook")}/>

        </span>
        <span className={styles.forgotLink}>
            {context.t("Forgot password?")}
        </span>
    </div>
);

LoginForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
};

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default LoginForm;