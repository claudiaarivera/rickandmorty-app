import React from "react";

export default function About() {
    return (
        <section className="about">
                <h3 className="section__title">¿Qué es Rick and Morty App?</h3>
                <p>Rick and Morty App es una aplicación web que consume la API pública <a className="section__link" href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">The Rick and Morty API</a>  basada en la serie de TV Rick and Morty.Como dice en la página oficial de Rick and Morty API, 
                puedes encontrar información real de la serie, en este caso de los personajes.</p>
                <h3 className="section__title">Sobre el desarrollo 😎</h3>

                <p>Esta aplicación fue construida con fines de aprendizaje, por lo que es problable que encuentres algunos <i>bugs</i>. No dudes en informarme si encuentras alguna, me serviría para seguir aprendiendo🙏.
                <br/>Fuera de eso, la app esta dividida por la sección home y about (donde te encuentras), como sabrás, puedes acceder a estas traves del menú de navegación ubicada en la parte superior de la página.
                </p>
                <h4>Caracteristicas:</h4>
                <ul>
                    <li>Listado de personajes</li>
                    <li>Filtrado por especie a través de un menú de selección</li>
                    <li>Paginación</li>
                </ul>
                <p> Por implementar: sección de detalle de personaje.</p>
                <br/>  
                <p>Todas las sugerencias, feedback, errores pueden ser consultadas enviándome un mensaje a riveramacedoc@gmail.com </p>
                <p>Repositorio del proyecto: <a className="section__link" target="_blank" rel="noreferrer" href="https://reactjs.org">Rick and Morty App</a></p>
                <p>Tecnologías usadas: <a className="section__link" target="_blank" rel="noreferrer" href="https://reactjs.org">ReactJs</a></p>
        </section>
    )
}