import 'normalize.css'
import 'styles/global.css'
import 'styles/fonts.css'
import React, { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import {
	createMuiTheme,
	ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles'
import { SITE_TITLE } from 'lib/constants'

const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#165CE3',
		},
		secondary: {
			main: '#F7B501'
		}
	},
	typography: {
		fontFamily: 'Airbnb Cereal App Book'
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: '27px',
				minHeight: '48px',
				padding: '4px 24px'
			}
		}
	}
})

// eslint-disable-next-line react/prop-types
export default function App ({ Component, pageProps }) {
	useEffect(
		() => {
			const jssStyles = document.querySelector('#jss-server-side')
			if (jssStyles && jssStyles.parentNode) {
				jssStyles.parentNode.removeChild(jssStyles)
			}
		},
		[]
	)

	return (
		<MuiThemeProvider theme={customTheme}>
			<ThemeProvider theme={customTheme}>
				<Head>
					<title>{SITE_TITLE}</title>
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</MuiThemeProvider>
	)
}
