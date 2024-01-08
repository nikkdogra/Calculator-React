
const Keypad = ({onKeypadClick}) => {
    return (
        <div className="keypad">
            <button className="btn text-black highlight" name="clear" id="clear" onClick={(e) => onKeypadClick(e.target.name)}>Clear</button>
            <button className="btn text-black highlight" name="c" onClick={(e) => onKeypadClick(e.target.name)}>C</button>
            <button className="btn highlight" name="/" onClick={(e) => onKeypadClick(e.target.name)}>/</button>
            <button className="btn" name="7" onClick={(e) => onKeypadClick(e.target.name)}>7</button>
            <button className="btn" name="8" onClick={(e) => onKeypadClick(e.target.name)}>8</button>
            <button className="btn" name="9" onClick={(e) => onKeypadClick(e.target.name)}>9</button>
            <button className="btn highlight" name="*" onClick={(e) => onKeypadClick(e.target.name)}>*</button>
            <button className="btn" name="4" onClick={(e) => onKeypadClick(e.target.name)}>4</button>
            <button className="btn" name="5" onClick={(e) => onKeypadClick(e.target.name)}>5</button>            
            <button className="btn" name="6" onClick={(e) => onKeypadClick(e.target.name)}>6</button>
            <button className="btn highlight" name="-" onClick={(e) => onKeypadClick(e.target.name)}>-</button>
            <button className="btn" name="1" onClick={(e) => onKeypadClick(e.target.name)}>1</button>
            <button className="btn" name="2" onClick={(e) => onKeypadClick(e.target.name)}>2</button>
            <button className="btn" name="3" onClick={(e) => onKeypadClick(e.target.name)}>3</button>
            <button className="btn highlight" name="+" onClick={(e) => onKeypadClick(e.target.name)}>+</button>
            <button className="btn" name="0" onClick={(e) => onKeypadClick(e.target.name)}>0</button>
            <button className="btn" name="." onClick={(e) => onKeypadClick(e.target.name)}>.</button>
            <button className="btn text-black highlight" name="=" id="result" onClick={(e) => onKeypadClick(e.target.name)}>=</button>
        </div>
    )
}

export default Keypad
