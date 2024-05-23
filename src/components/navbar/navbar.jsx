import CartWidget from '../cartwidget/cartwidget';
import './navbar.css';
import { Button } from 'antd';

const Navbar = () => {
    return (
        <div>
            <h1>Grow Shop Green Zone</h1>
            <div>
                <nav>
                <Button type="primary">Jardineria</Button>
                <Button type="primary">Kits//Sedas</Button>
                <Button type="primary">Tierras sustratos</Button>
                <CartWidget />
                </nav>
            </div>
        </div>
    )
};
export default Navbar;