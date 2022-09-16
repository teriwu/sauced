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
import { FaLocationArrow, FaBusAlt, FaWalking, FaCar, FaBiking } from 'react-icons/fa'
import { useState, useRef } from "react";

const center = {
    lat: 37.820132,
    lng: -122.478137,
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [map, setMap] = React.useState( /** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState('')
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const startRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const endRef = useRef()

    
    async function calculateRoute() {
      if (startRef.current.value === "" || endRef.current.value === "") {
        return
      }
      document.getElementById("mode").addEventListener("change", () => {
        calculateRoute(directionsService);
      });
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const selectedMode = document.getElementById("mode").value
      const results = await directionsService.route({
        origin: startRef.current.value,
        destination: endRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode[selectedMode],
      })
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
    };

    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      startRef.current.value = ''
      endRef.current.value = ''
    }

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
            {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
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
                <Input type='text' placeholder='Start' ref={startRef}/>
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input type='text' placeholder='End' ref={endRef}/>
              </Autocomplete>
            </Box>
            <ButtonGroup>
              <Button bgColor={'skyblue'} type="submit" onClick={calculateRoute}>
                Get directions
              </Button>
              <Button bgColor={'red.500'} type="submit" onClick={clearRoute}>
                Cancel
              </Button>
            </ButtonGroup>
          </HStack>
          <HStack spacing={3} mt={1} justifyContent='space-between'>
            <Text>Distance: {distance}</Text>
            <Text>Duration: {duration}</Text>
            <IconButton 
            icon={<FaLocationArrow />} 
            onClick={() => {map.panTo(center); map.setZoom(10)}}
            />
          </HStack>
          <HStack mt={1}>
            {/* <Iconbutton icon={<FaWalking />} id="mode" value="WALKING"/>
            <button id="mode" value="DRIVING">Driving</button>
            <button id="mode" value="BICYCLING">Bicycling</button>
            <button id="mode" value="TRANSIT">Transit</button> */}
            <select className="form-control" id="mode">
              <option value="">Select Mode</option>
              <option value="WALKING">Walking</option>
              <option value="DRIVING">Driving</option>
              <option value="BICYCLING">Bicycling</option>
              <option value="TRANSIT">Transit</option>
            </select>
          </HStack>
        </Box>
      </Flex>
    )
    : <></>
}

export default Map