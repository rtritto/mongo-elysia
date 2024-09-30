export { }

declare global {
  // eslint-disable-next-line no-var
  var config: import('./../../config.default').Config
  // eslint-disable-next-line no-var
  var mongo: Mongo
  // eslint-disable-next-line no-var
  var messageError: string | undefined
  // eslint-disable-next-line no-var
  var messageSuccess: string | undefined
}