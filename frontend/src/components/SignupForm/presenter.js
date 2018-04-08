import React from "react";
import styles from "/Users/jlee/Desktop/nomadgram/frontend/src/shared/formstyle.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const SignupForm = (props, context) => (
    <div className={styles.formComponent}>
        <h3 className={styles.signupHeader}>
            {context.t("Sign up to see photos and videos from your friends.")}
        </h3>
                <FacebookLogin
                    appId="1552841224770916"
                    autoLoad={false}
                    fields="name, email, picture"
                    callback={props.handleFacebookLogin}
                    icon="fa-facebook-official"
                    cssClass={styles.facebookLink}
            textButton={context.t("Log in with Facebook")} />
    
        <span className={styles.divider}>or</span>
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <input
                type="email"
                placeholder={context.t("Email")}
                className={styles.textInput}
                value={props.emailValue}
                onChange={props.handleInputChange}
                name="email"
            />
            <input
                type="text"
                placeholder={context.t("Full Name")}
                className={styles.textInput}
                value={props.fullNameValue}
                onChange={props.handleInputChange}
                name="fullName"
            />
            <input
                type="username"
                placeholder={context.t("Username")}
                className={styles.textInput}
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input
                type="password"
                placeholder={context.t("Password")}
                className={styles.textInput}
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input
                type="submit"
                value={context.t("Sign up")}
                className={styles.button}
                onChange={props.handleInputChange}
            />
        </form>
        <p className={styles.terms}>
            {context.t("By signing up, you agree to our ")}
            <span>{context.t("Terms & Privacy Policy")}</span>.
    </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    fullNameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default SignupForm;