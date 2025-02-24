import Link from 'next/link';
import { Avatar } from '../avatar/avatar';

export const Nav = () => {
	return (
		<div className='flex flex-col'>
			<Avatar />
			<nav className='col-1 bg-gray-dark text-white p-8 grow flex flex-col'>
				<p>Hi, I'm </p>
				<h3 className='title mb-0'>Francisco Arleo</h3>
				<h3 className='text-right'>Web developer</h3>
				<ul className='grow flex flex-col justify-center'>
					<Link href={'/'}>Home</Link>
					<Link href={'/experience'}>Experience</Link>
					<Link href={'/skills'}>Skills</Link>
					<Link href={'/resume'}>Download resume</Link>
				</ul>
				<div className='pt-6 flex flex-col justify-end'>
					<h3 className='title'>My links</h3>
					<ul className='grow flex flex-col justify-center'>
						<li>Github</li>
						<li>LinkedIn</li>
						<li>Email</li>
						<li>WhatsApp</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
