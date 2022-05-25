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

// Digest algorithms enumeration
const DigestAlgorithms = {
	MD5: 'MD5',
	SHA1: 'SHA1',
	SHA256: 'SHA256',
	SHA384: 'SHA384',
	SHA512: 'SHA512'
};

exports.SignatureSessionStatus = SignatureSessionStatus;
exports.CertificateRequirementTypes = CertificateRequirementTypes;
exports.DigestAlgorithms = DigestAlgorithms;