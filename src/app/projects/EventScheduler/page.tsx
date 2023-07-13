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
			<Table data={data} setData={setData} />
			<form className={styles.mainForm} onSubmit={handleSubmit(createNewData)}>
				<br />
				<input
					{...register('name', { required: true })}
					className={styles.textBar}
					placeholder='Name'
				></input>
				<br />
				<input
					type='number'
					{...register('people', { required: true })}
					className={styles.textBar}
					placeholder='People'
				></input>
				<br />
				<input
					type='number'
					{...register('price', { required: true })}
					className={styles.textBar}
					placeholder='Price'
				></input>
				<br />
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
