import getInstance from './axios'

export function getCoures() {
  const url = '/getCoures'
  return getInstance()({
    method: 'post',
    url
  })
}