// import Link from 'next/link';
// import logoImg from '../../assets/logo.svg';

export default function FooterAbout({companyTitle}: {companyTitle?: string}) {
	const title = companyTitle || '© SparkHue Pvt. Ltd. All rights reserved';
	return (
		<>
			{/* <div className='page-footer__logo'>
				<Link href='/'>
					<a>
						<img src={logoImg.src} width={logoImg.width} height={logoImg.height} alt={title} />
					</a>
				</Link>
			</div> */}
			<div className='page-footer__company-info'>
				<p className='title'>{title}</p>
			</div>
			<div className='page-footer__disclaimer'>
				Discover top-quality electronics, stylish fashion, and essential stationery. Enjoy a seamless shopping experience with SparkHue. Follow us on social media for updates, exclusive offers, and the latest trends.
			</div>
		</>
	);
}