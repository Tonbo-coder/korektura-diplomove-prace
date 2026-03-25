// Browser shim for undici – exports native browser fetch
// so that @vercel/blob/client works in the browser
export const fetch = globalThis.fetch
export const Request = globalThis.Request
export const Response = globalThis.Response
export const Headers = globalThis.Headers
export const FormData = globalThis.FormData
