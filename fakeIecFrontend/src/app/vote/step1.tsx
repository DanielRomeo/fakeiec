import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Styles from '../_styles/vote/vote.module.scss'


interface Step1Props {
  onNext: (data: Step1FormData) => void;
  defaultValues: Step1FormData;
}

interface Step1FormData {
  firstName: string;
  lastName: string;
}

const Step1: React.FC<Step1Props> = ({ onNext, defaultValues }) => {
	const { register, handleSubmit, formState: { errors } } = useForm<Step1FormData>({ defaultValues });

	const onSubmit: SubmitHandler<Step1FormData> = data => {
		onNext(data);
	};

	return (
		<div className={`${Styles.step1} `}>
			<Container>
				<Row>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="firstName">First Name</label>
							<input className={`${Styles.step1inputBox} form-control `}
								{...register('firstName', { required: 'First name is required' })} 
							/>
							{errors.firstName && <span className={Styles.spanError} >{errors.firstName.message}</span>}
						</div>

						<div>
							<label htmlFor="lastName">Last Name</label>
							<input className={`${Styles.step1inputBox} form-control`} 
								{...register('lastName', { required: 'Last name is required' })} 
							/>
							{errors.lastName && <span className={Styles.spanError}>{errors.lastName.message}</span>}
						</div>
						<Button className={`${Styles.nextButton} shadow-lg `} type="submit">Next</Button>
					</form>
				</Row>
			</Container>
			
		</div>
	);
};

export default Step1;
