const errorHandler = (err, req, res, next) => {
    console.error(err);

    const estado = err.status || 500;

    res.status(estado).json({
        success: false,
        error: err.message || "Error interno del servidor"
    });
}

export default errorHandler;