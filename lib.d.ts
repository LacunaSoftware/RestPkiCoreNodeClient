
export class Gotham {
    constructor(config: Batman);
}

export interface IBatman {
    sessionId?: string
    redirectUrl?: string
}

export interface Robin {
    idade: number,
}

export class Batwoman {
    cinto_de_util: string;
    matarCoringa(string): boolean {
        return true;
    };
}

export interface Batgirl extends Batwoman{
    kk_eae_men : string;
}

export interface ICreateSignatureSessionController {
    returnUrl? : string;

    postSignatureSession(signData: SignatureSessionDocumentData) : SignatureSessionDocumentResponse;
}

export class CreateSignatureSessionController implements ICreateSignatureSessionController {
    postSignatureSession(signData){
        return response
    }
}

declare var batman: Batman;
export default batman;


declare var robin: Robin;
export default robin;
