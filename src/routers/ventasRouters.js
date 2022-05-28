import { Router } from "express";
import {createNewVenta, deleteVentasNumero, getVentasTotal, getVentas, getVentasNumero} from "../controllers/ventasControllers"

const router = Router();

router.get('/ventas',getVentas);

router.post('/ventas',createNewVenta);

router.get('/ventas/count',getVentasTotal);

router.get('/ventas/:serie/:numero',getVentasNumero);

router.delete('/ventas/:id',deleteVentasNumero);

export default router;