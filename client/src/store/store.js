import {makeAutoObservable} from "mobx";
import config from "../configs";
import channelsService from '../services/channels.service';

class Store {

    //Предполагается, что каналы уже есть в базе данных.
    //Здесь они бы получались и им бы добавлялся конфигурационный файл валидации.
    CHANNELS = [
        {name: 'ВКонтакте', channelId: 1, validation: config.vk_config},
        {name: 'WhatsApp', channelId: 2, validation: config.wa_config},
        {name: 'Telegram', channelId: 3, validation: config.tg_config},
        {name: 'SMS', channelId: 4, validation: config.sms_config}
    ];
    insertToDB = [
        {name: 'ВКонтакте', id: 1},
        {name: 'WhatsApp', id: 2},
        {name: 'Telegram', id: 3},
        {name: 'SMS', id: 4}
    ]

    constructor() {
        makeAutoObservable(this);
        //Так как изначально в базе данных каналов нет, их нужно создать
        this.createChannels(this.insertToDB);
    }

    isFilling = false;
    channels = this.CHANNELS;
    validationConfig = {};
    message = '';
    keyboard = {
        type: 'none',
        buttons: []
    }
    button = {type: 'text'};
    campaign = {};
    profile = {campaigns: []};
    errors = [];

    setIsFilling(bool) {
        this.isFilling = bool;
    }

    setMessage(text) {
        this.message = text;
    }

    setKeyboardType(type) {
        this.keyboard.type = type;
    }

    setButtonType(type) {
        this.button.type = type;
    }

    setButtonBody(body) {
        this.button.body = body;
    }

    setValidationConfig(config) {
        this.validationConfig = config;
    }

    addError(error) {
        if (this.errors.filter(item => item.error === error.error).length === 0) {
            this.errors.push(error);
        }
    }

    removeError(error) {
        if (this.errors.filter(item => item.error === error).length > 0) {
            this.errors = this.errors.filter(item => item.error !== error);
        }
    }

    createButton() {
        this.keyboard.buttons.push({type: this.button.type, body: this.button.body.trim()});
        this.setButtonBody('');
    }

    createCampaign(name, channelId, config) {
        this.campaign = {name: name, channelId: channelId};
        this.validationConfig = config;
        this.isFilling = true;
    }

    createChannels(channels) {
        channelsService.create(channels).then(data => {
            if (data.message) console.log(data.message)
        })
    }

    resetForm() {
        this.deleteForm();
        this.profile.campaigns = [];
        this.channels = this.CHANNELS;
        this.errors = [];
    }

    deleteForm() {
        this.isFilling = false;
        this.message = '';
        this.keyboard.buttons = [];
        this.keyboard.type = 'none';
        this.button = {type: 'text'};
    }

    saveCampaign() {
        let campaign = this.campaign;
        campaign.message = this.message.trim();
        if (this.keyboard.type !== 'none') {
            let keyboard = {};
            keyboard.type = this.keyboard.type;
            keyboard.buttons = this.keyboard.buttons;
            campaign.keyboard = keyboard;
        }
        this.profile.campaigns.push(campaign)
        this.deleteForm();
        this.channels = this.channels.map(channel => {
            return channel.name === this.campaign.name ? {...channel, added: true} : channel
        });
    }
}

export default new Store();