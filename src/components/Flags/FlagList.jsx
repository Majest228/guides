import React from 'react'
import './Flag.scss'
import FlagItem from './FlagItem'

const FlagList = ({ data }) => {
	return (
		<div className='flags-list'>
			{data.map(item => (
				<FlagItem key={item._id} item={item} />
			))}
		</div>
	)
}

export default FlagList
