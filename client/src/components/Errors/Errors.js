import React, {useContext} from 'react';
import {Context} from '../../index';
import {observer} from 'mobx-react-lite';
import './Errors.scss';

const Errors = ({item}) => {
    const {store} = useContext(Context);
    return (
        item.isDirty && store.errors.filter(errItem => errItem.name === item.name).length > 0 &&
        store.errors.filter(errItem => errItem.name === item.name).map(error => (
            <div key={error.error} className='errors'>{error.message}</div>
        ))
    );
};

export default observer(Errors);
