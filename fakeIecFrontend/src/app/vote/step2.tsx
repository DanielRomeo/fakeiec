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

  const options = ["Option 1", "Option 2", "Option 3"]; // Replace these with your actual options

  return (
    <div>
    	<form onSubmit={handleSubmit(handleFinalSubmit)}>

			{/* NATIONAL VOTE */}
			<div>
				<label>National Vote</label>
				{options.map(option => (
					<div key={option}>
					<input
						className='form-control'
						type="radio"
						value={option}
						{...register('nationalVote', { required: 'National vote is required' })}
					/>
					<label>{option}</label>
					</div>
				))}
				{errors.nationalVote && <span>{errors.nationalVote.message}</span>}
			</div>

			{/* PROVINCIAL VOTE */}
			<div>
				<label>Provincial Vote</label>
				{options.map(option => (
					<div key={option}>
					<input
					className='form-control'
						type="radio"
						value={option}
						{...register('provincialVote', { required: 'Provincial vote is required' })}
					/>
					<label>{option}</label>
					</div>
				))}
				{errors.provincialVote && <span>{errors.provincialVote.message}</span>}
			</div>

			{/* REGIONAL/DISTRICT VOTE */}
			<div>
				<label>Regional Vote</label>
				{options.map(option => (
					<div key={option}>
					<input
						type="radio"
						value={option}
						{...register('regionalVote', { required: 'Regional vote is required' })}
					/>
					<label>{option}</label>
					</div>
				))}
				{errors.regionalVote && <span>{errors.regionalVote.message}</span>}
			</div>

			<button type="button" onClick={onPrevious}>Previous</button>
			<button type="submit">Submit</button>
      	</form>
    </div>
  );
};

export default Step2;
