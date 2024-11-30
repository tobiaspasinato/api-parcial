SELECT 
    dp.PedidoID, 
    p.NombreProducto, 
    dp.Cantidad - IFNULL(SUM(e.CantidadEntregada), 0) AS PendienteEntrega,
    dp.Cantidad - IFNULL(SUM(e.CantidadEntregada), 0) AS CantidadPendiente,
    dp.Cantidad - IFNULL(SUM(e.CantidadEntregada), 0) AS FechaEntregaComprometida
FROM DetallePedidos dp
LEFT JOIN Entregas e ON dp.PedidoID = e.PedidoID AND dp.ProductoID = e.ProductoID
LEFT JOIN Productos p ON dp.ProductoID = p.ProductoID
WHERE dp.Cantidad > IFNULL(SUM(e.CantidadEntregada), 0)
GROUP BY dp.PedidoID, dp.ProductoID;
