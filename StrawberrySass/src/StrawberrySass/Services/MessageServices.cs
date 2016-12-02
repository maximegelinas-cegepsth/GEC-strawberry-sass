using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace StrawberrySass.Services
{
    public class MessageService : IEmailSender
    {
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Strawberry Sass", "strawberrysass.info@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;

            var bodyBuilder = new BodyBuilder { HtmlBody = message };
            emailMessage.Body = bodyBuilder.ToMessageBody();

            using (var client = new SmtpClient())
            {
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                await client.ConnectAsync("smtp.gmail.com", 587);

                client.AuthenticationMechanisms.Remove("XOAUTH2");
                await client.AuthenticateAsync("strawberrysass.info@gmail.com", "Str=123!");

                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }
    }
}
