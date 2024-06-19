'use client'
import React, { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import {Row, Col, Container, Card} from 'react-bootstrap'
import MainNavbar from '../_components/navbar'

// import styles
import Styles from '../_styles/vote/vote.module.scss'

const Register: React.FC = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		addressProvince: '',
		addressDistrict: '',
		ethnicity: '',
		gender: '',
		nationalVote: '',
		provincialVote: '',
		regionalVote: '',
	});

	const handleNextStep = (data: any) => {
		setFormData(prev => ({ ...prev, ...data }));
		setStep(step + 1);
	};

	const handlePreviousStep = () => {
	setStep(step - 1);
	};

	const handleSubmit = (data: any) => {
		setFormData(prev => ({ ...prev, ...data }));
		// Here you can handle the final submission of formData
		console.log("Final form data:", formData);
	};

	return (
		<div className={`${Styles.main}`}>
			<MainNavbar></MainNavbar>
			<Container className={`${Styles.mainContainer}`}>
				<Row>
					<Col style={{width: '100%'}} lg={12} md={12} sm={12}>
						<Card className={` ${Styles.stepCard} shadow-lg border-0 rounded-0 `}>

								{step === 1 && <Step1 onNext={handleNextStep} defaultValues={formData} />}
								{step === 2 && (
								<Step2
									onPrevious={handlePreviousStep}
									onSubmit={handleSubmit}
									defaultValues={formData}
								/>
								)}
						</Card>
					</Col>
					
				</Row>
			</Container>
		</div>
	);
};

export default Register;
