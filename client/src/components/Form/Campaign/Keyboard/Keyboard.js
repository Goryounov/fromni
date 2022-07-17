import React, {useContext} from 'react';
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const Keyboard = () => {
    const {store} = useContext(Context);

    function handleChange(e) {
        store.setKeyboardType(e.target.value);
        store.setButtonType('text');
    }

    return (
        <div className={'form-group'}>
            <h3 className={'form__title h3'}>Клавиатура</h3>
            <div className={'form__radio form-check'}>
                <div className="form-check">
                    <label>
                        <input className={'form-check-input'} type="radio" value="none"
                               checked={store.keyboard.type === "none"}
                               onChange={handleChange}
                               disabled={store.keyboard.buttons.length > 0}/>
                        Нет
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input className={'form-check-input'} type="radio" value="standard"
                               checked={store.keyboard.type === "standard"}
                               onChange={handleChange}
                               disabled={store.keyboard.buttons.length > 0}/>
                        Стандартная
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input className={'form-check-input'} type="radio" value="inline"
                               checked={store.keyboard.type === "inline"}
                               onChange={handleChange}
                               disabled={store.keyboard.buttons.length > 0}/>
                        Inline
                    </label>
                </div>
            </div>
        </div>
    );
};

export default observer(Keyboard);
