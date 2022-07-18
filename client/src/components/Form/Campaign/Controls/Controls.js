import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../../../index';
import './Controls.scss';

const Controls = () => {
    const {store} = useContext(Context);

    function handleReset() {
        store.deleteForm();
    }

    function handleSubmit() {
        store.saveCampaign();
    }

    return (
        <div className='form-group text-center'>
            <button className='campaign-controls__btn btn btn-primary btn-danger'
                    onClick={handleReset}>&#8635;</button>
            <button className='campaign-controls__btn btn btn-secondary btn-success'
                    disabled={store.errors.length > 0 || (store.keyboard.type !== 'none' && !store.keyboard.buttons.length > 0)}
                    onClick={handleSubmit}>
                Сохранить канал
            </button>
        </div>
    );
};

export default observer(Controls);
