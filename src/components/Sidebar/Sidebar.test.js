import { fireEvent, getByText, render, screen } from "@testing-library/react"
import { WeatherProvider } from "../../core/WeatherContext"
import { CardsWrapper } from "../CardsWrapper/CardsWrapper"
import { Sidebar } from "./Sidebar"



describe("Testing the Sidebar component", () => {
    it("should be able to show home button", () => {
        render(<WeatherProvider><Sidebar /></WeatherProvider>)
        const homeIcon = screen.getByAltText("home")
        expect(homeIcon).toBeInTheDocument()
    })
    it("should be able to reset search on click home button", () => {
        render(<WeatherProvider><Sidebar /><CardsWrapper /></WeatherProvider>)
        const homeButton = screen.getByTestId("home-button")
        fireEvent.click(homeButton)
        expect(screen.queryByText('Previsão da Semana:')).toBeNull()
    })
    it("should be abble to open modal component on click settings button", () => {
        render(<WeatherProvider><Sidebar /></WeatherProvider>)
        const settingsButton = screen.getByTestId("settings-button")
        fireEvent.click(settingsButton)
        expect(screen.getByText('Customização do Tema')).toBeInTheDocument()
    })
})

