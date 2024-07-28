import { useQuery } from '@tanstack/react-query'
import { SysDefaults } from '../services/system_Services'

export function useSysDefaults() {
  const {
    isPending: isLoadingDefaults,
    data: sysDefaults,
    error,
  } = useQuery({
    queryKey: ['sysDefaults'],
    queryFn: SysDefaults,
  })

  return { isLoadingDefaults, sysDefaults, error }
}
