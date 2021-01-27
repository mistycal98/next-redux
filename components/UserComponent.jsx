import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userGenerators } from "../redux/actions/userGenerator.action";
import { userTypes } from "../redux/constants/userTypes.action";

const UserComponent = (props) => {
	console.log(props.users);
	useEffect(() => {
		props.fetchUsers();
	}, []);

	return (
		<>
			<h1>User</h1>
			<div className="flex flex-row flex-wrap">
				{props.users ? (
					props.users.map((user) => {
						return (
							<div key={user.id} className="border m-3 p-3 w-56 h-auto rounded-md">
								<p>{user.name}</p>
							</div>
						);
					})
				) : (
					<h1>Loading</h1>
				)}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		users: state.userReducer.users[0],
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: (payload) => dispatch(userGenerators(userTypes.GET_USERS, payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
