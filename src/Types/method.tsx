interface MethodType {
  host: string
  method: string | number | readonly string[] | undefined
  library: string
}

export default MethodType
