export class MissingEnvError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'MissingEnvError'
  }
}
