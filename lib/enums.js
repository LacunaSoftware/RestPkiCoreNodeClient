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

// Authentication failure enumeration
const AuthenticationFailures = {
        CERTIFICATE_FAILED_VALIDATION: 'CertificateFailedValidation',
        STALE_SESSION: 'StaleSession'
}

// Validation item types for ValidationItemModel
const ValidationItemTypes = {
        SUCCESS: 'Success',
        CERTIFICATE_NOT_YET_VALID: 'CertificateNotYetValid',
        CERTIFICATE_EXPIRED: 'CertificateExpired',
        CERTIFICATE_REVOKED: 'CertificateRevoked',
        CERTIFICATE_ISSUER_NOT_FOUND: 'CertificateIssuerNotFound', 
        CERTIFICATE_REVOCATION_STATUS_UNKNOWN: 'CertificateRevocationStatusUnknown', 
        CERTIFICATE_CHAIN_ROOT_NOT_TRUSTED: 'CertificateChainRootNotTrusted', 
        INVALID_CERTIFICATE_SIGNATURE: 'InvalidCertificateSignature', 
        DECODE_ERROR: 'DecodeError', 
        REQUIRED_SIGNED_ATTRIBUTE_MISSING: 'RequiredSignedAttributeMissing', 
        FORBIDDEN_SIGNED_ATTRIBUTE_PRESENT: 'ForbiddenSignedAttributePresent', 
        REQUIRED_UNSIGNED_ATTRIBUTE_MISSING: 'RequiredUnsignedAttributeMissing', 
        FORBIDDEN_UNSIGNED_ATTRIBUTE_PRESENT: 'ForbiddenUnsignedAttributePresent', 
        CONTENT_TYPE_MISMATCH: 'ContentTypeMismatch', 
        MESSAGE_DIGEST_MISMATCH: 'MessageDigestMismatch', 
        SIGNING_CERTIFICATE_DIGEST_MISMATCH: 'SigningCertificateDigestMismatch', 
        SIGNATURE_ALGORITHM_VALIDATION_FAILED: 'SignatureAlgorithmValidationFailed', 
        REVOCATION_DATA_ISSUED_BEFORE_GRACE_PERIOD: 'RevocationDataIssuedBeforeGracePeriod', 
        UNCERTIFIED_DATE_REFERENCE: 'UncertifiedDateReference', 
        SIGNATURE_POLICY_MISMATCH: 'SignaturePolicyMismatch', 
        SIGNING_TIMEOUT_OF_CERTIFICATE_VALIDITY: 'SigningTimeOutOfCertificateValidity', 
        UNKNOWN_SIGNED_ATTRIBUTES_PRESENT: 'UnknownSignedAttributesPresent', 
        UNKNOWN_UNSIGNED_ATTRIBUTES_PRESENT: 'UnknownUnsignedAttributesPresent', 
        TIMESTAMP_WITH_MORE_THAN_ONE_SIGNER: 'TimestampWithMoreThanOneSigner', 
        TIMESTAMP_MESSAGE_IMPRINT_MISMATCH: 'TimestampMessageImprintMismatch', 
        TIMESTAMP_VALIDATION_EXCEPTION: 'TimestampValidationException', 
        COMPLETE_REFERENCES_MISMATCH: 'CompleteReferencesMismatch', 
        INVALID_SIGNATURE_TIMESTAMP: 'InvalidSignatureTimestamp', 
        INVALID_REFERENCES_TIMESTAMP: 'InvalidReferencesTimestamp',  
        INVALID_ARCHIVE_TIMESTAMP: 'InvalidArchiveTimestamp', 
        INVALID_KEY_USAGE: 'InvalidKeyUsage', 
        INVALID_OCS_PRESPONSE: 'InvalidOcspResponse', 
        UNAUTHORIZED_ISSUER: 'UnauthorizedIssuer', 
        UNKNOWN_ROOT_TRUST_STATUS: 'UnknownRootTrustStatus', 
        INVALID_TSL: 'InvalidTsl', 
        INVALID_CRL: 'InvalidCrl', 
        CERTIFICATE_ISSUER_VALID: 'CertificateIssuerValid', 
        CERTIFICATE_ISSUER_INVALID: 'CertificateIssuerInvalid', 
        CERTIFICATE_VALIDATION_FAILED: 'CertificateValidationFailed', 
        SIGNATURE_VULNERABLE_TO_SIGNER_SUBSTITUTION: 'SignatureVulnerableToSignerSubstitution', 
        INVALID_XML_SIGNATURE_SCHEMA: 'InvalidXmlSignatureSchema', 
        XML_D_SIG_CORE_VALIDATION_FAILED: 'XmlDSigCoreValidationFailed', 
        SIGNATURE_TIMESTAMP_IGNORED: 'SignatureTimestampIgnored',
        INVALID_CERTIFICATION_PATH_LEN: 'InvalidCertificationPathLen',
        SIGNING_CERTIFICATE_NOT_FOUND: 'SigningCertificateNotFound',
        UNAUTHORIZED_AC_ISSUER: 'UnauthorizedACIssuer', 
        ALGORITHM_NOT_ALLOWED: 'AlgorithmNotAllowed', 
        UNACCEPTABLE_SIGNATURE_POLICY: 'UnacceptableSignaturePolicy'
}


exports.SignatureSessionStatus = SignatureSessionStatus;
exports.CertificateRequirementTypes = CertificateRequirementTypes;
exports.DigestAlgorithms = DigestAlgorithms;
exports.AuthenticationFailures = AuthenticationFailures;
exports.ValidationItemTypes = ValidationItemTypes