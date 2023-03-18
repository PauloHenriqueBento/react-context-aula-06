export default function Buscar(){
    return(
        <div className="d-flex justify-content-between my-3">
            <input type={"search"} placeholder="Digite o nome do vídeo" className="form-control me-3"></input>
            <button className="btn btn-sm btn-outline-primary">Buscar</button>
        </div>
    )
}