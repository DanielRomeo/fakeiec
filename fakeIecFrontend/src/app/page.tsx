'use client'
import Link from 'next/link';
import React, { useCallback, useState } from "react";
import {Container, Row, Col, Button, Card, Image, CardText, CardBody} from 'react-bootstrap';

// social icons:
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

// navbar, footer and components:
import MainNavbar from './_components/navbar'
import WideCard from './_components/wide_card'
import ChartCard from './home/chartCard'
import TotalVotesCard from './home/TotalVotesCard'
import VoterTurnoutCard from './home/VoterTurnoutCard'

import RegistrationAnalysisChart from './home/RegistrationAnalysisChart'

// styles:
import Styles from './_styles/home/home.module.scss'

export default function Home() {

	const [height, setHeight] = useState<number>(0); // State to store calculated height
	const handleLoadComplete = (img: any) => {
		const newHeight =
			img.naturalHeight * (img.clientWidth / img.naturalWidth);
		setHeight(newHeight);
	};

	return (
		<div className={Styles.main}>
			<MainNavbar></MainNavbar>
				<Container className={Styles.mainContainer}>

					<Row className={Styles.mainRow}>
						<Col className={``} lg={6} md={6} sm={12}>
							<div className={Styles.informationBox}>
								<h1>FAKE IEC APPLICATION</h1>
								<p>Fake Iec application is software developed by Daniel Mamphekgo and friends to illustrate competency in data science & working with data analytically.</p>
								<hr/>
								<p>The application is meant to demonstrate voting on a website & viewing the voting statistics.</p>
							
								<div className={Styles.informationBoxButtons}>
									<Button className={` shadow-lg border-0 rounded-0 ${Styles.registerToVoteButton}`}>
										 <Link className={`${Styles.link}`} href="/register">Register To Vote</Link>
									</Button>

									<Button className={`shadow-lg border-0 rounded-0 ${Styles.viewAnalyticsButton}`}>
										<Link className={`${Styles.link}`} href="/">View Analytics</Link>
									</Button>
								</div>
							</div>
						</Col>

						<Col className={``} lg={6} md={6} sm={12}>
							<ChartCard>gang</ChartCard>
						</Col>

					</Row>

					<Row className={`${Styles.secondaryRow}`}>
						<TotalVotesCard></TotalVotesCard>
						<VoterTurnoutCard></VoterTurnoutCard>
					</Row>

					<hr />

					<Row className={`${Styles.registrationAnalysisRow}`}>
						<h3>
							Registration Analysis
						</h3>

						<Card className={`shadow-lg border-0 rounded-0`}>
							<CardBody>
								<Row>
									<Col lg={6} md={6} sm={12}>
									
									</Col>

									<Col lg={6} md={6} sm={12}>
									something else here bro
									</Col>
								</Row>
								
							</CardBody>
						</Card>
					</Row>

					
				</Container>
		</div>
	);
}
