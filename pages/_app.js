import "../styles/globals.css";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { Component } from "react";

// const MyApp = (props) => {
// 	return (
// 		<Provider store={store}>
// 			<Component {...props.appProps} />
// 		</Provider>
// 	);
// };

// export const getServerSideProps = async ({ Component, ctx }) => {
// 	const appProps = Component.getInitialProps ? await Component.getServerSideProps(ctx) : {};
// 	console.log(appProps);
// 	return { appProps };
// };

// const makeStore = () => store;

// export default withRedux(makeStore)(MyApp);

class MyApp extends App {
	static async getServerSideProps({ Component, ctx }) {
		const appProps = Component.getServerSideProps
			? await Component.getServerSideProps(ctx)
			: {};
		console.log(appProps);
		return { appProps };
	}
	render() {
		const { Component, appProps } = this.props;
		return (
			<Provider store={store}>
				<Component {...appProps} />
			</Provider>
		);
	}
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
