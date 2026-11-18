
import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

async function probarConexion() {
    try {
        console.log("Conectando con Firebase...");

        const alumnos = await getDocs(
            collection(db, "alumnos")
        );

        const asistencias = await getDocs(
            collection(db, "asistencias")
        );

        console.log("¡Conexión exitosa!");

        console.log("Alumnos encontrados:", alumnos.size);
        console.log("Asistencias encontradas:", asistencias.size);

        alumnos.forEach(documento => {
            console.log("Alumno:", documento.data());
        });

        asistencias.forEach(documento => {
            console.log("Asistencia:", documento.data());
        });

    } catch (error) {
        console.error("Error de Firebase:", error);
    }
}

probarConexion();
