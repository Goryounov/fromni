import React, {useContext} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import './FormChannelsButtons.scss';

const FormChannelsButtons = () => {
    const {store} = useContext(Context);

    function handleClick(name, channelId, validation) {
        store.createCampaign(name, channelId, validation)
    }

    return (
        <div className={'form-channels-buttons form-group'}>
            {store.channels.map((channel, index) => {
                return (
                    <button
                        key={index}
                        disabled={channel.added || (store.isFilling && !(channel.name === store.campaign.name))}
                        className={channel.added ? 'form-channels-buttons__btn btn btn-outline-primary' : 'form-channels-buttons__btn btn btn-primary'}
                        value={channel.name}
                        onClick={e => {handleClick(channel.name, channel.channelId, channel.validation)}}
                    >
                        {channel.name}
                        {channel.added && ' ✓'}
                    </button>
                )
            })}
        </div>
    );
};

export default observer(FormChannelsButtons);
