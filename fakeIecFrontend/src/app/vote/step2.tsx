import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap'

import { useForm, SubmitHandler } from 'react-hook-form';
import Styles from '../_styles/vote/vote.module.scss'


interface Step2Props {
  onPrevious: () => void;
  onSubmit: (data: Step2FormData) => void;
  defaultValues: Step2FormData;
}

interface Step2FormData {
  nationalVote: string;
  provincialVote: string;
  regionalVote: string;
}

const Step2: React.FC<Step2Props> = ({ onPrevious, onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Step2FormData>({ defaultValues });

  const handleFinalSubmit: SubmitHandler<Step2FormData> = data => {
    onSubmit(data);
  };

  const options = ["ANC", "PAC", "BOSA", "IFP", "DA", "MK"]; // Replace these with your actual options

  return (
    <div className={`${Styles.step2}`}>
    	<form onSubmit={handleSubmit(handleFinalSubmit)}>
			<Container className={`${Styles.container}`}>
				<Row>
					{/* NATIONAL VOTE */}
					<Col lg={4} md={4} sm={12}>
						<label className={Styles.voteLabel}>NATIONAL VOTE</label>
						{options.map(option => (
							<div key={option}>
								<input
									type="radio"
									value={option}
									{...register('nationalVote', { required: 'National vote is required' })}
								/>
								<label> &nbsp; { option}</label>
								<hr style={{"borderTop": "dotted 1px"}} />
							</div>
						))}
						{errors.nationalVote && <span>{errors.nationalVote.message}</span>}
					</Col>

					{/* PROVINCIAL VOTE */}
					<Col lg={4} md={4} sm={12}>
						<label className={Styles.voteLabel}>PROVINCIAL VOTE</label>
						{options.map(option => (
							<div key={option}>
							<input
							// className='form-control'
								type="radio"
								value={option}
								{...register('provincialVote', { required: 'Provincial vote is required' })}
							/>
							<label> &nbsp; {option}</label>
							<hr style={{"borderTop": "dotted 1px"}} />
							</div>
						))}
						{errors.provincialVote && <span>{errors.provincialVote.message}</span>}
					</Col>

					{/* REGIONAL/DISTRICT VOTE */}
					<Col lg={4} md={4} sm={12}>
						<label className={Styles.voteLabel}>REGIONAL VOTE</label>
						{options.map(option => (
							<div key={option}>
							<input
								type="radio"
								value={option}
								{...register('regionalVote', { required: 'Regional vote is required' })}
							/>
							<label> &nbsp; {option}</label>
							<hr style={{"borderTop": "dotted 1px"}} />
							</div>
						))}
						{errors.regionalVote && <span>{errors.regionalVote.message}</span>}
					</Col>
				</Row>

				<Row>
					<button type="button" onClick={onPrevious}>Previous</button>
					<button type="submit">Submit</button>
				</Row>
			</Container>
			
      	</form>
    </div>
  );
};

export default Step2;
