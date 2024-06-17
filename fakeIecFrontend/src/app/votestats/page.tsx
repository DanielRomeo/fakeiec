'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import {Row, Col, Container, Card, CardBody} from 'react-bootstrap'
import MainNavbar from '../_components/navbar'

// import styles
// import Styles from '../_styles/votestats/votestats.module.scss'
import Styles from '../_styles/votestats/votestats.module.scss'

const VoteStatsPage: React.FC = () => {
	
	return (
		<div className={`${Styles.main}`}>
			<MainNavbar></MainNavbar>

			<Container className={`${Styles.mainContainer}`}>
				<Row className={`${Styles.genderVotesRow}`}>
					<h3 className={Styles.headersInRows}>
						Votes per political party
					</h3>

					<Card className={`shadow-lg border-0 rounded-0`}>
						<CardBody>
							<Row>
								<Col lg={6} md={6} sm={12}>
									<Image
										src="/votes_per_party_distribution-1.png"
										width={500}
										height={400}
										alt="Picture of the author that uses the platform to write journals."
									/>
								</Col>

								<Col lg={6} md={6} sm={12}>
									<Card.Title>Based off of the analytical analysis of the data: </Card.Title>
										<p>
											The graph on the left shows the total number of votes each political party recieved in the election, and out of a total of 685 votes:
										</p>
										<p>
											The winner of the election was the <span style={{color: 'green'}}>DA</span> with <span style={{color: 'green'}}>49 votes</span>. 
										</p>
										<p>The party with the least votes is <span style={{color: 'green'}}>VFF</span> with <span style={{color: 'green'}}>32 votes</span>.</p>
								</Col>
							</Row>
							
						</CardBody>
					</Card>
				</Row>
				<br />
				<br />
				<Row className={`${Styles.genderVotesRow}`}>
					<h3 className={Styles.headersInRows}>
						Votes per Ethnical background
					</h3>

					<Card className={`shadow-lg border-0 rounded-0`}>
						<CardBody>
							<Row>
								<Col lg={6} md={6} sm={12}>
									<Image
										src="/ethnicity_distribution-1.png"
										width={500}
										height={400}
										alt="Picture of the author that uses the platform to write journals."
									/>
								</Col>

								<Col lg={6} md={6} sm={12}>
									<Card.Title>Based off of the analytical analysis of the data: </Card.Title>
										<p>The data shows that out of a total of <span style={{color: 'green'}}>685 votes</span>, the coloured ethnicity is the group who voted the most with a total of <span style={{color: 'green'}}>275 votes</span>. </p>
										<p>The black ethnicity is the group with the least voter confidence, only <span style={{color: 'green'}}>230</span> of them showed up to the polls. </p>
								
								</Col>
							</Row>
							
						</CardBody>
					</Card>
				</Row>
			</Container>
		</div>
	);
};

export default VoteStatsPage;
