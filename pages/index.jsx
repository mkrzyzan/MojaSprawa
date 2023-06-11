import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import TokensBalancePanel from "../components/tokensBalanceDisplay";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NFTGallery />
        <NFTGallery />
        <TokensBalancePanel walletAddress={"vitalik.eth"} chain={"ETH_MAINNET"} />
      </main>
    </div>
  );
}
