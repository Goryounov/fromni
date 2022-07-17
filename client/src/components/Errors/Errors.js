import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Errors = ({item}) => {
    const {store} = useContext(Context);
    return (
        item.isDirty && store.errors.filter(errItem => errItem.name === item.name).length > 0 &&
        store.errors.filter(errItem => errItem.name === item.name).map(error => (
            <div key={error.error} style={{color: 'red'}}>{error.message}</div>
        ))
    );
};

export default observer(Errors);
