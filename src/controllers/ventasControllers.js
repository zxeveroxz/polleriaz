import { getConnection, sql, querys, cliente } from "../database";

async function getCliente(CODCLIENTE) {
    const pool = await getConnection();
    let cliente = await pool.request()
        .input("CODCLIENTE", sql.Int, CODCLIENTE)
        .query(querys.getClientebyId);
        //console.log(cliente.recordset[0])
    return cliente.recordset[0];
}

export const getVentasGrupo = async (req, res) => {

    console.log(req.params)
    const { serie } = req.params;
    let { desde, cuantos } = req.params;

    if (desde === undefined)
        desde = 0

    if (cuantos === undefined)
        cuantos = 12


    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("serie", sql.VarChar, serie)
            .input("desde", sql.Int, desde)
            .input("cuantos", sql.Int, cuantos)
            .query(querys.getVentasGrupo);

        const data = await Promise.all(
            result.recordset.map(async (row, index) => {
                let nom_cli = " ";
                let cif_cli = " ";
                if(row.CODCLIENTE>0){
                    let {NOMBRECLIENTE,CIF} = await getCliente(row.CODCLIENTE);
                    console.log(NOMBRECLIENTE)
                    nom_cli = NOMBRECLIENTE;
                    cif_cli = CIF;
                }

                
                return { ...row, 'CIF': cif_cli, 'NOM': nom_cli };
            })
        );




        res.json({ data: data, desde: (parseInt(desde) + parseInt(result.rowsAffected)) });
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getVentas = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(querys.getAllVentas);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//tabla_demo
export const createNewVenta = async (req, res) => {

    const { tarea, fecha } = req.body;
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("tarea", sql.VarChar, tarea)
            .input("fecha", sql.DateTime, fecha)
            .query(querys.addNewVentas);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    res.json({ tarea, fecha });
}

export const getVentasNumero = async (req, res) => {
    const { serie, numero } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("serie", sql.VarChar, serie)
            .input("numero", sql.Int, numero)
            .query(querys.getVentasByNumero);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const deleteVentasNumero = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id", sql.Int, id)
            .query(querys.deleteVentasByNumero);

        res.sendStatus(204);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const getVentasTotal = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(querys.getVentasContar);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}