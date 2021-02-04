import React from 'react'
import NextDocument, { Head, Main, NextScript, Html } from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'

import {
	SITE_AUTHOR,
	SITE_DESCRIPTION,
	SITE_IMAGE,
	SITE_NAME,
	SITE_TITLE,
} from 'lib/constants'

export default class Document extends NextDocument {
	static async getInitialProps (ctx) {
		const styledComponentSheet = new StyledComponentSheets()
		const materialUiSheets = new MaterialUiServerStyleSheets()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => styledComponentSheet.collectStyles(
						materialUiSheets.collect(<App {...props} />)
					)
				})
			const initialProps = await NextDocument.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [
					<React.Fragment key="styles">
						{initialProps.styles}
						{materialUiSheets.getStyleElement()}
						{styledComponentSheet.getStyleElement()}
					</React.Fragment>
				]
			}
		} finally {
			styledComponentSheet.seal()
		}
	}

	render () {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta name="description" content={SITE_DESCRIPTION} />
					<meta name="author" content={SITE_AUTHOR} />
					<link
						rel="shortcut icon"
						href="/static/favicon.ico"
						type="image/x-icon"
					/>
					<link rel="icon" href="/static/favicon.ico" type="image/x-icon" />

					{ /* Google fonts 16 fonts initially selected */}

					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Fraunces&family=Hachi+Maru+Pop&family=Imbue&family=Lato&family=Lora&family=Montserrat&family=Noto+Sans+JP&family=Open+Sans&family=Oswald&family=PT+Sans&family=Poppins&family=Raleway&family=Roboto&family=Roboto+Condensed&family=Slabo+27px&family=Source+Sans+Pro&family=Ubuntu&family=Yusei+Magic&display=swap" rel="stylesheet" />
					{/* PWA primary color */}
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content={SITE_NAME} />
					<meta property="og:title" content={SITE_TITLE} />
					<meta property="og:description" content={SITE_DESCRIPTION} />
					<meta property="og:image" content={SITE_IMAGE} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content={SITE_NAME} />
					<meta name="twitter:title" content={SITE_TITLE} />
					<meta name="twitter:description" content={SITE_DESCRIPTION} />
					<meta property="twitter:image" content={SITE_IMAGE} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
