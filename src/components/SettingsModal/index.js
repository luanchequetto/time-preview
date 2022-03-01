import { useContext, useState } from 'react'
import Modal from 'react-modal'
import defaultTheme from '../../core/globalTheme'
import { WeatherContext } from '../../core/WeatherContext'
import { SettingsColorItem } from '../SettingsColorItem'
import { SettingsPreferenceItem } from '../SettingsPreferenceItem'
import { SettingsPresetItem } from '../SettingsPresetItem'
import { CategoryTitle, ListWrapper, ModalWrapper, SaveButton } from './styles'

export const SettingsModal = ({ modalIsOpen, setModalIsOpen }) => {




    const weatherContext = useContext(WeatherContext)

    const { customTheme, preferences } = weatherContext

    function closeModal() {
        setModalIsOpen(false)
    }


    function handleSaveSettings() {
        let settings = {
            customTheme,
            preferences,
        }
        localStorage.setItem('user_settings', JSON.stringify(settings))
            alert('Salvo com Sucesso!')
    }
    const customStyles = {
        content: {
            width: '50%',
            margin: 'auto',
            height: 'auto',
            borderRadius: '30px',
            overflow: 'hidden',
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Settings"
            style={customStyles}>
        <ModalWrapper>
            <button onClick={closeModal} className='close-button'>X</button>
        <CategoryTitle>Customização do Tema</CategoryTitle>
            <p className='presets'>Predefinições</p>  
            <ListWrapper>
            
            <SettingsPresetItem 
                title='Default'
                primaryBG={defaultTheme.backgroundPrimaryColor} 
                secondBG={defaultTheme.backgroundSecondColor} 
                sidebarBG={defaultTheme.sidebarColor}
                txtPrimaryColor={defaultTheme.textPrimaryColor}
                txtSecondColor={defaultTheme.textSecondColor}
                />
                <SettingsPresetItem 
                title='Blue'
                primaryBG={'#0050F0'} 
                secondBG={'#000'} 
                sidebarBG={'#051D7A'}
                txtPrimaryColor={defaultTheme.textPrimaryColor}
                txtSecondColor={defaultTheme.textSecondColor}
                />
                <SettingsPresetItem 
                title='Yellow'
                primaryBG={'#A2A207'} 
                secondBG={'#000'} 
                sidebarBG={'#A2A207'}
                txtPrimaryColor={defaultTheme.textPrimaryColor}
                txtSecondColor={"#FFF"}
                />
                <SettingsPresetItem 
                title='Red'
                primaryBG={'#FF0000'} 
                secondBG={'#000'} 
                sidebarBG={'#B20A1B'}
                txtPrimaryColor={defaultTheme.textPrimaryColor}
                txtSecondColor={defaultTheme.textSecondColor}
                />
            </ListWrapper>

            <ListWrapper>
                <SettingsColorItem title="Cor de fundo primária" property={"backgroundPrimaryColor"} />
                <SettingsColorItem title="Cor de fundo secundária" property={"backgroundSecondColor"} />
                <SettingsColorItem title="Cor de fundo barra lateral" property={"sidebarColor"} />
                <SettingsColorItem title="Cor dos títulos" property={"textPrimaryColor"} />
                <SettingsColorItem title="Cor dos sub títulos" property={"textSecondColor"} />
            </ListWrapper>
            
            <CategoryTitle>Preferências</CategoryTitle>
            <ListWrapper>
                <SettingsPreferenceItem title="Temperatura" property={"units"} options={[{title: 'Celsius', value: 'metric'}, {title: 'Fahrenheit', value: 'imperial'}]}/>
                <SettingsPreferenceItem title="Linguagem" property={"lang"} options={[{title: 'Portugês', value: 'pt_br'}]}/>
            </ListWrapper>
            <SaveButton bg={defaultTheme.backgroundPrimaryColor} text={defaultTheme.textPrimaryColor} onClick={e => handleSaveSettings()}>Salvar alterações</SaveButton>
        </ModalWrapper>

        </Modal>
    )
}