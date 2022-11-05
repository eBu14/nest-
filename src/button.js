import './Button.css'
export const SwitchButton = ({ToggleSwitch}) => {
    return(
        <div>
            <label className="switch">
                <input type="checkbox"  onChange={ToggleSwitch}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}