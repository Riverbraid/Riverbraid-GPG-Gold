#!/bin/bash
EXPECTED="D9475D6B717D0E6C8EC84F6D8F86D9F4F2B083A4"
ACTUAL=$(cat FINGERPRINT.anchor)

if [ "$ACTUAL" == "$EXPECTED" ]; then
  echo "✅ IDENTITY VERIFIED: GPG Fingerprint matches the Institutional Floor."
else
  echo "❌ CRITICAL: IDENTITY MISMATCH. GPG Fingerprint drift detected."
  exit 1
fi
