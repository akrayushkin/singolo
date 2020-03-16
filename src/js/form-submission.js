class FormSubmission {
  constructor(form, modal) {
    this.form = document.querySelector(form);
    this.modal = document.querySelector(modal);
    this.init();
  }

  init() {
    this.button = this.form.querySelector('.form__button');
    this.modalClose = this.modal.querySelector('.modal__close-button');
    this.modalText = this.modal.querySelector('.modal__text');
    this.actions();
  }
  
  _closePopup() {
    this.modal.classList.add('visually-hidden');
  }

  actions() {
    this.button.addEventListener('click', (evt) => {
      if(this.form.checkValidity()) {
        evt.preventDefault();
        let subject = document.querySelector('#user-subject').value.toString();
        subject = subject ? `<b>Тема:</b> ${subject}` : `<b>Без темы</b>`;
        let describe = document.querySelector('#user-comment').value.toString();
        describe = describe ? `<b>Описание:</b> ${describe}` : `<b>Без описания</b>`;
        this.modalText.innerHTML = `<h3>Письмо отправлено!</h3><p>${subject}</p><p>${describe}</p>`;
        this.modal.classList.remove('visually-hidden');
        this.modalClose.focus();
      }
    });
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') this._closePopup();
    });
    this.modal.addEventListener( 'click', evt => {
      const target = evt.target;
      if (target.closest('.modal__box')) return null;
      this._closePopup();
    });
    this.modalClose.addEventListener('keydown', evt => {
      if (evt.code === 'Enter') this._closePopup();
    });
    this.modalClose.addEventListener('click', () => this._closePopup());
    this.form.querySelectorAll('input').forEach(input => {
      input.addEventListener('focus', () => {
        input.maxLength = '120';
      })
    });
    this.form.comment.addEventListener('focus', () => {
      this.form.comment.maxLength = '900';
    })
  }
}

export default FormSubmission;
