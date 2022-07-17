import Form from "./components/Form/Form";
import Profiles from "./components/Profiles/Profiles";
import './App.scss';

function App() {

    return (
        <div className={'app'}>
            <div className={'app__container'}>
                <Form />
                <Profiles />
            </div>
        </div>
    )
}

export default App;
