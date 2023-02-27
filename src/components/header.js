import React from "react"
import { Stack, Image, Text} from '@chakra-ui/react';
import logo from '../../src/assets/logo.png';

const Header = () => {
    return (
      <Stack>
        <div
          style={{
            backgroundImage: `url('../../assets/logo.png')`,
            backgroundPosition: 'center',
            backgroundColor: '#CDE2FE',
            backgroundPositionX:"100",
            backgroundPositionY:"20"
          }}
        >
          <Stack  justifyContent={'center'} >
            <Image position='center' height={'44px'} width={'44px'} src={logo} />
            <Text color="#011632" textAlign="center" fontSize='45px'fontFamily="heading" fontWeight='600'>Vetly</Text>
          </Stack>
        </div>
      </Stack>
    );
  };
  export default Header;