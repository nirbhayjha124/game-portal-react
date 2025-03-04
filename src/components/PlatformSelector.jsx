import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'


const PlatformSelector = ({ onSelectPlatform, selectedPlatform }) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button}  rightIcon={ <BsChevronBarDown /> } >
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}

      </MenuList>
    </Menu>
  )
}

export default PlatformSelector