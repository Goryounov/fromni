import React from 'react';
import './ProfilesItem.scss';

const ProfilesItem = ({profile}) => {
    return (
        <div className='profiles__item'>
            <h3 className='form__title h3'>Профиль №{profile.id}</h3>
            <div className='campaigns'>
                {profile.campaigns.map(campaign =>
                    <div className='campaigns__item' key={campaign.id}>
                        <ul className='list-group'>
                            <li className='list-group-item'>Канал: {campaign?.channel?.name}</li>
                            <li className='list-group-item'>Сообщение: {campaign.message}</li>
                            {campaign?.keyboard?.type &&
                            <li className='list-group-item'>Клавиатура: {campaign?.keyboard?.type}</li>}
                            {campaign?.keyboard?.buttons &&
                            <li className='list-group-item'>
                                <p>Кнопки</p>
                                <ul className='list-group list-group-numbered'>
                                    {campaign?.keyboard?.buttons.map(button =>
                                        <li key={button.id} className='list-group-item'>Тип: {button.type} |
                                            Сообщение: {button.body}</li>
                                    )}
                                </ul>
                            </li>}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilesItem;
