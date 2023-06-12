import styles from "../../styles/Navbar.module.css";
export default function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="/EXGBLogo.png"
				></img>
			</a>
        </div>
    );
}