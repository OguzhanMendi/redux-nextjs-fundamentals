import ContactForm from "@/components/contactForm";

export default function Iletisim() {
  return (
    <>
      <h2>Component Temeller sayfası.</h2>
      <p>Bize istediğiniz zaman ulaşabilirsiniz</p>
      <p>Çalışma Saatlerimiz aşağıdaki gibidir.</p>
      <p>hafta İçi : 09:00 - 18:00</p>
      <p>hafta sonu : 10:00 - 16:00</p>
      <b>iletişim bilgileri</b>

      <ContactForm formTitle="bize ulaşın" />
    </>
  );
}
