import { Tools, ToolImageIcon, DateTime } from "./styles";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { WeatherContext } from "../../core/WeatherContext";
import { SettingsModal } from "../SettingsModal";

Modal.setAppElement("#root");

export const Sidebar = () => {
    const dateTime = new Date();

    const weatherContext = useContext(WeatherContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const dateFormater = (value) => {
        return value < 10 ? "0" + value : value;
    };

    function openModal() {
        setModalIsOpen(true);
    }

    function handleRefresh() {
        weatherContext.setSearchData("");
    }

    return (
        <>
            <Tools>
                <div className="date-wrapper">
                    <DateTime
                        textColor={weatherContext.customTheme.theme.textPrimaryColor}
                    >
                        {dateFormater(dateTime.getDate())}/
                        {dateFormater(dateTime.getMonth() + 1)}
                    </DateTime>
                    <DateTime
                        textColor={weatherContext.customTheme.theme.textSecondColor}
                    >
                        {dateFormater(dateTime.getHours())}:
                        {dateFormater(dateTime.getMinutes())}
                    </DateTime>
                </div>
                <div onClick={handleRefresh} role='button' tabIndex={0} onKeyDown={e => { e.key === 13 && handleRefresh }}>
                    <ToolImageIcon src={require("../../assets/home.png")} alt="home" />
                </div>
                <div onClick={openModal} role='button' tabIndex={0} onKeyDown={e => { e.key === 13 && openModal }}>
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
