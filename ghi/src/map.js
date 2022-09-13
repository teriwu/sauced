import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  } from '@chakra-ui/react'
import { GoogleMap, useJsApiLoader, DirectionsRenderer, Marker, Autocomplete } from "@react-google-maps/api";
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useState, useRef } from "react";

const center = {
    lat: 37.8185,
    lng: -122.4738,
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [map, setMap] = React.useState( /** @type google.maps.Map */ (null))



    return isLoaded ? (
      <Flex
        position='relative'
        flexDirection={'column'}
        alignItems='center'
        h={'800px'}
        w={'100%'}>
        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            
          </GoogleMap>
        </Box>
        <Box
          p={3}
          borderRadius='lg'
          m={3}
          bgColor='white'
          shadow='base'
          minW='container.sm'
          zIndex='1'
        >
          <HStack>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input type='text' placeholder='Start' />
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input type='text' placeholder='End' />
              </Autocomplete>
            </Box>
            <ButtonGroup>
              <Button bgColor={'skyblue'} type="submit">
                Get directions
              </Button>
              <Button bgColor={'red.500'} type="submit">
                Cancel
              </Button>
            </ButtonGroup>
          </HStack>
          <HStack spacing={3} mt={3} justifyContent='space-between'>
            <text>Distance: </text>
            <text>Duration: </text>
            <IconButton 
            icon={<FaLocationArrow />} 
            onClick={() => {map.panTo(center); map.setZoom(10)}}
            />
          </HStack>
        </Box>
      </Flex>
    )
    : <></>
}

export default Map