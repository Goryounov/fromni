const vk_config = {
    required: {value: false, message: 'Ошибка! Поле обязательно к заполнению'},
    message_max_length: {value: 4096, message: 'Ошибка! Максимальное количество символов:'},
    standardKeyboard: {
        text_buttons_max: {value: 40, message: 'Достигнут лимит количества текстовых кнопок:'},
    },
    inlineKeyboard : {
        text_buttons_max: {value: 10, message: 'Достигнут лимит количества текстовых кнопок:'},
    }
}

const wa_config = {
    required: {value: true, message: 'Ошибка! Поле обязательно к заполнению'},
    message_max_length: {value: 1000, message: 'Ошибка! Максимальное количество символов:'},
    standardKeyboard: {
        text_buttons_max: {value: 10, message: 'Достигнут лимит количества текстовых кнопок:'},
        text_max_length: {value: 20, message: 'Ошибка! Максимальное количество символов:'},
        link_buttons_disabled: true,
    },
    inlineKeyboard : {
        text_buttons_max: {value: 3, message: 'Достигнут лимит количества текстовых кнопок:'},
        text_max_length: {value: 20, message: 'Ошибка! Максимальное количество символов:'},
        link_buttons_max: {value: 1, message: 'Достигнут лимит количества кнопок-ссылок:'}
    }
}

const tg_config = {
    required: {value: true, message: 'Ошибка! Поле обязательно к заполнению'},
    message_max_length: {value: 4096, message: 'Ошибка! Максимальное количество символов:'},
    standardKeyboard: {
        link_buttons_disabled: true
    },
    inlineKeyboard : {
        text_max_length: {value: 64, message: 'Ошибка! Максимальное количество символов:'},
    }
}

const sms_config = {
    required: {value: true, message: 'Ошибка! Поле обязательно к заполнению'},
}

export default {vk_config, tg_config, wa_config, sms_config}