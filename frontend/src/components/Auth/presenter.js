import React from "react";
import styles from "./styles.scss";
import {LoginForm, SignupForm} from "components/AuthForms";

const Auth = (props, context) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
        </div>
        <div className={styles.column}>
        <div classsName={`${styles.whiteBox} ${styles.formBox}`}>
            {props.action === "login" && <LoginForm/>}
            {props.action === "signup" && <SignupForm />}
        </div>
            <div className={styles.whiteBox}>
                {props.action ==="login" && (
                    <p>
                        Don't have an account?{" "}
                        <span className={styles.changeLink} onClick={props.changeAction}>
                            Sign up
                        </span>
                    </p>

                )}
                {props.action === "signup" && (
                 <p>
                    Don't have an account?{" "}
                    <span className={styles.changeLink} onClick={props.changeAction}>
                        Sign up
                    </span>
                 </p>
                )}
            </div>
            <div className={styles.appBox}>
                <span>Get the app</span>
                <div className={styles.appstores}>
                    <img
                        src={require("images/ios.png")}
                        alt="Download it on the Apple Appstore"
                    />
                    <img
                        src={require("images/android.png")}
                        alt="Download it on the Apple Appstore"
                    />
                </div>
            </div>
        </div>
    </main>
);
export default Auth;