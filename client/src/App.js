import store from './redux/store'
import { Provider, connect } from 'react-redux'
import Main from './Main';

export const SERVER = "http://localhost:5000/";

function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

const mapStateToProps = state => {
    return {
        userName: state.userName,
        loggedIn: state.loggedIn
    }
}

export default App;
