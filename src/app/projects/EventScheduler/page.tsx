'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Table from '../../../../components/EventSchedulierTable/Table'
import styles from '../projects.module.scss'
import defaultData from './testData.json'
export default function page() {
	const [formBar, setformBar] = useState({
		name: '',
		price: '',
		people: '',
		description: '',
	})
	const [data, setData] = useState(defaultData)
	const { register, reset, handleSubmit } = useForm({
		mode: 'onChange',
	})

	const createNewData = (formBar: any) => {
		setData(prev => [
			{
				id: prev.length + 1,
				...formBar,
			},
			...prev,
		])
		reset()
	}
	return (
		<div>
			<Table array={data} setData={setData} />
			<form className={styles.mainForm} onSubmit={handleSubmit(createNewData)}>
				<br />
				{/* <label>Name:</label> */}
				<input
					{...register('name', { required: true })}
					className={styles.textBar}
					placeholder='Name'
				></input>
				<br />
				{/* <label>People</label> */}
				<input
					{...register('people', { required: true })}
					className={styles.textBar}
					placeholder='People'
				></input>
				<br />
				{/* <label>Price:</label> */}
				<input
					{...register('price', { required: true })}
					className={styles.textBar}
					placeholder='Price'
				></input>
				<br />
				{/* <label>Description:</label> */}
				<input
					{...register('description')}
					className={styles.textBar}
					placeholder='Description'
				></input>
				<button className={styles.button}>Add</button>
			</form>
		</div>
	)
}
