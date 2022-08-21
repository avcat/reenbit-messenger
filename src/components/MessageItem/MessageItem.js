import './MessageItem.sass';
import ProfileImage from "../ProfileImage";
import { date_to_format } from '../../helpers/helper_functions.js';

const Messageitem = ({message, is_mine}) => {
	const profile_image = is_mine ? null : <ProfileImage profile_id={message.message_owner} />;

	return (
		<li className={`MessageItem message ${is_mine ? 'mine' : ''}`}>
			{profile_image}

			<div className='text_wrapper'>
				<p className='text'>
					{message.message_text}
				</p>
			</div>
			<time className='time' dateTime={message.message_date}>
				{date_to_format(message.message_date, 'date_short_time_full')}
			</time>
		</li>
	);
}

export default Messageitem;