import React from 'react';
import styles from './UsersPage.scss';

export default function UsersPage() {

	var flag = false;
	$('.toggle_checked').on('click', function () {
		$('.table :checkbox').prop('checked', flag = !flag);
	});

	return (
		<div className={styles.usersPage}>
			<div>UsersPage</div>
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
						<tr>
							<th><input type="checkbox" /></th>
							<th scope="row">1</th>
							<td>name</td>
							<td>users@gmail.com</td>
							<td>date</td>
							<td>last login</td>
							<td>status</td>
						</tr>
						<tr>
							<th><input type="checkbox" /></th>
							<th scope="row">1</th>
							<td>name</td>
							<td>users@gmail.com</td>
							<td>date</td>
							<td>last login</td>
							<td>status</td>
						</tr>
						<tr>
							<th><input type="checkbox" /></th>
							<th scope="row">1</th>
							<td>name</td>
							<td>users@gmail.com</td>
							<td>date</td>
							<td>last login</td>
							<td>status</td>
						</tr>
						<tr>
							<th><input type="checkbox" /></th>
							<th scope="row">1</th>
							<td>name</td>
							<td>users@gmail.com</td>
							<td>date</td>
							<td>last login</td>
							<td>status</td>
						</tr>
						<tr>
							<th><input type="checkbox" /></th>
							<th scope="row">1</th>
							<td>name</td>
							<td>users@gmail.com</td>
							<td>date</td>
							<td>last login</td>
							<td>status</td>
						</tr>
						<tr>
							<th><input type="checkbox" /></th>
							<th scope="row">1</th>
							<td>name</td>
							<td>users@gmail.com</td>
							<td>date</td>
							<td>last login</td>
							<td>status</td>
						</tr>
						<tr>
							<th><input type="checkbox" /></th>
							<th scope="row">1</th>
							<td>name</td>
							<td>users@gmail.com</td>
							<td>date</td>
							<td>last login</td>
							<td>status</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div >
	)
}