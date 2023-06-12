import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="/EXGBLogo.png"
				></img>
			</a>
			
			<h2><Link href="/crypto">crypto</Link></h2>
			<h2><Link href="/nfts">NFTs</Link></h2>
			<h2><Link href="/history">History</Link></h2>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
