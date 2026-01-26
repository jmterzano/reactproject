export default function FiltrarPeliculas() {
    return (
        <>
            <h3>Filtro de Peliculas</h3>
            <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <input id="titulo" placeholder="Titlo de la pelicula" autoComplete="off"
                        className="form-control" />
                </div>
                <div className="col-12">
                    <select className="form-select">
                        <option value="0">--Seleccione un genero--</option>
                    </select>
                </div>
            </form>
        </>
    );
}