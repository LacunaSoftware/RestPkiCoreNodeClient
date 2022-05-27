export interface CreateSignatureSessionRequest {
    returnUrl?: string;
    securityContextId?: string;
    callbackArgument?: string;
    enableBackgroundProcessing: boolean;
    disableDownloads: boolean;
    get(str: string): boolean;
}
