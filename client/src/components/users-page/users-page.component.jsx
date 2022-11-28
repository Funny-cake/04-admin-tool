import React, { Component } from "react";
import styles from './users-page.component.scss';
import { connect } from "react-redux";
import { retrieveUsers, updateUser, deleteAllUsers } from "../../actions/users";

class UsersPage extends Component {
	constructor(props) {
		super(props);
		this.refreshData = this.refreshData.bind(this);

		//this.removeAllUsers = this.removeAllUsers.bind(this);

		this.state = {
			selectedIds: []
		};
	}

	componentDidMount() {
		this.props.retrieveUsers();
	}

	refreshData() {
		this.setState({
			selectedIds: []
		});
	}

	removeAllUsers() {
		this.props
			.deleteAllUsers()
			.then((response) => {
				console.log(response);
				this.refreshData();
			})
			.catch((e) => {
				console.log(e);
			});
	}

	render() {
		const { selectedIds } = this.state;
		const { users } = this.props;
		const getStatus = (user) => {
			const blocked = !!user.blockedAt;
			const deleted = !!user.deletedAt;

			switch(true) {
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
					<table class="table">
						<thead class="thead-light">
							<tr>
								<th scope="col"><button type="button" class="toggle_checked" id='all_select'>select all</button></th>
								<th scope="col">id</th>
								<th scope="col">name</th>
								<th scope="col">mail</th>
								<th scope="col">date</th>
								<th scope="col">last login</th>
								<th scope="col">status</th>
							</tr>
						</thead>
						<tbody>
						{users &&
							users.map((user, index) => (
								<tr key={index}>
									<th><input type="checkbox" /></th>
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
}

const mapStateToProps = (state) => {
	return {
	  users: state.users,
	};
  };
  
  export default connect(mapStateToProps, { retrieveUsers, updateUser, deleteAllUsers })(UsersPage);