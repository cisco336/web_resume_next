export default function Home() {
	const content = (
		<p>
			Dynamic Full-Stack Developer with a proven track record of delivering
			high-quality web applications using React.js, Angular, and Node.js. I
			specialize in crafting intuitive user interfaces and driving the success
			of diverse projects through innovative solutions and collaborative
			teamwork. With strong expertise in both front-end and back-end
			development, I am dedicated to creating seamless, efficient, and
			user-friendly digital experiences.
		</p>
	);

	const lastExp = (
		<div className='grid grid-cols-2 grid-rows[100px_100px_1fr]  gap-x-6 gap-y-2'>
			<div className='title col-span-full text-2xl '>Last experiences</div>
			<div className='col-[1] row-[2]'>
				<h2 className='title'>Web UI Developer at Globant</h2>
				<h3 className='date'>March 2024 - Current</h3>
			</div>
			<p>
				As a Web UI Software Designer at Globant, I create user-centric web
				interfaces for British Airways using Next.js and Tailwind CSS.
			</p>
			<div className='col-[2] row-[2]'>
				<h2 className='title'>
					Fullstack Node/React Developer Senior at Gorilla Logic
				</h2>
				<h3 className='date'>January 2021 - January 2024</h3>
			</div>
			<p>
				As a Node.js/React.js Developer at Gorilla Logic, I led advancements in
				payment solutions, focusing on front-end development with React.js and
				implementing robust testing practices.
			</p>
		</div>
	);

	return (
		<div className='flex flex-col gap-6'>
			{content}
			{lastExp}
		</div>
	);
}
