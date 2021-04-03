import * as React from 'react'

import { Alert, AlertProps } from 'react-bootstrap'

type MessageProps = AlertProps

const Message: React.FC<MessageProps> = ({ children, variant }) => (
  <Alert variant={variant}>{children}</Alert>
)

export default Message
