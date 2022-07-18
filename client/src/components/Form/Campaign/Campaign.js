import React, {useContext} from 'react';
import Message from './Message/Message';
import Keyboard from './Keyboard/Keyboard';
import Buttons from './Buttons/Buttons';
import {Context} from '../../../index';
import {observer} from 'mobx-react-lite';
import Controls from './Controls/Controls';

const Campaign = () => {
    const {store} = useContext(Context);

    return (
        <div className='form-channel'>
            <h3 className='form__title h3'>{store.campaign.name}</h3>
            <Message/>
            {store.validationConfig.standardKeyboard && store.validationConfig.inlineKeyboard &&
            <Keyboard/>
            }
            {store.keyboard.type !== 'none' &&
            <Buttons/>
            }
            <Controls/>
        </div>
    );
};

export default observer(Campaign);
