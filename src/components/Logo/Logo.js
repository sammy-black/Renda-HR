

import renderLogo from '../../assets/images/RendaHR.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height, margin: props.margin}}>
        <img src={renderLogo} alt="renderHR" />
    </div>
);

export default logo;