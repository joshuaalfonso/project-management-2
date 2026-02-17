import { Spinner } from "@chakra-ui/react"






const LoadingSpinner = () => {
  return (
    <div className="grid place-items-center h-32">
        <Spinner size="lg" />
    </div>
  )
}

export default LoadingSpinner