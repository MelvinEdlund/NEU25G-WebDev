import './EducationCard.css';

// Finns två sätt att arbeta med bilder, antingen lägga dom direkt i projektet.
// separat på en annan webbserver och hämtas via en url (text ehandelsajt med 100000 bilder)
import logo from '../../assets/net-logo.png';

// En komponent är en JS funktion Genom att det är en JSX fil kan den även returna HTML kod
const EducationCard = () => {


    return(<div className='card'>

            <img src={logo} />
            <h3>.NET Utvecklare</h3>

            <div className='card-body'>
                <p>Göteborg</p>
                <p>Yrkeshögskola YH program</p>
                <p>400 poäng = 2 år</p>
            </div>
        </div>


    );

};

export default EducationCard;

