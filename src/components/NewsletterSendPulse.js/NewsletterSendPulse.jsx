'use client';

import { useEffect } from 'react';

export default function NewsletterSendPulse() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//web.webformscr.com/apps/fc3/build/default-handler.js?1744699503990';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="newsletter-wrapper">
      <div
        dangerouslySetInnerHTML={{
          __html: `

        <div id="sp-form-246255" sp-id="246255" sp-hash="5b136c4e66c63315932b529c8de55434739ae7c1c54deeae2696020a1cb32798" sp-lang="pt-br" class="sp-form sp-form-regular sp-form-popup sp-form-horizontal">
          <div class="sp-form-fields-wrapper">
            <form novalidate class="sp-element-container sp-field-nolabel">
              <div class="sp-field sp-field-full-width">
                <p classname="footer-title">Newsletter</p>
                <p><span style="color: #ffffff;">Receba atualizações sobre os melhores filmes da semana.</span></p>
              </div>
              <div class="sp-field">
                <input type="email" name="sform[email]" class="sp-form-control" placeholder="Seu e-mail" required />
              </div>
              <div class="sp-field sp-button-container">
                <button class="sp-button">Inscrever</button>
              </div>
            </form>
          </div>
        </div>
      `,
        }}
      />
    </div>
  );
}
