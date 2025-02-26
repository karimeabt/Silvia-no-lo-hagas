const API_URL = "http://localhost:5000"; // Asegúrate de que el backend está corriendo

export const fetchMessage = async () => {
    try {
        const response = await fetch(`${API_URL}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener datos del backend:", error);
        return { message: "Error en la conexión" };
    }
};
