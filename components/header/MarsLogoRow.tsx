import Link from 'next/link';
import HeaderCart from '../cart/HeaderCart';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {MouseEvent} from 'react';
import {setIsOpened} from '../../redux/reducers/asideMenu';
import logoImg from './SparkHue-Logo.png';
import clsx from 'clsx';
import {RootState} from '../../redux/store';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function MarsLogoRow() {
	const dispatch = useAppDispatch();

	const asideIsOpened = useAppSelector((state: RootState) => state.asideMenu.isOpened);
	const onHamburgerBtnClicked = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(setIsOpened(true));
	};

	return (
		<section className={'mars-logo-row'}>
			<div className={'container-xxl mars-logo-row__container'}>
				<div className={'mars-logo-row__logo-wrapper'}>
					<Link href={'/'} className={'mars-logo-row__logo'}>
						{/* <span>SparkHue</span> */}
						<img src={logoImg.src} alt={'SparkHue'} style={{maxWidth: "200px"}}/>
					</Link>
				</div>
				<div className={'mars-logo-row__welcome'}>
					Hey there! Are you ready to discover something special?
				</div>
				<div className={'mars-logo-row__at-right'}>
					<HeaderCart icon={<span className={'mars-logo-row__cart-icon'}><FontAwesomeIcon icon={faShoppingCart} /></span>}/>
					<button type={'button'}
									className={'hamburger-btn mars-logo-row__hamburger'}
									onClick={onHamburgerBtnClicked}
									>
						<span className={clsx('hamburger-btn__bar', {'first-opened': asideIsOpened})} />
						<span className={clsx('hamburger-btn__bar', {'middle-opened': asideIsOpened})} />
						<span className={clsx('hamburger-btn__bar', {'last-opened': asideIsOpened})} />
					</button>
				</div>
			</div>
		</section>
	);
}