import { Tools, ToolImageIcon, DateTime } from "./styles"

export const Sidebar = () => {

    const dateTime = new Date();

    const dateFormater = (value)=>{
        return value < 10 ? "0"+value : value;
    }

    return (
        <Tools>
            <div>
                <ToolImageIcon
                    src={require('../../assets/logo.png')}
                    alt="logo" />
            </div>
            <div>
                <ToolImageIcon
                    src={require('../../assets/home.png')}
                    alt="home" />
            </div>
            <div>
                <DateTime textColor="#FFF">{dateFormater(dateTime.getDate())}/{dateFormater(dateTime.getMonth()+1)}</DateTime>
                <DateTime textColor="#707070">{dateFormater(dateTime.getHours())}:{dateFormater(dateTime.getMinutes())}</DateTime>
            </div>
        </Tools>
    )
}