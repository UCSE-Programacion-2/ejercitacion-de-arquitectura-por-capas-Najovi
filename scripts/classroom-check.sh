set -euo pipefail

REQUISITO=${1:-}

if [ "$REQUISITO" = "arquitectura" ]; then
    FALTAN=0
    
    if [ ! -d "routes" ]; then
        echo "Error: No se encontró la carpeta 'routes'" >&2
        FALTAN=1
    fi
    if [ ! -d "controllers" ]; then
        echo "Error: No se encontró la carpeta 'controllers'" >&2
        FALTAN=1
    fi
    if [ ! -d "models" ]; then
        echo "Error: No se encontró la carpeta 'models'" >&2
        FALTAN=1
    fi
    if [ ! -d "config" ]; then
        echo "Error: No se encontró la carpeta 'config'" >&2
        FALTAN=1
    fi

    if [ $FALTAN -eq 1 ]; then
        exit 1
    fi

    echo "CORRECTO"
    exit 0
else
    echo "Requisito desconocido: $REQUISITO" >&2
    exit 1
fi
