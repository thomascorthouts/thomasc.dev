/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

const ImageComponent: React.FC = () => {
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
