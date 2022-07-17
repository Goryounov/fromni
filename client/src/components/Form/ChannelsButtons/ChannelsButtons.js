import React, {useContext} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import './ChannelsButtons.scss';

const ChannelsButtons = () => {
    const {store} = useContext(Context);

    function handleClick(name, channelId, validation) {
        store.createCampaign(name, channelId, validation)
    }

    return (
        <div className={'channels-buttons form-group'}>
            {store.channels.map((channel, index) => {
                return (
                    <button
                        key={index}
                        disabled={channel.added || (store.isFilling && !(channel.name === store.campaign.name))}
                        className={channel.added ? 'channels-buttons__btn btn btn-outline-primary' : 'channels-buttons__btn btn btn-primary'}
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

export default observer(ChannelsButtons);
