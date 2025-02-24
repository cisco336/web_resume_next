export const skills = [
	{
		name: 'React.js',
		description:
			'Proficient in building dynamic and interactive user interfaces using React.js, leveraging its component-based architecture to create reusable UI components and optimize application performance.',
		iconUrl: 'https://example.com/icons/react.png',
	},
	{
		name: 'Next.js',
		description:
			'Experienced in utilizing Next.js for server-side rendering and static site generation, enhancing the performance and SEO of web applications while providing an excellent user experience.',
		iconUrl: 'https://example.com/icons/nextjs.png',
	},
	{
		name: 'Vitest',
		description:
			'Skilled in using Vitest for robust testing practices, ensuring code quality and reliability through efficient unit and integration testing of applications.',
		iconUrl: 'https://example.com/icons/vitest.png',
	},
	{
		name: 'Tailwind CSS',
		description:
			'Proficient in using Tailwind CSS for creating responsive and visually appealing layouts with utility-first CSS, enabling rapid design and customization of user interfaces.',
		iconUrl: 'https://example.com/icons/tailwind.png',
	},
	{
		name: 'Node.js',
		description:
			'Experienced in developing scalable back-end applications using Node.js, focusing on building RESTful APIs and microservices that power modern web applications.',
		iconUrl: 'https://example.com/icons/nodejs.png',
	},
	{
		name: 'Angular',
		description:
			'Knowledgeable in building single-page applications with Angular, implementing reactive programming and modular architecture to create maintainable and high-performance web applications.',
		iconUrl: 'https://example.com/icons/angular.png',
	},
	{
		name: 'C#',
		description:
			'Proficient in using C# for developing applications within the .NET framework, focusing on building robust server-side logic and applications.',
		iconUrl: 'https://example.com/icons/csharp.png',
	},
	{
		name: 'Git',
		description:
			'Skilled in version control using Git, facilitating collaboration within teams and maintaining code integrity through effective branching, merging, and pull request workflows.',
		iconUrl: 'https://example.com/icons/git.png',
	},
	{
		name: 'Express',
		description:
			'Experienced in using Express.js as a web application framework for Node.js, creating efficient server-side applications and APIs with a focus on simplicity and performance.',
		iconUrl: 'https://example.com/icons/express.png',
	},
	{
		name: 'Redux',
		description:
			'Proficient in managing application state using Redux, enabling predictable state management and enhancing the scalability of React applications.',
		iconUrl: 'https://example.com/icons/redux.png',
	},
	{
		name: 'NGRX',
		description:
			'Experienced in using NGRX for state management in Angular applications, implementing reactive programming principles to manage complex application states effectively.',
		iconUrl: 'https://example.com/icons/ngrx.png',
	},
	{
		name: 'RxJS',
		description:
			'Knowledgeable in using RxJS for reactive programming, enabling the handling of asynchronous data streams and complex event handling in web applications.',
		iconUrl: 'https://example.com/icons/rxjs.png',
	},
	{
		name: 'Cypress',
		description:
			'Skilled in using Cypress for end-to-end testing, ensuring the reliability and functionality of applications through automated testing of user interactions.',
		iconUrl: 'https://example.com/icons/cypress.png',
	},
	{
		name: 'Playwright',
		description:
			'Experienced in utilizing Playwright for browser automation and testing, enabling the creation of reliable, scalable tests across different browsers and devices.',
		iconUrl: 'https://example.com/icons/playwright.png',
	},
	{
		name: 'Jest',
		description:
			'Proficient in using Jest for unit testing JavaScript applications, implementing testing best practices to ensure code quality and reliability.',
		iconUrl: 'https://example.com/icons/jest.png',
	},
	{
		name: 'Sass',
		description:
			'Knowledgeable in using Sass for writing maintainable and modular CSS, enhancing the styling capabilities of web applications with variables, nesting, and mixins.',
		iconUrl: 'https://example.com/icons/sass.png',
	},
	{
		name: 'GraphQL',
		description:
			'Experienced in using GraphQL for efficient data querying and manipulation, enabling clients to request only the data they need and enhancing the performance of applications.',
		iconUrl: 'https://example.com/icons/graphql.png',
	},
];

const Skills = () => {
	return (
		<div>
			<h3 className='title text-2xl'>Skills</h3>
			{skills.map((skill, index) => (
				<div
					key={index}
					className='skill'>
					<img
						src={skill.iconUrl}
						alt={skill.name}
						className='icon'
					/>
					<div className='content'>
						<h4 className='name'>{skill.name}</h4>
						<p className='description'>{skill.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
