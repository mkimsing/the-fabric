import { createGlobalStyle } from 'styled-components'
import RobotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf'
import RobotoMedium from '../assets/fonts/Roboto/Roboto-Medium.ttf'
import RobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf'
import RobotoBlack from '../assets/fonts/Roboto/Roboto-Black.ttf'

/**
 * Global css injected at the top of app. Defines font faces
 * 
 */
export default createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: Roboto;
    src: url(${RobotoMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: Roboto;
    src: url(${RobotoBold});
    font-weight: 700;
  }

    @font-face {
    font-family: Roboto;
    src: url(${RobotoBlack});
    font-weight: 900;
  }

  * {
    font-family: Roboto;
  }
`