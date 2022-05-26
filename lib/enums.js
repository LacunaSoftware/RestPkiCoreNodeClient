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

const SignatureType = {
        PDF: 'Pdf',
        CMS: 'Cms',
        XML: 'Xml '

}

exports.SignatureSessionStatus = SignatureSessionStatus;
exports.CertificateRequirementTypes = CertificateRequirementTypes;
exports.SignatureType = SignatureType;