# frozen_string_literal: true

class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    @email = @contact.email
    @object = @contact.object
    @content = @contact.content
    mail(to: 'loulergueamelie@yahoo.fr', subject: "Un Woovver nous sollicite !")
  end
end
