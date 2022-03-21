
import { useWeatherContext } from "../../hooks/useWeatherContext";
import { Item } from "./styles";

export const SettingsPresetItem = ({
    title,
    primaryBG,
    secondBG,
    sidebarBG,
    txtPrimaryColor,
    txtSecondColor,
}) => {
    const { setCustomTheme, customTheme } = useWeatherContext();


    const handleSetTheme = () => {
        setCustomTheme({
            ...customTheme,
            theme: {
                ...customTheme.theme,
                backgroundPrimaryColor: primaryBG,
                backgroundSecondColor: secondBG,
                sidebarColor: sidebarBG,
                textPrimaryColor: txtPrimaryColor,
                textSecondColor: txtSecondColor,
            },
        });
    };

    return (
        <Item onClick={() => handleSetTheme()} primaryBG={primaryBG} title={title} />
    );
};
