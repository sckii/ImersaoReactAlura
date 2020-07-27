import React from 'react'
import { Title, VideoCardGroupContainer, ExtraLink, ImgLink } from './styles'

function Names({
  names
}) {
    const name = names.titulo
    const categoryColor = names.cor
    const link = names.link
    const text = names.text
    return (
      <VideoCardGroupContainer>
        <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {name}
        </Title>
        <ExtraLink href={link} target='_blank'>
          {text}
        </ExtraLink>
        
      </VideoCardGroupContainer>
    )
  }
  
export default Names;
  