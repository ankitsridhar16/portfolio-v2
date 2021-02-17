import React from 'react'
import { Menu as MenuOption, Spacer ,MenuButton, AddIcon, HamburgerIcon, MenuList, MenuItem, IconButton} from '@chakra-ui/react';

const Options = () => {
    return(
            <MenuOption>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                size="xs"
                variant="outline"
            />
            <MenuList>
                <MenuItem icon={<AddIcon />} command="⌘T">New Tab</MenuItem>
            </MenuList>
        </MenuOption>
    )
}

export default Options;
