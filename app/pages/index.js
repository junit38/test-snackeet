import { useState, useEffect } from 'react';
import userService from '../lib/services/userService';
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import SearchBar from 'components/SearchBar'
import { defaultUsers } from 'lib/constants'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		padding: '20px',
		backgroundColor: '#f5f5f5',
		'& > *': {
			margin: theme.spacing(2, 0)
		}
	}
}))

export default function Home () {
	const classes = useStyles();
	const [search, setSearch] = useState('');
	const [users, setUsers] = useState([]);
	const [usersFiltered, setUsersFiltered] = useState([]);
	let timeout = 0;

	useEffect(() => {
		userService.getAll()
			.then(function(users) {
				setUsers(users.data);
				setUsersFiltered(users.data);
			})
	}, []);

	const filterUsers = () => {
		const usersFilteredConst = users.filter(user => search === '' || user.first_name.toLowerCase().includes(search) || user.last_name.toLowerCase().includes(search))
		setUsersFiltered(usersFilteredConst);
	}

	const onChangeSearchBar = (e) => {
		setSearch(e.target.value.toLowerCase())
		if (e.target.value === '')
			setUsersFiltered(users);
		else {
			_.debounce(() => filterUsers(), 500)()
		}
	}

	return (
		<Container className={classes.root}>

			<SearchBar value={search} placeholder="Search Users" onChange={onChangeSearchBar}/>
			{/* Finish implementing SearchBar */}
			
			{
				usersFiltered
				  .map((user) =>
					<User key={user.first_name + user.last_name} first_name={user.first_name} last_name={user.last_name}/>
				  )
			}
			{/* Display Users */}

		</Container>
	)
}

function User ({ first_name, last_name }) {
	return (
		<div>
			<span>{first_name}</span>
			<span>{last_name}</span>
		</div>
	)
}

