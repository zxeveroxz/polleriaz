import { getConnection, sql, qClientes, cliente } from "../database";

export const getCliente = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(qClientes.getClientebyId);
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