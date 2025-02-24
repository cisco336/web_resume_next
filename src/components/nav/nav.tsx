import Link from 'next/link';
import { Avatar } from '../avatar/avatar';

export const Nav = () => {
	return (
		<div className='flex flex-col'>
			<Avatar />
			<nav className='col-1 bg-gray-dark text-white p-8 grow flex flex-col'>
				<h2 className='mb-6'>Hi, I'm Francisco Arleo</h2>
				<ul className='grow flex flex-col justify-center'>
					<Link href={'/'}>Home</Link>
					<Link href={'/experience'}>Experience</Link>
					<Link href={'/skills'}>Skills</Link>
					<Link href={'/contact'}>Contact</Link>
					<Link href={'/resume'}>Download resume</Link>
				</ul>
				<div className='pt-6 flex flex-col justify-end'>Social menu</div>
			</nav>
		</div>
	);
};
