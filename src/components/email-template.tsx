import { FC } from 'react'

interface EmailTemplateProps {
  email: string
  name?: string
  message?: string
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  message
}) => (
  <div>
    <h1>Gracias por registrarte, {email}!</h1>
    {name && <h2>{name}:</h2>}
    {message && <p>{message}</p>}
  </div>
)
