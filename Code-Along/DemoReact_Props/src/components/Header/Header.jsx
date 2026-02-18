
import './Header.css';
import carbonara from '../../assets/pasta-carbonara.webp';

const Header = ({title, description}) => {

    return(<>
        <div className='headerStyle'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className='mainImage'>
            <img src={carbonara}/>
        </div>

    </>);

}

export default Header;