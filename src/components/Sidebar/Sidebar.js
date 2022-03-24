import { Tools, ToolImageIcon, DateTime } from "./styles";
import { useState } from "react";
import { SettingsModal } from "../SettingsModal";
import { useWeatherContext } from "../../hooks/useWeatherContext";

export const Sidebar = () => {
    const dateTime = new Date();

    const { setSearchData, customTheme } = useWeatherContext();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const dateFormater = (value) => {
        return value < 10 ? "0" + value : value;
    };

    function openModal() {
        setModalIsOpen(true);
    }

    function handleRefresh() {
        setSearchData("");
    }

    return (
        <>
            <Tools>
                <div data-testid="date-wrapper">
                    <DateTime
                        textColor={customTheme.theme.textPrimaryColor}
                    >
                        {dateFormater(dateTime.getDate())}/
                        {dateFormater(dateTime.getMonth() + 1)}
                    </DateTime>
                    <DateTime
                        textColor={customTheme.theme.textSecondColor}
                    >
                        {dateFormater(dateTime.getHours())}:
                        {dateFormater(dateTime.getMinutes())}
                    </DateTime>
                </div>
                <div data-testid="home-button" onClick={handleRefresh} role='button' tabIndex={0} onKeyDown={e => { e.key === 13 && handleRefresh }}>
                    <ToolImageIcon src={require("../../assets/home.png")} alt="home" />
                </div>
                <div data-testid="settings-button" onClick={openModal} role='button' tabIndex={0} onKeyDown={e => { e.key === 13 && openModal }}>
                    <ToolImageIcon
                        src={require("../../assets/settings.png")}
                        alt="settings"
                    />
                </div>
            </Tools>
            <SettingsModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />
        </>
    );
};
