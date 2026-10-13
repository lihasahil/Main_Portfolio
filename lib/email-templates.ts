interface ContactData {
  name: string;
  email: string;
  message: string;
}

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const nl2br = (s: string) => escapeHtml(s).replace(/\r?\n/g, "<br>");

const layout = (title: string, body: string) => `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Inter,Arial,sans-serif;color:#111;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border:1px solid #e4e4e7;border-radius:12px;">
          <tr><td style="padding:24px 28px;border-bottom:1px solid #e4e4e7;font-size:16px;font-weight:600;">${title}</td></tr>
          <tr><td style="padding:24px 28px;font-size:14px;line-height:1.6;">${body}</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

/** Email delivered to the portfolio owner. */
export function ownerTemplate({ name, email, message }: ContactData) {
  const subject = `New portfolio message from ${name.replace(/[\r\n]/g, " ")}`;
  const text = `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
  const html = layout(
    "New message from your portfolio",
    `<p style="margin:0 0 4px;"><b>Name:</b> ${escapeHtml(name)}</p>
     <p style="margin:0 0 16px;"><b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
     <div style="padding:14px 16px;background:#fafafa;border:1px solid #e4e4e7;border-radius:8px;">${nl2br(message)}</div>
     <p style="margin:16px 0 0;color:#71717a;font-size:12px;">Hit reply to respond directly to ${escapeHtml(name)}.</p>`,
  );
  return { subject, text, html };
}

/** Auto-reply confirmation sent to the person who submitted the form. */
export function senderTemplate({ name, message }: ContactData) {
  const subject = "Thanks for reaching out";
  const text = `Hi ${name},\n\nThanks for reaching out! I've received your message and will get back to you within 24 hours.\n\nYour message:\n${message}\n\n— Sahil Shrestha`;
  const html = layout(
    "Thanks for reaching out",
    `<p style="margin:0 0 12px;">Hi ${escapeHtml(name)},</p>
     <p style="margin:0 0 16px;">Thanks for reaching out! I've received your message and will get back to you within 24 hours.</p>
     <p style="margin:0 0 6px;color:#71717a;font-size:12px;">Your message</p>
     <div style="padding:14px 16px;background:#fafafa;border:1px solid #e4e4e7;border-radius:8px;">${nl2br(message)}</div>
     <p style="margin:20px 0 0;">— Sahil Shrestha</p>`,
  );
  return { subject, text, html };
}
