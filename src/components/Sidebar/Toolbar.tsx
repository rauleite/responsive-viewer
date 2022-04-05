import React from 'react'
import Stack from '@mui/material/Stack'
import ElementSelector from './ElementSelector'
import ToggleButton from '@mui/material/ToggleButton'
import { useAppSelector } from '../../hooks/useAppSelector'
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import Export from './Export'

import {
  selectSyncClick,
  selectSyncScroll,
  toggleSyncClick,
  toggleSyncScroll,
} from '../../reducers/app'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { selectMouseInspect, toggleMouseInspect } from '../../reducers/layout'

const Icon = styled('svg')(() => ({
  width: 15,
}))

interface Props {
  direction: 'row' | 'column'
}

const Toolbar = ({ direction }: Props) => {
  const dispatch = useAppDispatch()

  const syncClick = useAppSelector(selectSyncClick)
  const syncScroll = useAppSelector(selectSyncScroll)
  const mouseInspect = useAppSelector(selectMouseInspect)
  const tooltipPlacement = direction === 'row' ? 'bottom' : 'right'
  return (
    <Stack px={1} py={2} spacing={1} direction={direction} alignItems="center">
      <Tooltip
        disableFocusListener={true}
        arrow
        placement={tooltipPlacement}
        title="Sync Scrolling"
      >
        <ToggleButton
          value="syncClicks"
          aria-label="Sync Scroll"
          onClick={() => dispatch(toggleSyncScroll())}
          selected={syncScroll}
          size="small"
        >
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="-90 0 512 512">
            <path
              d="M166.238281 430.144531L76.46875 335.246094l29.058594-27.488282 60.632812 64.097657 60.273438-64.058594 29.132812 27.410156zM332 392V120C332 53.832031 278.167969 0 212 0h-92C53.832031 0 0 53.832031 0 120v272c0 66.167969 53.832031 120 120 120h92c66.167969 0 120-53.832031 120-120zM212 40c44.113281 0 80 35.886719 80 80v272c0 44.113281-35.886719 80-80 80h-92c-44.113281 0-80-35.886719-80-80V120c0-44.113281 35.886719-80 80-80zm-46 41c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 0"
              fill="currentColor"
            />
          </Icon>
        </ToggleButton>
      </Tooltip>
      <Tooltip arrow placement={tooltipPlacement} title="Sync Clicks">
        <ToggleButton
          value="syncClicks"
          aria-label="Sync Clicks"
          onClick={() => dispatch(toggleSyncClick())}
          selected={syncClick}
          size="small"
        >
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297">
            <path
              d="M294.077 251.199l-59.104-59.106 42.166-24.357c3.295-1.904 5.213-5.521 4.938-9.316-.273-3.796-2.69-7.101-6.225-8.51L87.82 74.905c-3.687-1.472-7.895-.605-10.702 2.201-2.807 2.808-3.674 7.016-2.203 10.702l74.994 188.053c1.41 3.534 4.715 5.952 8.511 6.226 3.796.276 7.413-1.643 9.316-4.939l24.353-42.166 59.102 59.107c1.862 1.864 4.389 2.91 7.023 2.91 2.634 0 5.16-1.046 7.022-2.91l28.841-28.844c3.879-3.879 3.879-10.167 0-14.046zm-35.863 21.823l-61.229-61.235c-1.876-1.876-4.407-2.91-7.023-2.91-.43 0-.864.028-1.295.085-3.063.402-5.763 2.206-7.306 4.881l-20.584 35.642-58.849-147.564 147.549 58.857-35.645 20.588c-2.674 1.543-4.478 4.243-4.88 7.306-.403 3.06.64 6.134 2.824 8.318l61.232 61.235-14.794 14.797zM43.611 29.552c-3.88-3.876-10.166-3.876-14.048 0-3.879 3.88-3.879 10.168 0 14.048l22.069 22.069c1.939 1.938 4.482 2.909 7.024 2.909 2.541 0 5.082-.971 7.023-2.909 3.878-3.879 3.878-10.168 0-14.047l-22.068-22.07zM51.089 98.215c0-5.485-4.448-9.931-9.933-9.931H9.946c-5.484 0-9.933 4.445-9.933 9.931 0 5.484 4.448 9.932 9.933 9.932h31.21c5.485-.001 9.933-4.448 9.933-9.932zM47.063 128.87l-22.071 22.071c-3.88 3.877-3.88 10.166 0 14.045 1.939 1.939 4.479 2.909 7.023 2.909 2.541 0 5.082-.97 7.021-2.909l22.072-22.07c3.879-3.878 3.879-10.168 0-14.046-3.877-3.878-10.165-3.878-14.045 0zM98.222 51.078c5.484 0 9.932-4.448 9.932-9.933V9.932c0-5.484-4.447-9.932-9.932-9.932s-9.931 4.447-9.931 9.932v31.214c0 5.484 4.445 9.932 9.931 9.932zM135.893 64.005c2.544 0 5.085-.968 7.024-2.908l22.068-22.069c3.88-3.879 3.88-10.168 0-14.046-3.878-3.879-10.169-3.879-14.045 0l-22.069 22.069c-3.879 3.878-3.879 10.168 0 14.046 1.939 1.94 4.481 2.908 7.022 2.908z"
              fill="currentColor"
            />
          </Icon>
        </ToggleButton>
      </Tooltip>

      <Tooltip arrow placement={tooltipPlacement} title="Inspect by mouse">
        <ToggleButton
          value="mouseInspect"
          aria-label="Inspect by mouse"
          selected={mouseInspect}
          onClick={() => {
            dispatch(toggleMouseInspect())
          }}
          size="small"
        >
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.71 256.02">
            <path
              d="M265.8 210.22l-59.11-59.11 42.17-24.35a9.93 9.93 0 00-1.29-17.83l-188-75a9.93 9.93 0 00-12.9 12.91l75 188.05a9.93 9.93 0 0017.83 1.29L163.81 194l59.1 59.11a9.93 9.93 0 0014.05 0l28.84-28.85a9.92 9.92 0 000-14.04zM229.94 232l-61.23-61.23a9.93 9.93 0 00-7-2.91 9.31 9.31 0 00-1.29.08 10 10 0 00-7.31 4.88L132.5 208.5 73.65 60.94 221.2 119.8l-35.65 20.59A9.92 9.92 0 00183.5 156l61.23 61.23z"
              fill="currentColor"
            />
            <path
              d="M73.27 181.57H26.4A26.42 26.42 0 010 155.18V26.4A26.43 26.43 0 0126.4 0h128.78a26.42 26.42 0 0126.39 26.4v23.9h-3V26.4A23.42 23.42 0 00155.18 3H26.4A23.43 23.43 0 003 26.4v128.78a23.42 23.42 0 0023.4 23.39h46.87z"
              fill="currentColor"
            />
          </Icon>
        </ToggleButton>
      </Tooltip>

      <ElementSelector tooltipPlacement={tooltipPlacement} />

      <Export tooltipPlacement={tooltipPlacement} />
    </Stack>
  )
}

export default Toolbar
