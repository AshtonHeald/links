import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Footer from "./components/Footer";
import headshot from "./assets/ash-happy.png";

function App() {
	return (
		<div id="container">
			<main id="card">
				<Header img={headshot} />
				<Menu />
				<Footer />
			</main>
		</div>
	);
}

export default App;
