module.exports = {
    verifyFingerprint: (id) => {
        const VALID_FINGERPRINT = "D9475D6B717D0E6C8EC84F6D8F86D9F4F2B083A4";
        return id === VALID_FINGERPRINT;
    }
};
