import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function SocialButtons() {
	return (
		<>
			<h3 className='page-footer__header'>Follow us</h3>
			<div className='page-footer__social-buttons'>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://www.facebook.com/people/SparkHue/61562808164210/'>
						<FontAwesomeIcon className='social-icon' icon={faFacebook}/>
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://instagram.com/sparkhue.1'>
						<FontAwesomeIcon className='social-icon' icon={faInstagram}/>
					</a>
				</div>
				<div className='page-footer__social-button'>
					<a className='page-footer__social-link' target='_blank' href='https://youtube.com/@sparkhue'>
						<FontAwesomeIcon className='social-icon' icon={faYoutube}/>
					</a>
				</div>
			</div>
			<p className='page-footer__social-buttons company-info'>
				Built with ❤️ at {" "}<a href="http://lacspace.com" target="_blank" rel="noopener noreferrer">{" "} Lacspace</a>
			</p>
		</>
	);
}