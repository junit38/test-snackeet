import { useSnackeetState, useSnackeetDispatch } from 'lib/SnackeetContext'


export default function useNavigation () {
	const dispatch = useSnackeetDispatch()
	const { snackeet, current_page_index, disable_interactions } = useSnackeetState()

	const currentPage = snackeet.pages[current_page_index]

	function goNext () {
		if (disable_interactions) return
		if (currentPage.next && currentPage.next !== 'next') {
			if (currentPage.next === currentPage._id) {
				dispatch({ type: 'GO_FORWARD' })
			} else {
				dispatch({ type: 'GO_TO', payload: currentPage.next })
			}
		} else {
			dispatch({ type: 'GO_FORWARD' })
		}
	}

	function goBack () {
		dispatch({ type: 'GO_BACK' })
	}

	return {
		snackeet,
		currentPage,
		goNext,
		goBack
	}
}
