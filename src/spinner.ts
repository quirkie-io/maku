import yoctoSpinner from 'yocto-spinner'

const spinner = yoctoSpinner({
  color: 'magenta',
})

export type LoadingType = 'success' | 'info' | 'error' | 'warning'
export type LoadingOptions = {
  type?: LoadingType
  message?: string
}

export const start = (message: string) => {
  if (spinner.isSpinning) {
    spinner.text = message
    return
  }
  spinner.start(message)
}

export const stop = () => {
  if (spinner.isSpinning) {
    spinner.stop()
  }
}

export function stopByType(type: LoadingType) {
  switch (type) {
    case 'success':
      if (spinner.isSpinning) {
        spinner.success()
      }
      break
    case 'info':
      spinner.info()
      break
    case 'error':
      if (spinner.isSpinning) {
        spinner.error()
      }
      break
    case 'warning':
      spinner.warning()
      break
  }
}

export const loading = (cb?: () => void, options?: LoadingOptions) => {
  const message = options?.message ?? 'Loading '
  const type = options?.type ?? 'success'
  start(message)
  cb?.()
  stopByType(type)
}

export const loadingPromise = async <T>(cb?: () => Promise<T>, options?: LoadingOptions): Promise<T | undefined> => {
  const message = options?.message ?? 'Processando '
  const type = options?.type ?? 'success'

  try {
    start(message)
    return await cb?.()
  } catch (error) {
    stopByType('error')
  } finally {
    stopByType(type)
  }
}
