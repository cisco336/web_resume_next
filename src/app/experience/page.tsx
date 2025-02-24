export type CardProps = {
	title: string;
	role: string;
	date: string;
	imageUrl: string;
};

export const Card = ({ title, role, date, imageUrl }: CardProps) => {
	return (
		<div className='card'>
			<div className='card-header'>
				<img
					className='object-cover w-full h-16'
					src={imageUrl}
				/>
				<h3 className='card-header-title text-white'>{title}</h3>
			</div>
			<div className='card-body'>
				<p>{role}</p>
				<p>{date}</p>
			</div>
		</div>
	);
};

const Experience = () => {
	const experience = [
		{
			title: 'Globant',
			role: 'Web UI Developer',
			date: '2024 - Current',
			imageUrl: 'img/globantWP.jpg',
		},
		{
			title: 'Gorilla Logic',
			role: 'Fullstack Node/React Developer',
			date: '2021 - 2024',
			imageUrl: 'img/gorillaLogicWp.jpg',
		},
		{
			title: 'Prodigious',
			role: 'Frontend Developer',
			date: '2019 - 2021',
			imageUrl: 'img/prodigiousWp.jpg',
		},
		{
			title: 'Heinsohn',
			role: 'Frontend Developer',
			date: '2018 - 2019',
			imageUrl: 'img/redWp.jpg',
		},
		{
			title: 'Globant',
			role: 'Frontend Developer',
			date: '2017 - 2018',
			imageUrl: 'img/globantWP.jpg',
		},
	];
	return (
		<div>
			<h3 className='title text-2xl'>Experience</h3>
			<p className='pb-6'>
				Throughout my career, I have had the opportunity to work with a diverse
				range of technologies and collaborate with talented teams on innovative
				projects. My experiences span various roles, where I have honed my
				skills in both front-end and back-end development, focusing on creating
				user-friendly applications that meet business needs.
			</p>
			<div className='grid grid-cols-[repeat(auto-fit,_minmax(150,_1fr))] gap-4'>
				{experience.map((exp, index) => (
					<Card
						key={index}
						title={exp.title}
						role={exp.role}
						date={exp.date}
						imageUrl={exp.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default Experience;
