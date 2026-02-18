
//import './App.css'
import Header from './components/Header/Header'
import IngredientList from './components/IngredientList/IngredientList';
import InstructionList from './components/InstructionList/InstructionList';

function App() {
  //Vi skapar lite data som i vanliga fall kommer via anrop till ett Web API
  let title = 'Pasta Carbonara';
  let description = 'Pasta carbonara eller spaghetti carbonara – älskad favorit med grädde och rökt fläsk eller bacon. Passar lika bra till släktmiddagen som till fredagsmyset. Enkelt och recept på en riktig klassiker. Klar på en kvart! Servera pasta carbonara med en äggula.';

  let ingredientsList = [];
  ingredientsList.push("Spaghetti");
  ingredientsList.push("Rökt fläsk");
  ingredientsList.push("Smör från Arla");
  ingredientsList.push("Vispgrädde");
  ingredientsList.push("Vitlök");

  let instructionList = [];
  instructionList.push("Koka spaghettin.");
  instructionList.push("Skär fläsket i små tärningar. Stek fläsket knaprigt i smör i en stekpanna.");
  instructionList.push("Vispa ihop grädde, salt, vitlök och hälften av osten.");
  instructionList.push("Rör ner fläsk och ostblandningen i den kokta spaghettin och rör kraftigt till en krämig konsistens. Strö över resten av osten och peppar. Servera pasta carbonara med en äggula.");
  
  return (
    <>
    <header>
      <Header title={title} description={description}/>
    </header>
    <main>
      <IngredientList ingredients={ingredientsList}/>
      <InstructionList instructions={instructionList}/>
    </main>
    </>
  )
}

export default App
