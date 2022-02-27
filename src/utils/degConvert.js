export const handleDegConvert = (deg) => {
    switch (true) {
        case (deg === 0 && deg === 360):
            return ("Norte");
        case (deg > 0 && deg < 90):
            return ("Nordeste")
        case deg === 90:
            return ("Este")
        case (deg > 90 && deg < 180):
            return ("Sudeste")
        case deg === 180:
            return ("Sul")
        case (deg > 180 && deg < 270):
            return ("Sudoeste")
        case deg === 270:
            return ("Oeste")
        case (deg > 270 && deg < 360):
            return ("Noroeste")

        default:
            return ('');
    }

}