import React, {useContext} from 'react';
import profilesService from "../../services/profiles.service";
import Campaign from "../Campaign/Campaign";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import './Form.scss';
import FormChannelsButtons from "./FormChannelsButtons/FormChannelsButtons";

const Form = () => {
    const {store} = useContext(Context);

    function handleClick() {
        profilesService.create(store.profile).then(data => {
            console.log(data)
        });
        store.resetForm();
    }

    return (
        <div className={'form card'}>
            <div className='card-body'>
                <h1 className={'form__title h1'}>Форма</h1>
                <FormChannelsButtons/>
                {store.isFilling &&
                <Campaign/>
                }
                {(store.profile.campaigns.length > 0) && (!store.isFilling) &&
                <div className='text-center'>
                    <button className={'btn btn-primary'} onClick={handleClick}>
                        Закончить настройки
                    </button>
                </div>
                }
            </div>
        </div>
    );
};

export default observer(Form);
