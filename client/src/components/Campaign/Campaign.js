import React, {useContext} from 'react';
import Message from "../Message/Message";
import Keyboard from "../Keyboard/Keyboard";
import Buttons from "../Buttons/Buttons";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import CampaignControls from "./CampaignControls/CampaignControls";

const Campaign = () => {
    const {store} = useContext(Context);

    return (
        <div className={'form-channel'}>
            <h3 className={'form__title h3'}>{store.campaign.name}</h3>
            <Message/>
            {store.validationConfig.standardKeyboard && store.validationConfig.inlineKeyboard &&
            <Keyboard/>
            }
            {store.keyboard.type !== 'none' &&
            <Buttons/>
            }
            <CampaignControls/>
        </div>
    );
};

export default observer(Campaign);
