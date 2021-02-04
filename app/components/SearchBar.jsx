import _ from 'lodash'
import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { TextField, IconButton, InputAdornment } from '@material-ui/core'
import { Search, Clear } from '@material-ui/icons'

SearchBar.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	size: PropTypes.string
}
export default function SearchBar ({
	value,
	onChange,
	placeholder,
	size = 'small',
	...other
}) {
	function resetSearch () {
		onChange('')
	}

	return (
		<TextField
			size={size}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						{value === '' ? (
							<IconButton size="small">
								<Search />
							</IconButton>
						) : (
							<IconButton onClick={resetSearch} size="small">
								<Clear />
							</IconButton>
						)}
					</InputAdornment>
				)
			}}
			{...other}
		/>
	)
}
