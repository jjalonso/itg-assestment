import { Box, ResponsiveContext, Text, Image, Heading } from 'grommet';
import { useContext } from 'react';
import styled from 'styled-components';

const ModelNameHeading = styled(Heading)`
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  text-transform: uppercase;
  width: fit-content;
` 

// NOTE: The reason why this component doesnt just receive the object 
// is to not create dependencies between the API schema and the component.
// SOLID principles.
const CarBox = ({ 
  name, imageUrl, imageName, price, description, ...props
}) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box 
      border={{color: 'light-3'}} 
      flex={size === 'large'}
      basis={size === 'medium' ? '1/2' : undefined}
      {...props}
    >
      <Box height={{min: 'small'}}>
        <Image 
          fit="cover" 
          alt={imageName} 
          src={imageUrl}
        />
      </Box>
      <Box align="center" pad="large" gap="small">
        <ModelNameHeading textAlign="center" size="small">
          Model {name}
        </ModelNameHeading>
        <Text textAlign="center" color="dark-3" weight={600}>
          From {price}
        </Text>
        <Text textAlign="center" color="dark-3" weight={600}>
          {description}
        </Text>
      </Box>
    </Box>
  )
}
  


export default CarBox;