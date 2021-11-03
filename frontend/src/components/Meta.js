import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
	return (
		<div>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Helmet>
		</div>
	)
}

Meta.defaultProps = {
	title: 'CozyShop',
	description: 'We sell the best and coziest products',
	keywords: 'cozy, cozy aesthetic, hugs, warmth, home',
}
export default Meta
