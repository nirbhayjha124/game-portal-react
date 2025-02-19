import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card width="100%"  borderRadius={9} overflow={'hidden'}>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText  />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton