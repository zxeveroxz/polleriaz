export  const querys =  {
    getAllVentas: 'SELECT TOP 100 * FROM TIQUETSCAB',
    addNewVentas: 'INSERT INTO tabla_demo (tarea,fecha) values (@tarea,@fecha)',
    getVentasByNumero: 'SELECT * FROM TIQUETSCAB WHERE serie=@serie and numero=@numero',
    deleteVentasByNumero : 'DELETE from tabla_demo where id=@id',
    getVentasContar: 'select count(*) as total from tabla_demo',
    getVentasGrupo:`SELECT  * FROM  TIQUETSCAB WHERE SERIE=@serie  ORDER BY NUMERO DESC OFFSET @desde ROWS FETCH NEXT @cuantos ROWS ONLY`,
    getClientebyId: `SELECT * FROM CLIENTES WHERE CODCLIENTE=@CODCLIENTE`,
}

export  const qClientes =  {
    getAll: 'SELECT TOP 100 * FROM CLIENTES',
    add: 'INSERT INTO tabla_demo (tarea,fecha) values (@tarea,@fecha)',
    getById: 'SELECT * FROM CLIENTES WHERE CODCLIENTE=@CODCLIENTE',
    deleteById: 'DELETE from tabla_demo where id=@id',
    getContar: 'select count(*) as total from tabla_demo',
    getVentasGrupo:`SELECT  * FROM  TIQUETSCAB WHERE SERIE=@serie  ORDER BY NUMERO DESC OFFSET @desde ROWS FETCH NEXT @cuantos ROWS ONLY`,
    getClientebyId: `SELECT * FROM CLIENTES WHERE CODCLIENTE=@CODCLIENTE`,
}