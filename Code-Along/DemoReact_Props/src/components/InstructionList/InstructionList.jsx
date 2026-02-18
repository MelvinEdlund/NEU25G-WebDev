
import './InstructionList.css';

const InstructionList = ({instructions}) => {

    const instructionRows = instructions.map(instruction => {
        return (<li>{instruction}</li>)
    });

    return (<div className='instructionStyle'>


        <h3>Gör så här</h3>
        <ol>{instructionRows}</ol>
    </div>);
}

export default InstructionList;