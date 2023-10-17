import Header from "./components/Header/Header";
import {Outlet} from 'react-router-dom';
const RootElement = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RootElement;