import styled from 'styled-components'
import Head from 'next/head'

export default function Custom404 () {
	return (
		<ErrorPage>
			<Head>
				<title>{'Snackeet - 404'}</title>
			</Head>
			<div className='container'>
				<img src='/static/logo.png'/>
				<h2>
					{`We can't find this Snackeet, looks like it might no longer be published.`}
				</h2>
			</div>
		</ErrorPage>
	)
}

const ErrorPage = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		text-align: center;
	}

	img {
		width: 200px;
		height: auto;
	}
`
