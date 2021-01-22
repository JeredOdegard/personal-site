export class ServerError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ServerError'
  }
}

export class NetworkError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NetworkError'
  }
}

export class InputError extends Error {
  constructor(message, errors) {
    super(message)
    this.name = 'InputError'
    this.errors = errors
  }
}