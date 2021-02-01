import "../styles/globals.css";
import { wrapper } from "../redux/store/store";
import React from "react";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(App);

// Without Legacy method
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

