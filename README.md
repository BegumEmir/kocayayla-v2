# S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi — Web Sitesi v2

Çanakkale ili Çan ilçesine bağlı Kocayayla Köyü Tarımsal Kalkınma Kooperatifi'nin resmi web sitesidir.

🌐 **Canlı Site:** [kocayaylakooperatifi.org](https://kocayaylakooperatifi.org)

---

## Hakkında

Bu proje, daha önce yayında olan v1 sitesinin yeniden yazılmış halidir. V1 siteyi de ben geliştirmiştim; ancak fotoğraf ve videolar doğrudan repoda tutulduğundan yer kaplamaya başlamıştı. İçerik yönetimi de kod bilgisi gerektiriyordu. Bu sorunları çözmek ve siteyi daha sürdürülebilir hale getirmek amacıyla v2'yi geliştirdim.

V2 yaklaşık 2 günde tamamlanmış olup domain de bu siteye taşınmıştır.

---

## Teknolojiler

- **React** — Kullanıcı arayüzü
- **Vite** — Build aracı
- **Tailwind CSS** — Stillendirme (v1'de saf CSS kullanılmıştı)
- **Sanity CMS** — İçerik yönetim sistemi
- **React Router** — Sayfa yönlendirme
- **Netlify** — Deploy ve hosting

---

## Öne Çıkan Özellikler

- **Sanity CMS entegrasyonu** — Haber, duyuru, galeri, yönetim kurulu gibi tüm içerikler kod yazmadan Studio üzerinden yönetilebiliyor
- **Medya slider** — Haberlere birden fazla fotoğraf ve video eklenebiliyor, sıralama Studio'dan ayarlanabiliyor
- **Haber popup** — Site açılışında son haber gösteriliyor, "bugün tekrar gösterme" seçeneği localStorage ile yönetiliyor
- **Mobil uyumlu tasarım** — Tüm sayfalar telefon ve masaüstü için optimize edildi
- **SEO** — Meta etiketleri, Open Graph ve Google Search Console sitemap entegrasyonu
- **Kooperatif üyeleri için kolay içerik girişi** — Teknik bilgi gerektirmeden haber, duyuru, galeri eklenebiliyor

---

## Sayfalar

- Ana Sayfa
- Hakkımızda
- Başkanlar
- Yönetim & Denetim Kurulu
- Ortaklarımız
- Faaliyetler
- Haberlerimiz & Haber Detay
- Duyurular
- Galeri
- İletişim

---

## V1 ile Karşılaştırma

| | V1 | V2 |
|---|---|---|
| Stil | Saf CSS | Tailwind CSS |
| İçerik yönetimi | Kod ile | Sanity CMS |
| Medya depolama | GitHub reposu | Sanity CDN |
| Build aracı | — | Vite |

🔗 V1 reposuna ulaşmak için: [kocayayla-kooperatif](https://github.com/BegumEmir/kocayayla-kooperatif)

---

## Kurulum

```bash
git clone https://github.com/BegumEmir/kocayayla-v2.git
cd kocayayla-v2
npm install
```

`.env` dosyası oluştur:

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

```bash
npm run dev
```

---

## Öğrendiklerim / Zorluklar

- Sanity CMS'i ilk kez bir projede entegre ettim; içerik şemaları oluşturmayı, GROQ sorguları yazmayı ve görsel URL'lerini yönetmeyi öğrendim
- Git submodule sorunuyla karşılaştım ve terminalden çözdüm
- React Router ile SPA'da Netlify 404 sorununu `netlify.toml` ile çözdüm
- Sanity CORS ayarlarını hem geliştirme hem production ortamı için yapılandırdım