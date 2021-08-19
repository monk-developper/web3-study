import logType from './log'
import MethodType from './method'

interface Props {
  selectMethod?: string
  LogList: Array<logType>
  MethodList: Array<MethodType>
  setMethod?: any
  setLog?: any
}

export default Props
