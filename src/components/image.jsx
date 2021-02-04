/** @jsxImportSource theme-ui */
import { jsx, Box } from 'theme-ui'


const ImageComponent = () => {
  return (
    <Box>
      <img
        src="/thomas.jpeg"
        alt="Picture of Thomas"
        sx={{ borderRadius: 0, maxWidth: 320 }}
      />
    </Box>
  )
}

export default ImageComponent
