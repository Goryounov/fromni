import React, {useContext} from 'react';
import Errors from '../../../Errors/Errors';
import {Context} from '../../../../index';
import {observer} from 'mobx-react-lite';
import useInput from '../../../../hooks/useInput';

const Message = () => {
    const {store} = useContext(Context);
    const message = useInput(store.message, 'message', store.validationConfig);

    function handleChange(e) {
        message.onChange(e);
        store.setMessage(e.target.value);
    }

    return (
        <>
            <Errors item={message}/>
            <div className='form-group'>
            <textarea
                className='form-control'
                value={store.message}
                placeholder='Введите сообщение'
                onChange={handleChange}
                onBlur={message.onBlur}
            />
            </div>
        </>
    );
};

export default observer(Message);
