
import { useWeatherContext } from "../../hooks/useWeatherContext";
import { Item } from "./styles";

export const SettingsPreferenceItem = ({ title, property, options }) => {
    const { preferences, setPreferences } = useWeatherContext()

    return (
        <Item>
            <div>
                <label>{title}</label>
                <div className="itens">
                    <select
                        value={preferences[property]}
                        onChange={(e) => {
                            setPreferences({
                                ...preferences,
                                [property]: e.target.value,
                            });
                        }}
                    >
                        {options.map((param) => {
                            return (
                                <option key={param.value} value={param.value}>
                                    {param.title}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </Item>
    );
};
