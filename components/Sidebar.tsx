'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, School, User, HelpCircle } from 'lucide-react';
const logo = '/logo.svg';

const navItems = [
	{
		href: '/dashboard',
		label: 'Dashboard',
		icon: Search,
	},
	{
		href: '/schools',
		label: 'Schools',
		icon: School,
	},
	{
		href: '/students',
		label: 'Students',
		icon: User,
	},
	{
		href: '/help',
		label: 'Help',
		icon: HelpCircle,
	},
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="h-full flex flex-col items-start pt-12 overflow-hidden bg-gradient-to-b from-white to-gray-50">
			{/* Logo */}
			<div
				id="logo"
				className="px-6 flex items-center mb-8 transition-all duration-300 ease-in-out"
			>
				<div className="flex items-center">
					<Image
						src={logo}
						alt="EduSponsor logo"
						width={32}
						height={32}
						className="min-w-[32px]"
            priority
					/>
					<div className="ml-2 flex items-baseline overflow-hidden">
						<span className="text-2xl font-bold text-gray-900 whitespace-nowrap">
							edusponsor
						</span>
					</div>
				</div>
			</div>

			{/* Navigation */}
			<nav className="w-full px-3">
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					const Icon = item.icon;

					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex items-center w-full p-3 rounded-xl mb-1.5 transition-all duration-200 ${
								isActive
									? 'bg-purple-600 text-white shadow-sm'
									: 'text-gray-600 hover:bg-white/60 hover:shadow-sm'
							}`}
						>
							<Icon
								className={`w-5 h-5 min-w-[20px] ${
									isActive ? 'text-white' : 'text-gray-500'
								}`}
							/>
							<span className="ml-3 text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300">
								{item.label}
							</span>
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
