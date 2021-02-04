import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export default function useExamples () {
	const { data, error } = useSWR(`/api/examples_list`, fetcher)

	return {
		examples: data,
		is_loading: !error && !data,
		error
	}
}
