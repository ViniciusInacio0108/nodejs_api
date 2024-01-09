export class InternalError extends Error {
    constructor(public message: string,
                protected code: number = 500,
        protected description?: string
    ) { 
        super(message);
        this.name = this.constructor.name;
        // boa prática para remover essa classe para não aparecer no erro somente a partir de onde foi chamado
        Error.captureStackTrace(this, this.constructor);
    }
}