import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { Logout } from '../../services/systemServices'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()

  const { isPending, mutate: handleLogOut } = useMutation({
    mutationKey: ['logout'],
    mutationFn: Logout,
    onSuccess: () => {
      navigate('/', { replace: true })
    },
    onError: (error) => {
      console.log(error)
    },
    onSettled: () => {
      navigate('/', { replace: true })
    },
  })

  // const handleLogout = () => {
  //   navigate('/', { replace: true })
  // }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-1">Account</CDropdownHeader>
        <CDropdownItem className="account-item">
          <CIcon icon={cilUser} className="me-2" />
          Profile ({JSON.parse(localStorage.getItem('user')).username})
        </CDropdownItem>
        <CDropdownItem className="account-item">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem className="account-item">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem className="account-item">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem className="text-danger account-item" onClick={handleLogOut}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
