import Footer from "../components/navigation/footer";
import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
            {children}
			<Footer />
		</div>
	);
}
