import React, {useContext} from 'react';
import {Context} from '../../../../index';
import {observer} from 'mobx-react-lite';
import Errors from '../../../Errors/Errors';
import useInput from '../../../../hooks/useInput';
import './Buttons.scss';

const Buttons = () => {
    const {store} = useContext(Context);
    const config = store.validationConfig[`${store.keyboard.type}Keyboard`];
    const textButton = useInput('', 'textButton', config);
    const linkButton = useInput('', 'linkButton', {});

    function handleType(e, item) {
        store.setButtonType(e.target.value);
        item.clear();
    }

    function handleBody(e, item) {
        item.onChange(e);
        store.setButtonBody(e.target.value);
    }

    function handleClick(item) {
        store.createButton();
        item.clear();
    }

    function getCurrentButton() {
        return store.button.type === 'text' ? textButton : linkButton;
    }

    function buttonsAmount(type, configType) {
        return (store.keyboard.buttons.filter(item => item.type === type).length >= config[configType]?.value);
    }

    return (
        <>
            <div className='buttons form-group'>
                <h3 className='form__title h3'>Тип кнопки</h3>
                <div className='form__radio form-check'>
                    <div className="form-check">
                        <label>
                            <input className='form-check-input' type="radio" value="text"
                                   checked={store.button.type === "text"}
                                   onChange={e => handleType(e, textButton)}/>
                            Текстовая
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input className='form-check-input' type="radio" value="link"
                                   checked={store.button.type === "link"}
                                   onChange={e => handleType(e, linkButton)}
                                   disabled={config.link_buttons_disabled}/>
                            Кнопка-ссылка
                        </label>
                    </div>
                </div>
            </div>
            <div className='form-group align-items-center'>
                <Errors item={getCurrentButton()}/>
                <div className='buttons__row'>
                    {!buttonsAmount(store.button.type, `${store.button.type}_buttons_max`)
                        ?
                        <>
                            <input className='form-control'
                                   placeholder={store.button.type === 'text' ? 'Введите текст' : 'Введите ссылку'}
                                   value={getCurrentButton().value || ''}
                                   onChange={e => handleBody(e, getCurrentButton())}
                                   onBlur={getCurrentButton().onBlur}
                            />
                            <button className='btn btn-primary'
                                    disabled={getCurrentButton().value === '' || store.errors.filter(errItem => errItem.name === getCurrentButton().name).length > 0}
                                    onClick={e => handleClick(getCurrentButton())}>Добавить
                            </button>
                        </>
                        :
                        <div>{config[`${store.button.type}_buttons_max`].message} {config[`${store.button.type}_buttons_max`].value}</div>
                    }
                </div>
            </div>
        </>
    );
};

export default observer(Buttons);
