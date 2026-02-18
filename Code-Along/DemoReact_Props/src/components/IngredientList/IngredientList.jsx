
import './IngredientList.css';

const IngredientList = ({ingredients}) => {

    // Vi får in en lista med ingredienser, loopar igenom och skapar listrader till
    // En HTML lista
    const listRows = ingredients.map(ingredient => {
        return (<li>{ingredient}</li>)

    });

    return(<div className='ingredientsStyle'>
        <h3>Ingredienser</h3>
        <ul>{listRows}</ul>

    </div>)

}

export default IngredientList
