'use strict';

const SignatureSessionStatus = {
        PENDING : 'Pending',
        PROCESSING : 'Processing',
        COMPLETED : 'Completed',
        USER_CANCELLED : 'UserCancelled',
        EXPIRED : 'Expired',
        PROCESSING_ERROR : 'ProcessingError'
}

const CertificateRequirementTypes = {
        CRYPTO_DEVICE: 'CryptoDevice',
        CPF: 'Cpf'
}

exports.SignatureSessionStatus = SignatureSessionStatus;
exports.CertificateRequirementTypes = CertificateRequirementTypes;