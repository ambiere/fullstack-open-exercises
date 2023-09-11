/* eslint-disable @typescript-eslint/no-explicit-any */
export default function errorLogger(error: any, requestFnName: string) {
  console.error(`${requestFnName}:`, {
    method: error.config.method,
    url: error.config.url,
    code: error.code,
    message: error.message,
  })
}
