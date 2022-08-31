import React from 'react'

const FlagItem = ({ item }) => {
	return (
		<div className='flag'>
			<img src={item.url} alt='' />
			<p>{item.name}</p>
		</div>
	)
}

export default FlagItem
