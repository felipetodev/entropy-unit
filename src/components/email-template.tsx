import { FC } from 'react'

interface EmailTemplateProps {
  email: string
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  email
}) => (
  <div>
    <h1>Gracias por registrarte, {email}!</h1>
  </div>
)
