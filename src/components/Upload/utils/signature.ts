import crypto from "crypto";

function generateSignature(expire: string) {
  const hmac = crypto.createHmac(
    "sha256",
    process.env.NEXT_PUBLIC_UPLOADCARE_SECRET_KEY || "",
  );
  hmac.update(expire);
  return hmac.digest("hex");
}

export { generateSignature };
