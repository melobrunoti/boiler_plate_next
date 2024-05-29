interface  IBanksData { 
    AGENTEVISUALIZA: String,
    CODBANCO: String,
    DESCRICAO: String,
    ISPB: String, 
}

export type IBanksResponseData = Array<IBanksData>