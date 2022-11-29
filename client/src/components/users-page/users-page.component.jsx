import React, { useState, useEffect } from "react";
import styles from './users-page.component.scss';
import { connect } from "react-redux";
import { retrieveUsers, updateUser, deleteAllUsers } from "../../actions/users";

function UsersPage(props) {
	const { users } = props;

	const [checked, setChecked] = useState([]);

	useEffect(() => {
		props.retrieveUsers();
	}, []);

	const refreshData = () => {
		setChecked([]);
	}

	const removeAllUsers = () => {
		props
			.deleteAllUsers()
			.then((response) => {
				refreshData();
			})
			.catch((e) => {
				console.error(e);
			});
	}

	const blockUser = () => {
		const promises = checked.map((id) => props.updateUser(id, { blockedAt: new Date() }));

		Promise
			.all(promises)
			.then((response) => {
				props.retrieveUsers();
				refreshData();
			})
			.catch((e) => {
				console.error(e);
			});
	};

	const unblockUser = () => {
		const promises = checked.map((id) => props.updateUser(id, { blockedAt: null }));

		Promise
			.all(promises)
			.then((response) => {
				props.retrieveUsers();
				refreshData();
			})
			.catch((e) => {
				console.error(e);
			});
	};

	const deleteUser = () => {
		const promises = checked.map((id) => props.updateUser(id, { deletedAt: new Date() }));

		Promise
			.all(promises)
			.then((response) => {
				props.retrieveUsers();
				refreshData();
			})
			.catch((e) => {
				console.error(e);
			});
	};

	const checkUser = (event) => {
		var updatedList = [...checked];
		var value = parseInt(event.target.value);

		if (event.target.checked) {
			updatedList = [...checked, value];
		} else {
			updatedList.splice(checked.indexOf(value), 1);
		}
		setChecked(updatedList);
	};

	const getStatus = (user) => {
		const blocked = !!user.blockedAt;
		const deleted = !!user.deletedAt;

		switch (true) {
			case !blocked && !deleted:
				return "ACTIVE";
			case blocked && !deleted:
				return "BLOCKED";
			case !blocked && deleted:
			case blocked && deleted:
				return "DELETED";
		}
	}

	return (
		<div className={styles.usersPage} >
			<div>Users List</div>
			<div className={styles.container}>
				<div className={styles.toolbar}>
					<button name="block" onClick={blockUser}>block</button>
					<button name="unblock" onClick={unblockUser}>unblock</button>
					<button name="delete" onClick={deleteUser}>delete</button>
				</div>
				<table class="table">
					<thead class="thead-light">
						<tr>
							<th scope="col"><input type="checkbox" /></th>
							<th scope="col">id</th>
							<th scope="col">name</th>
							<th scope="col">mail</th>
							<th scope="col">registered</th>
							<th scope="col">last login</th>
							<th scope="col">status</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user, index) => (
								<tr key={index}>
									<th><input type="checkbox" value={user.id} checked={checked.indexOf(user.id) != -1} onChange={checkUser} /></th>
									<th scope="row">{user.id}</th>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.createdAt}</td>
									<td>{user.lastLoginAt}</td>
									<td>{getStatus(user)}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div >
	);
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, { retrieveUsers, updateUser, deleteAllUsers })(UsersPage);