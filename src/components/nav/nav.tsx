import { Avatar } from '../avatar/avatar';

export const Nav = () => {
	return (
		<div className='flex flex-col'>
			<Avatar />
			<nav className='col-1 bg-gray-dark text-white p-8 grow flex flex-col'>
				<h2 className='mb-6'>Hi, I'm Francisco Arleo</h2>
				<ul className='grow flex flex-col justify-center'>
					<li>Home</li>
					<li>Experience</li>
					<li>Skils</li>
					<li>Contact</li>
					<li>Download resume</li>
				</ul>
				<div className='pt-6 flex flex-col justify-end'>Social menu</div>
			</nav>
		</div>
	);
};
