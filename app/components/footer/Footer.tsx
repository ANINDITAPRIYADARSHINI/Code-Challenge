import Link from "next/link";
import styles from "./footer.module.css";


export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Created by Anindita Priyadarshini</div>
            <div className={styles.text}>Privacy Policy</div>
        </div>
    )
}