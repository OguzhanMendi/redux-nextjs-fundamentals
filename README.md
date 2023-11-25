### Yeni bir React - NextJS uygulaması oluşturmak.

Yeni bir proje oluşturmak için:

- npx create-next-app Komutu Terminal'de çalıştırılır.
- Tailwind haricindeki bütün seçenekler "No" diyerek geçilebilir.(Tercihen)

#####2- NextJS Template'inin Temizlenmesi.

-Silinicek olan klasör/dosya ve satırlar şu şekildedir:

-pages => api klasörü
-styles > globas.css içerisinde @tailwind şeklinde başlayan satırlar haricindeki diğer satırlar silinir.

- pages > index.js altındaki bütün import'lar silinir. (export default üstündeki tüm satırlar silinir) ve return() içerisi temizlenir.
  return() boş bir etiket açılır.(<> </>)..

\*JSX gösteriminde return içerisinde bütün HTML elemanları kapsayan bir etiket pşmak zorundadır. Ör:

...
return (

<h1 >test</h1>
)
...

şeklinde bir gösterim JSX yapısına uygun olmadığı için hata vericektir. bunun yerine bütün elemanları kapsayan bir parent etiket olmalıdır.
...
return (
<>

<h1>test</h1>
</>
);

## 3- projenin ayağı kaldırılması

Projemizi Ayağı kaldırmak için

...
npm run dev
...
komutu terminalde çalıştırıl.

## 4-JSX gösterimi

- inline css yazmak için HTML' de olduğu gibi style=""
  yapısını kullan yerine style= {{}} yapısını kullanmamız gerekmektedir. Dikkat Edilmesi gereken bir diğer husus ise CSS proplarını yazakarne tire işareti kullanmamaktarıdr bunun yerine camelCase gösterimi Kullanılır Ayrıca Css proplarını ayırmak için ";" yerine "," kullanılır.
