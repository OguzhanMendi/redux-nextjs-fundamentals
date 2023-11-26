export default function ContactForm({ formTitle }) {
  return (
    <>
      <div className="p-5 m-5 border flex flex-col">
        <input type="text" placeholder="Adınız" />
        <input type="text" placeholder="soyadınız" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="konu" />
        <textarea name="" id="" color="33" rows="10"></textarea>

        <button>Gönder</button>
      </div>
    </>
  );
}
