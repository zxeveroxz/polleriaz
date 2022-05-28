export  const querys =  {
    getAllVentas: 'SELECT TOP 100 * FROM TIQUETSCAB',
    addNewVentas: 'INSERT INTO tabla_demo (tarea,fecha) values (@tarea,@fecha)',
    getVentasByNumero: 'SELECT * FROM TIQUETSCAB WHERE serie=@serie and numero=@numero',
    deleteVentasByNumero : 'DELETE from tabla_demo where id=@id',
    getVentasContar: 'select count(*) as total from tabla_demo'
}